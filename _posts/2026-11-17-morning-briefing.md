---
title: "Morning briefing: 17 November 2026"
type: morning
topics: [geopolitics, enabling-tech, products-and-companies, autonomous-sdlc]
summary: >-
  The US issued a rule to stop Chinese companies renting advanced AI chips
  through overseas data centers, and tech stocks fell sharply the day before
  Nvidia's results.
last_reviewed: 2026-11-17
sources:
  - title: "US tightens AI chip export controls to deter Chinese companies from accessing compute remotely"
    publisher: TechCrunch
    url: https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/
    date: 2026-11-16
  - title: "Commerce Department moves to curb remote access to AI chips"
    publisher: CBS News via Yahoo News
    url: https://www.yahoo.com/news/politics/articles/commerce-department-moves-curb-remote-151352909.html
    date: 2026-11-16
  - title: "Stock market today, November 16, 2026: tech stocks pull the market lower before Nvidia's results"
    publisher: Stock Titan (citing CNBC)
    url: https://www.stocktitan.net/articles/stock-market-today-live-november-16-2026
    date: 2026-11-16
  - title: "Jensen Huang discusses comeback as Nvidia CEO with allies, FT reports"
    publisher: Yahoo Finance (Reuters)
    url: https://finance.yahoo.com/markets/stocks/articles/jensen-huang-discusses-comeback-nvidia-192628314.html
    date: 2026-11-15
  - title: "Nvidia board is not considering bringing Jensen Huang back as CEO, source tells CNBC"
    publisher: CNBC
    url: https://www.cnbc.com/2026/11/16/nvidia-ceo-jensen-huang.html
    date: 2026-11-16
  - title: "Nvidia board not considering Jensen Huang's return as CEO: report"
    publisher: Business Standard (ANI)
    url: https://www.business-standard.com/amp/technology/tech-news/nvidia-board-not-considering-jensen-huang-s-return-as-ceo-report-126111700050_1.html
    date: 2026-11-17
  - title: "Meituan releases a 1.6 trillion parameter agent model that never touched an Nvidia GPU"
    publisher: The Decoder
    url: https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/
    date: 2026-11-15
faq: []
updates: []
---

*Covers 16 to 17 November.*

**Today in one line:** Washington closed the "rent it instead of buying it" route to American AI chips, and markets sold off ahead of Nvidia's results tonight.

### The US now requires licences for data centers that could serve Chinese companies
<span class="meta">Geopolitics</span>

On 16 November the Commerce Department issued an interim rule requiring a licence to send advanced AI chips and servers to data centers anywhere in the world if they may supply computing to companies from China and about 20 other restricted countries, including through brokers ([TechCrunch](https://techcrunch.com/2026/11/16/us-tightens-ai-chip-export-controls-to-deter-chinese-companies-from-accessing-compute-remotely/)). It covers sites above roughly the power of 750 H100 or H200 chips, and existing operators have 90 days to get licences. Separately, chip exports to Brazil, Indonesia, Malaysia, Singapore and Thailand now need licences, except for US-owned companies ([CBS News via Yahoo](https://www.yahoo.com/news/politics/articles/commerce-department-moves-curb-remote-151352909.html)). The rule also formally scraps the Biden administration's January 2025 AI Diffusion Rule. Commerce called it "a logical extension of existing controls".

```
  Before: controls covered where the chip was shipped
    US chip ──► data center in Malaysia ──► rented by Chinese firm  no licence needed

  After: controls also cover who uses the computing
    US chip ──► data center anywhere ──► Chinese firm?  needs a licence
                (above ≈ 750 H100s)      operator must check ownership
```

**Why it matters:** until now, export controls followed the hardware; this rule follows the user. That closes the route shown in last week's Reuters findings, but moves the burden onto cloud and data center operators, who must now check who controls their customers. Southeast Asian data center hubs, now named in the rule, face the biggest adjustment. China's response is the next thing to watch.

### Tech stocks fell sharply before Nvidia's results
<span class="meta">Products & companies</span>

On 16 November the S&P 500 fund fell 1.9% and the Nasdaq 100 fund 2.7% ([Stock Titan, citing CNBC](https://www.stocktitan.net/articles/stock-market-today-live-november-16-2026)). Nvidia fell 4.1%, Micron 7.6% and Intel 7.0%, and coverage cited the new chip rule and a weak New York factory survey alongside nerves before Nvidia reports tonight. Over the weekend the Financial Times reported that Jensen Huang has discussed a return as CEO with allies ([Yahoo Finance via Reuters](https://finance.yahoo.com/markets/stocks/articles/jensen-huang-discusses-comeback-nvidia-192628314.html)); a source told CNBC on Monday that the board is not considering it ([CNBC](https://www.cnbc.com/2026/11/16/nvidia-ceo-jensen-huang.html)), and Fox News carried the same account. President Trump said he "would not mind" a return ([Business Standard](https://www.business-standard.com/amp/technology/tech-news/nvidia-board-not-considering-jensen-huang-s-return-as-ceo-report-126111700050_1.html)).

**Why it matters:** Nvidia now reports with three questions at once: demand for its chips, who will lead it, and how a rule aimed at China changes its overseas sales. The comeback talk shows how much the market still identifies the company with one person, and the board's reported position shows it wants to move on. Tonight's numbers and guidance will matter more than either.

### A Chinese open model for coding agents says it runs on Huawei chips
<span class="meta">Autonomous SDLC</span>

Meituan released the weights of LongCat-2.5, a 1.6-trillion-parameter model for coding and other agent tasks, under the permissive MIT licence ([The Decoder](https://the-decoder.com/meituan-releases-a-1-6-trillion-parameter-agent-model-that-never-touched-an-nvidia-gpu/)). Its own deployment guide uses 194 Huawei Ascend chips and doesn't mention Nvidia. Meituan's benchmark results put it close to leading US models on some coding tests; these are vendor-reported and not independently checked.

**Why it matters:** on the same day the US tightened access to its chips, a large Chinese company showed a capable coding model running on domestic hardware. One release doesn't prove China can do without Nvidia, but it is the outcome export controls are meant to delay, and it shows the work going into getting there.

## On the radar

- **Tonight, 17 November:** Nvidia's quarterly results ([Nvidia](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Announces-CEO-Transition/)).
- **18–19 November:** Anthropic's expected IPO pricing and first day of trading.
- **Within 90 days:** existing data center operators must have licences under the new rule.
