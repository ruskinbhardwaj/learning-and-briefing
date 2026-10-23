---
title: "How DuckDB runs analytics inside your process, and why that beats a server for local data"
type: learning
topics: [products-and-companies, enabling-tech]
summary: >-
  DuckDB is a columnar, vectorized SQL engine that runs as a library inside
  your program, so a laptop can query gigabytes of Parquet and CSV in place
  with no server, no load step and no data copied over a socket.
last_reviewed: 2026-10-23
sources:
  - title: "Announcing DuckDB 2.0.0 LTS \"Cinnamon Teal\""
    publisher: DuckDB
    url: https://duckdb.org/2026/10/21/announcing-duckdb-200
    date: 2026-10-21
  - title: "A Preview of DuckDB v2.0"
    publisher: DuckDB
    url: https://duckdb.org/2026/08/17/duckdb-20-highlights
    date: 2026-08-17
  - title: "Why DuckDB (undated page, read 23 October 2026)"
    publisher: DuckDB
    url: https://duckdb.org/why_duckdb.html
    date: 2026-10-23
  - title: "Internals overview, DuckDB 2.0 documentation (read 23 October 2026)"
    publisher: DuckDB
    url: https://duckdb.org/docs/2.0/internals/overview.html
    date: 2026-10-23
  - title: "Execution format (vectors), DuckDB 2.0 documentation (read 23 October 2026)"
    publisher: DuckDB
    url: https://duckdb.org/docs/2.0/internals/vector.html
    date: 2026-10-23
  - title: "Concurrency, DuckDB 2.0 documentation (read 23 October 2026)"
    publisher: DuckDB
    url: https://duckdb.org/docs/2.0/connect/concurrency
    date: 2026-10-23
  - title: "DuckDB: an Embeddable Analytical Database (SIGMOD 2019 demo paper)"
    publisher: Mark Raasveldt and Hannes Mühleisen, CWI
    url: https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf
    date: 2019-06-30
  - title: "Push-Based Execution in DuckDB (talk)"
    publisher: Mark Raasveldt, Dutch Seminar on Data Systems Design
    url: https://duckdb.org/library/push-based-execution-in-duckdb/
    date: 2021-11-26
  - title: "Lightweight Compression in DuckDB"
    publisher: DuckDB
    url: https://duckdb.org/2022/10/28/lightweight-compression.html
    date: 2022-10-28
  - title: "No Memory? No Problem. External Aggregation in DuckDB"
    publisher: DuckDB
    url: https://duckdb.org/2024/03/29/external-aggregation.html
    date: 2024-03-29
  - title: "ALP: Adaptive Lossless Floating-Point Compression (SIGMOD 2024)"
    publisher: Azim Afroozeh, Leonardo X. Kuffo and Peter A. Boncz, CWI
    url: https://duckdb.org/library/alp/
    date: 2024-06-09
faq: []
updates: []
---

DuckDB is a SQL database that runs as a library inside your own program, the way SQLite does, but built for analytics: scanning, joining and aggregating millions of rows rather than looking up one record at a time. By the end of this article you'll know the path a query takes through its engine, why that design makes it fast on a single machine, and how to use it for its main job, which is querying local or cloud files (Parquet, CSV, JSON) in place. It matters because a large share of "we need a warehouse" work fits on one laptop, and DuckDB is the tool that made that practical. Version 2.0.0, released on 21 October 2026, also adds an optional server mode, so the "embedded only" line is starting to blur.

## The short version

- **No server.** DuckDB runs in your process (Python, R, Node, Java, the CLI, even the browser via WebAssembly) and reads files where they sit. Results land straight in your program's memory.
- **Columns, in batches.** It stores and processes data by column, and every operator works on vectors of 2,048 values at a time, which keeps the CPU busy and its caches warm.
- **The query path is a classic database pipeline:** parser, binder, logical planner, optimizer, physical planner, then a push-based, multi-threaded execution engine.
- **Storage is compressed columns in row groups of 122,880 rows**, each with min/max statistics so scans skip what can't match. It can spill to disk when a query doesn't fit in memory.
- **Use it for analytics on one machine.** It isn't built for many concurrent writers or high-rate single-row transactions; that is still a job for PostgreSQL or similar.

## How it works

### Why in-process is the core design choice

DuckDB's founding argument, from the [2019 SIGMOD paper](https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf) by Mark Raasveldt and Hannes Mühleisen at CWI Amsterdam (background, but the argument hasn't changed), is that SQLite had made embedded databases ubiquitous yet performs poorly on analytical work, and "there is a clear need for embeddable analytical data management". Running inside the host process removes two costs that dominate local analytics with a client-server database: shipping results over a socket and serialising them into a wire format. When DuckDB hands a result to Python, it is a memory handoff, not a network transfer.

The [project page](https://duckdb.org/why_duckdb.html) adds the practical half: DuckDB "has no external dependencies, neither for compilation nor during run-time", builds with only a C++17 compiler, runs on Linux, macOS and Windows on x86 and ARM, and is MIT-licensed, with the intellectual property held by the non-profit DuckDB Foundation. That is why `pip install duckdb` is the entire installation.

### The path a query takes

Every SQL statement goes through the same seven stages, described in the [internals overview](https://duckdb.org/docs/2.0/internals/overview.html):

| Stage | What it produces | What it does |
|---|---|---|
| **Parser** | `SQLStatement`, `ParsedExpression` | Turns text into a syntax tree. It knows nothing about tables or types yet. In 2.0 this is a new PEG-based parser that replaced the PostgreSQL-derived one used since 2018. |
| **Binder** | `BoundStatement`, typed `Expression` | Looks up tables and columns in the catalog, assigns types, and finds aggregates and window functions. "No such column" errors come from here. |
| **Logical planner** | `LogicalOperator` tree | Builds the relational plan: scan, filter, join, aggregate, order. |
| **Optimizer** | Rewritten logical tree | Folds constants, pushes filters down towards the scans, reorders joins with dynamic programming (the DPhyp algorithm), removes common subexpressions, and rewrites big `IN (...)` lists as joins. |
| **Column binding resolver** | Positional references | Replaces "column `fare` of table `t`" with "slot 3 of the incoming batch". |
| **Physical planner** | `PhysicalOperator` tree | Chooses concrete algorithms: hash join, hash aggregate, Parquet scan with pushed-down filters. |
| **Execution** | Result `DataChunk`s | Runs the physical operators, pushing batches of rows through them on all available cores. |

You can see the output of the optimizer and physical planner on any query by prefixing it with `EXPLAIN`; the worked example below does this.

### Vectors: the unit of work

The engine never processes one row at a time. Its unit is a `DataChunk`, a set of column vectors that each hold up to 2,048 values (the [`STANDARD_VECTOR_SIZE`](https://duckdb.org/docs/2.0/internals/vector.html)). A filter, say `payment = 'card'`, runs one tight loop over 2,048 strings, not 2,048 trips through a generic row interpreter. This is the "columnar-vectorized" model: queries are still interpreted, not compiled to machine code, but the interpretation overhead is paid once per batch instead of once per row. The 2019 paper says the team chose interpretation over just-in-time compilation for portability.

Vectors also come in several physical forms so data can stay compressed while it is processed. A *constant* vector stores one value for the whole batch, a *dictionary* vector stores small indexes into a list of distinct values, and a *sequence* vector stores just a start and a step. Short strings (12 bytes or fewer) are stored inline in the vector rather than behind a pointer, which saves a memory lookup on the common case.

### Push-based pipelines across all cores

The execution model changed after the original paper. In 2019 DuckDB used a "Vector Volcano" model, where the top operator *pulls* batches from its children. It now uses a [push-based vectorized model](https://duckdb.org/docs/2.0/internals/overview.html), where scans *push* `DataChunk`s up through the operators, a change Raasveldt presented in a [2021 talk](https://duckdb.org/library/push-based-execution-in-duckdb/) (background).

In practice a plan is cut into pipelines at the operators that must see all their input before producing output, such as building a hash table for a join or finishing an aggregate. Within a pipeline, worker threads each take a different slice of the source (a different set of row groups in a table or a Parquet file) and push it through independently. By default DuckDB uses one thread per core; on the 4-core machine used for the example below, `threads` defaulted to 4.

### Storage: compressed columns with skip statistics

When you keep data in DuckDB's own file format (a single `.duckdb` file), tables are split into **row groups of 122,880 rows** (60 vectors of 2,048), and each column in a row group is stored separately in fixed-size blocks, 256 KiB by default in 2.0. For each column segment DuckDB runs an [analysis pass and picks the best compression](https://duckdb.org/2022/10/28/lightweight-compression.html) from a menu: constant, run-length, bit-packing, frame-of-reference, dictionary, FSST for strings with shared substrings, and [ALP](https://duckdb.org/library/alp/) for floating-point numbers. Each segment also records min/max statistics (a *zone map*), so a filter like `pickup_at >= '2026-03-01'` skips whole row groups without reading them. The same pruning applies to Parquet files, which carry equivalent statistics.

Transactions use multi-version concurrency control (MVCC): each transaction sees a consistent snapshot while others write. The original design adapted [HyPer's serializable MVCC](https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf), which updates in place and keeps old versions in an undo buffer. The [current documentation](https://duckdb.org/docs/2.0/connect/concurrency) describes optimistic concurrency control on top: concurrent appends never conflict, but if two threads change the same row, the second gets a conflict error and must retry.

### When data doesn't fit in memory

DuckDB has a single buffer manager for both table data and temporary query state, with a memory limit you can set (`SET memory_limit = '4GB'`). When a large aggregation outgrows it, DuckDB [writes partitions of its hash tables to disk](https://duckdb.org/2024/03/29/external-aggregation.html) and processes them one at a time. In that March 2024 test, DuckDB grouped about a billion distinct keys from a 50 GB dataset on a 16 GB laptop in about 4.5 minutes. Version 2.0 [extends spilling](https://duckdb.org/2026/08/17/duckdb-20-highlights) to more aggregation cases and pushes partial aggregates below joins to shrink intermediate results.

### What changed in 2.0

[DuckDB 2.0.0](https://duckdb.org/2026/10/21/announcing-duckdb-200) is a long-term support release, supported until at least October 2027. The changes that touch the architecture above:

- **Asynchronous I/O** for Parquet, CSV and native files: "the I/O layer now scales independently from the query processing layer", which mainly speeds up reads from object storage such as S3.
- **A new PEG parser** replaces the PostgreSQL-derived YACC parser, with precise error locations; `SET enable_legacy_parser = true` restores the old one.
- **Client-server mode** through the `quack` extension: any DuckDB process can serve its databases with `quack_serve()`, and clients attach with `CONNECT`. It listens only on localhost by default.
- **Storage format v2.0**, which DuckDB versions before 2.0 can't read. Files written by older versions still open in 2.0.
- **A CLI "agent mode"** that detects when a coding agent is driving it and returns compact Markdown tables and JSON errors. DuckDB reports a 59% cut in output the model had to read in its TPC-H experiments (vendor-reported).

## In practice

DuckDB's primary use is analysing files on one machine without loading them into a server first. Here is a complete, runnable example on DuckDB 2.0.0 in Python. It analyses three months of ride data (3 million rows across three Parquet files, about 32 MB) joined to a small CSV lookup table. The data is synthetic so you can reproduce it exactly; the same SQL works on real files such as the New York taxi trip records.

### Step 1: install and make some data

```bash
pip install duckdb pandas
```

```python
import duckdb, os
os.makedirs("trips", exist_ok=True)
con = duckdb.connect()          # an in-memory database, living inside this Python process

for m in (1, 2, 3):             # three monthly Parquet files, 1 million rides each
    con.sql(f"""
      COPY (
        SELECT TIMESTAMP '2026-0{m}-01' + to_seconds((random()*27*86400)::BIGINT) AS pickup_at,
               (1 + floor(random()*20))::INT                       AS pickup_zone,
               round(1 + random()*15, 1)                           AS distance_km,
               round(3 + random()*40, 2)                           AS fare_usd,
               CASE WHEN random() < 0.7 THEN 'card' ELSE 'cash' END AS payment
        FROM range(1000000)
      ) TO 'trips/2026-0{m}.parquet' (FORMAT parquet)""")

con.sql("""COPY (SELECT i AS zone_id, 'Zone ' || i AS zone_name,
                 CASE WHEN i <= 5 THEN 'Centre' WHEN i <= 12 THEN 'Inner' ELSE 'Outer' END AS borough
                 FROM range(1, 21) t(i)) TO 'zones.csv' (HEADER)""")
```

### Step 2: query the files directly

There is no `CREATE TABLE` and no import. A file path, or a glob over many files, is a table:

```python
print(con.sql("SELECT count(*) FROM 'trips/*.parquet'"))      # 3000000

q = """
SELECT z.borough,
       date_trunc('month', t.pickup_at)                AS month,
       count(*)                                        AS trips,
       round(avg(t.fare_usd), 2)                       AS avg_fare,
       round(sum(t.fare_usd) / sum(t.distance_km), 2)  AS usd_per_km
FROM read_parquet('trips/*.parquet') AS t
JOIN read_csv('zones.csv')          AS z ON t.pickup_zone = z.zone_id
WHERE t.payment = 'card'
GROUP BY ALL
ORDER BY month, borough
"""
print(con.sql(q))
```

```text
┌─────────┬─────────────────────┬────────┬──────────┬────────────┐
│ borough │        month        │ trips  │ avg_fare │ usd_per_km │
├─────────┼─────────────────────┼────────┼──────────┼────────────┤
│ Centre  │ 2026-01-01 00:00:00 │ 175432 │    23.02 │       2.71 │
│ Inner   │ 2026-01-01 00:00:00 │ 244634 │     23.0 │       2.71 │
│ Outer   │ 2026-01-01 00:00:00 │ 279984 │    23.02 │       2.71 │
│ ...     │ ...                 │    ... │      ... │        ... │
└─────────┴─────────────────────┴────────┴──────────┴────────────┘
```

On a 4-core cloud container this query took about 0.1 seconds. Your counts will differ slightly because the data is random. `read_csv` sniffed the CSV's header and column types on its own, and `GROUP BY ALL` groups by every column that isn't an aggregate.

### Step 3: see what the engine did

Prefix the query with `EXPLAIN` to see the physical plan. Trimmed to the bottom of the tree:

```text
╭─ Hash Join ──────────────────────────────╮
│ Conditions: pickup_zone = zone_id        │
╰─────────────────────┬────────────────────╯
╭─ Read Parquet ──────┴────────────────────╮  ╭─ Read Csv ─────────────╮
│ Projections: pickup_zone, pickup_at,     │  │ Projections: zone_id,  │
│              fare_usd, distance_km       │  │              borough   │
│ Filters: payment = 'card'                │  ╰────────────────────────╯
│ ~600,000 rows                            │
╰──────────────────────────────────────────╯
```

Two optimizer rules from the table above are visible here. **Projection pushdown**: the Parquet reader only decodes the four columns the query needs. **Filter pushdown**: `payment = 'card'` is applied inside the scan, so the rejected rows never enter the join. Above this sit a `Hash Group By` and an `Order By`, the two points where pipelines break. Use `EXPLAIN ANALYZE` to get the same tree with actual row counts and time per operator.

### Step 4: hand results to the rest of your code, or to a file

```python
df = con.sql(q).df()                                    # pandas DataFrame, no copy over a socket
con.sql("SELECT borough, sum(trips) FROM df GROUP BY ALL")   # and DuckDB can query that DataFrame by name

con.sql(f"COPY ({q}) TO 'monthly_by_borough.parquet' (FORMAT parquet)")
```

The second line is the in-process design paying off: DuckDB finds the Python variable `df` and scans it as a table. The same works for Apache Arrow tables.

### Step 5: persist when you'll query repeatedly

Querying Parquet in place is right for one-off analysis. If you'll hit the same data many times, load it once into a database file:

```python
db = duckdb.connect("rides.duckdb")
db.sql("CREATE TABLE trips AS FROM 'trips/*.parquet'")
db.sql("SELECT compression, count(*) FROM pragma_storage_info('trips') GROUP BY ALL")
```

Doing this on the 3 million rows produced 27 row groups (at most 122,880 rows each; the parallel load leaves a few partly filled) and a 29 MB file, a little smaller than the 32 MB of Parquet. `pragma_storage_info` showed DuckDB choosing a different compression for each column: ALP for the two decimal-valued columns, bit-packing for the timestamp and zone ID, and dictionary-plus-FSST for the `payment` strings.

### Where people use this

The same pattern scales from this toy to real work: point DuckDB at `s3://bucket/events/*.parquet` (with the `httpfs` extension), at a folder of CSV exports, or at a data lake table through the Iceberg, Delta or DuckLake extensions, and run SQL without standing up a cluster. Typical uses are notebooks and data science, data pipeline steps (transform a file, write a file), embedded analytics inside an application, and the test suite for a warehouse model that will later run on Snowflake or BigQuery.

## Where it breaks

- **One writer process.** A database file can be opened read-write by [one process at a time](https://duckdb.org/docs/2.0/connect/concurrency), or read-only by many. Threads inside that process can write concurrently, but a web app with many independent writer processes needs either the new `quack` server mode or a different database.
- **Not for high-rate small transactions.** The design trades single-row write speed for scan speed. The 2019 paper aimed for OLAP efficiency "without completely sacrificing OLTP performance", which is a different target from PostgreSQL's.
- **One machine.** DuckDB parallelises across the cores of one computer, not across a cluster. Spilling to disk stretches how much data that covers, but if the job needs hundreds of machines' worth of I/O, it needs a distributed engine.
- **The 2.0 file format is one-way.** Once 2.0 writes a database file, DuckDB 1.x can't read it. Teams with mixed versions should test on a copy first, as the [release notes](https://duckdb.org/2026/10/21/announcing-duckdb-200) advise.
- **Server mode is new.** Quack's client-server mode shipped in 1.5.3 in May 2026 and was polished for 2.0. It only listens on localhost by default, and remote access needs a TLS reverse proxy. Treat it as young.

## How it fits

On the [Landscape]({{ '/landscape/' | relative_url }}), DuckDB is a product in the data layer underneath AI work, and it touches enabling tech because its design is a bet on hardware: a single modern machine with many cores, fast SSDs and tens of gigabytes of memory now handles workloads that needed a cluster a decade ago. *This suggests* some analytics spend moves from cloud warehouses back to laptops and small servers, with warehouses kept for shared, governed data.

It also links to Autonomous SDLC. An engine with zero setup and a SQL interface is easy for coding agents to use, and the 2.0 CLI's agent mode is an explicit design response to agents being its users.

## Further reading

1. [Announcing DuckDB 2.0.0](https://duckdb.org/2026/10/21/announcing-duckdb-200): the current release, with the full list of new features and breaking changes.
2. [DuckDB internals overview](https://duckdb.org/docs/2.0/internals/overview.html): the official walk through each stage of the query path, with the class names to look for in the source.
3. [DuckDB: an Embeddable Analytical Database](https://duckdb.org/pdf/SIGMOD2019-demo-duckdb.pdf): the four-page 2019 paper that explains the original design choices.
4. [Lightweight Compression in DuckDB](https://duckdb.org/2022/10/28/lightweight-compression.html): how the storage layer picks a compression for each column segment.
5. [No Memory? No Problem. External Aggregation in DuckDB](https://duckdb.org/2024/03/29/external-aggregation.html): how a billion-group aggregation runs on a 16 GB laptop.
