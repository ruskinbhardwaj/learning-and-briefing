---
title: "Morning briefing: 26 November 2026"
type: morning
topics: [humans-and-ai, enabling-tech]
summary: >-
  OpenAI released a preprint, produced with an unnamed internal model, claiming
  to settle how fast matrices can in principle be multiplied; nobody outside has
  yet checked the key step. Stocks fell as much as 3.2% on inflation and tariff
  worries before almost fully recovering.
last_reviewed: 2026-11-26
sources:
  - title: "OpenAI claims matrix multiplication exponent is exactly 9/4"
    publisher: AI Weekly
    url: https://aiweekly.co/alerts/openai-claims-matrix-multiplication-exponent-is-exactly-94
    date: 2026-11-25
  - title: "OpenAI claims matrix multiplication exponent is 9/4; Bubeck \"never thought\" he'd see it"
    publisher: SteamDB
    url: https://steamdb.com/en/ai/openai-matrix-multiplication-nine-fourths
    date: 2026-11-25
  - title: "The matrix multiplication exponent is nine fourths (preprint)"
    publisher: OpenAI
    url: https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026
    date: 2026-11-24
  - title: "How major US stock indexes fared Wednesday 11/25/2026"
    publisher: AP via ABC News
    url: https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-wednesday-11252026-138453529
    date: 2026-11-25
  - title: "Stock Market Today, Nov. 25: Dow Erases 1,100-Point Loss as Wall Street Stages Dramatic Late-Day Comeback"
    publisher: The Motley Fool
    url: https://www.fool.com/coverage/stock-market-today/2026/11/25/stock-market-today-nov-25-dow-erases-1-100-point-loss-as-wall-street-stages-dramatic-late-day-comeback/
    date: 2026-11-25
  - title: "Stock Market Today, Nov. 25: Nvidia Slides 3.9% as the Market Considers Hot PCE Inflation Data and New Tariff Proposals"
    publisher: The Motley Fool
    url: https://www.fool.com/coverage/stock-market-today/2026/11/25/stock-market-today-nov-25-nvidia-slides-3-9-as-the-market-considers-hot-pce-inflation-data-and-new-tariff-proposals/
    date: 2026-11-25
faq: []
updates: []
---

*Covers 25 to 26 November. US markets are closed today for Thanksgiving.*

**Today in one line:** a week after an AI-assisted claim on the Riemann hypothesis, OpenAI claims an AI-produced answer to another famous open problem, this one at the heart of computing.

### OpenAI claims an AI-produced proof that settles a 57-year-old question about multiplying matrices
<span class="meta">Humans & AI</span>

Multiplying two large grids of numbers (matrices) is the basic operation behind AI and much of computing. Mathematicians measure how fast it can be done in principle with a number called omega: the time grows roughly like n to the power omega for an n-by-n grid. Since 1969 the best methods pushed omega down from 3 towards about 2.37, but nobody could prove it had to be above 2. A preprint OpenAI posted on 24 November claims omega is exactly 9/4 (2.25), pairing a method that achieves it with a proof that nothing can do better ([AI Weekly](https://aiweekly.co/alerts/openai-claims-matrix-multiplication-exponent-is-exactly-94); [SteamDB](https://steamdb.com/en/ai/openai-matrix-multiplication-nine-fourths); [OpenAI](https://github.com/openai/math/tree/main/preprints/The-matrix-multiplication-exponent-is-nine-fourths-November-24-2026)). OpenAI says the results came from an unnamed internal model and names no individual authors. Two independent groups have re-proved the 2.25 upper bound from an earlier OpenAI preprint, but SteamDB found no outside check of the new lower bound. Only part of it is computer-checked in Lean, and OpenAI's own repository warns that unformalised results "could have issues". Complexity theorist Scott Aaronson called the lower bound the bigger shock.

```
  How fast can n×n matrices be multiplied? (time ≈ n^ω)
  ω = 3      schoolbook method
  ω ≈ 2.81   Strassen, 1969
  ω ≈ 2.37   best methods by 2024
  ω = 2.25   OpenAI's claimed method (upper bound re-proved by others)
  ─────────────────────────────────────────────
  ω ≥ 2.25   OpenAI's claimed proof nobody can beat it (not yet checked)
  ω ≥ 2      all that was proved before
```

**Why it matters:** proving that something *cannot* be done faster is among the hardest things in theoretical computer science, so an AI-produced lower bound would be a bigger landmark than a new speed record. It won't make GPUs faster, because these methods only pay off on impossibly large matrices. Coming days after the Riemann claim, it also shows a new pattern: labs releasing machine-generated proofs first and leaving the human checking to follow.

### Stocks fell 3% on inflation and tariff worries, then almost fully recovered
<span class="meta">Enabling tech</span>

On Wednesday 25 November the S&P 500 fell as much as 3.2% before closing down only 0.3% at 7,182.78; the Dow erased a drop of more than 1,100 points to close up 0.3%, and the Nasdaq fell 0.6% ([AP via ABC News](https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-wednesday-11252026-138453529); [The Motley Fool](https://www.fool.com/coverage/stock-market-today/2026/11/25/stock-market-today-nov-25-dow-erases-1-100-point-loss-as-wall-street-stages-dramatic-late-day-comeback/)). Both point to a report showing inflation still high and to the administration's plans to escalate tariffs on major trading partners; the Fool reports October's PCE price index rising at a 3.8% annual rate, nearly twice the Fed's target. AI stocks fell for a second day, with Nvidia down 3.9% to $149.30 ([The Motley Fool](https://www.fool.com/coverage/stock-market-today/2026/11/25/stock-market-today-nov-25-nvidia-slides-3-9-as-the-market-considers-hot-pce-inflation-data-and-new-tariff-proposals/)). Despite the swings, the S&P 500 is up 3.9% for the week so far.

**Why it matters:** sticky inflation keeps a December rate rise on the table, which bears hardest on the borrowing behind AI data center building. The fast recovery suggests buyers are still stepping in on dips, but the size of the intraday swings shows how nervous the market remains.

## On the radar

- **Today, 26 November:** US markets closed for Thanksgiving; Friday is a shortened session.
- **1 December:** Jensen Huang's closed-door House interviews.
- **Coming weeks:** independent checks of OpenAI's lower-bound proof and of the Riemann Lean proof.
