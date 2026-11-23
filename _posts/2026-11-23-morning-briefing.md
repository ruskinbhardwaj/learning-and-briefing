---
title: "Morning briefing: 23 November 2026"
type: morning
topics: [enabling-tech, products-and-companies, ai-native-operating-models]
summary: >-
  The AI sell-off became a rout on Friday: the S&P 500 fell 3.7% into a
  correction, Nvidia dropped 14% and Anthropic gave back most of its debut
  gain. Over the weekend, a database maintenance slip took down three-quarters
  of ChatGPT requests for hours.
last_reviewed: 2026-11-23
sources:
  - title: "Stock Market Today, Nov. 20: Stocks Plunge as AI Trade Unwinds"
    publisher: The Motley Fool
    url: https://www.fool.com/coverage/stock-market-today/2026/11/20/stock-market-today-nov-20-stocks-plunge-as-ai-trade-unwinds/
    date: 2026-11-20
  - title: "Post-Market & Weekly Summary, 20 November 2026"
    publisher: The Closing Print
    url: https://www.theclosingprint.net/2026/11/post-market-and-weekly-summary-2026-11-20/
    date: 2026-11-20
  - title: "Stock Market Today, November 20, 2026: US Stocks Close Sharply Lower"
    publisher: StockTitan
    url: https://www.stocktitan.net/articles/stock-market-today-live-november-20-2026
    date: 2026-11-20
  - title: "Why Anthropic Stock Is Falling Today"
    publisher: The Motley Fool
    url: https://www.fool.com/investing/2026/11/20/why-anthropic-stock-is-falling-today/
    date: 2026-11-20
  - title: "Elevated Errors on API and ChatGPT: incident write-up"
    publisher: OpenAI Status
    url: https://status.openai.com/incidents/01JMYB602A6H2E04Y1497J434X/write-up
    date: 2026-11-21
  - title: "AI Daily Digest November 22, 2026"
    publisher: DEV Community
    url: https://dev.to/hiroki-ii-ai/ai-daily-digest-november-22-2026-openais-75-outage-oracles-money-loop-genie-4-opens-up-3239
    date: 2026-11-22
  - title: "Genie 4 in the Gemini API"
    publisher: Google
    url: https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api
    date: 2026-11-19
faq: []
updates: []
---

*Covers 20 to 23 November, including the weekend.*

**Today in one line:** the week Anthropic listed became the worst week for AI stocks in years, and the S&P 500 is now officially in a correction.

*Disclosure: this briefing is written by Claude, which Anthropic makes. The second item is about Anthropic.*

### The AI sell-off turned into a rout, pushing the S&P 500 into a correction
<span class="meta">Enabling tech</span>

On Friday 20 November the S&P 500 fell 3.7% to 6,910, a seventh straight loss that left it more than 10% below its record, the usual definition of a correction ([The Motley Fool](https://www.fool.com/coverage/stock-market-today/2026/11/20/stock-market-today-nov-20-stocks-plunge-as-ai-trade-unwinds/); [The Closing Print](https://www.theclosingprint.net/2026/11/post-market-and-weekly-summary-2026-11-20/)). The Nasdaq fell 5.3% and the Dow 1.9%. Nvidia dropped 14% to $125.53, with both outlets pointing to reports of a possible SEC accounting probe on top of the congressional inquiry into its China sales. Chip makers fell hardest: AMD and Micron were down about 13%, Broadcom about 12% and the TSMC ADR about 9.5% ([StockTitan](https://www.stocktitan.net/articles/stock-market-today-live-november-20-2026)). Bonds rallied, with the 10-year Treasury yield falling to about 4.9%.

```
  Week to 20 November (The Closing Print)
  S&P 500       ████████▌   -8.6%
  Nasdaq        ██████████  -10.0%
  Tech (XLK)    ████████████▌ -12.5%
  Nvidia        ███████████████████████ -22.9%
  10-yr yield   5.15% → 4.92%
```

**Why it matters:** a month ago the market was paying for every link in the AI supply chain. Now it is questioning whether the money going into chips and data centers will earn a return, and that doubt lands first on the companies with the most borrowed or committed capital. Falling bond yields suggest investors are moving to safety rather than simply rotating within stocks.

### Anthropic's shares fell 8.5% on day two, ending just above the IPO price
<span class="meta">Products & companies</span>

Anthropic closed Friday at $88.91, down 8.5% from Thursday's $97.17 and about 7% above the $83 IPO price, after trading as low as $83.05 ([The Motley Fool](https://www.fool.com/investing/2026/11/20/why-anthropic-stock-is-falling-today/); [StockTitan](https://www.stocktitan.net/articles/stock-market-today-live-november-20-2026)). Coverage put it down to the debut excitement fading during a broad AI sell-off, with profit-taking spreading to other AI names.

**Why it matters:** in two days the shares went from 34% above the IPO price to almost exactly at it. Buyers who got shares at $83 are still ahead, but anyone who bought in the opening minutes is down about 20%. Where the shares settle will shape how much appetite there is for the next big AI listing.

### A routine database job took down most ChatGPT requests for three and a half hours
<span class="meta">AI-native operating models</span>

On Saturday 21 November, from 1:48 to 5:21 am Pacific time, up to 75% of requests to paid and free ChatGPT failed, and the API was affected too ([OpenAI Status](https://status.openai.com/incidents/01JMYB602A6H2E04Y1497J434X/write-up); [DEV Community](https://dev.to/hiroki-ii-ai/ai-daily-digest-november-22-2026-openais-75-outage-oracles-money-loop-genie-4-opens-up-3239)). OpenAI's write-up says planned maintenance on a database knocked out both read copies used by the service that checks who users are, so requests depending on it failed. Restoring the copies and moving to other regions did not work; bringing two new copies online in the same region did. OpenAI has paused similar maintenance and is adding spare capacity during future work.

```
  Planned database maintenance
        │
        ▼
  both read copies fail at once
        │
        ▼
  sign-in service can't check users ──► 75% of ChatGPT requests fail
```

**Why it matters:** companies building their operations on AI depend on a few providers whose systems share hidden single points of failure. One sign-in database brought down most of the service, which is the case for keeping a second provider or a fallback in any AI-native workflow.

### Google opened its Genie 4 world model to developers
<span class="meta">Products & companies</span>

On 19 November Google made Genie 4, which turns a text prompt or image into an explorable 720p world at 24 frames a second with sound, available through the Gemini API and Google AI Studio, a day after offering it to top-tier consumer subscribers ([Google](https://blog.google/innovation-and-ai/technology/developers-tools/genie-4-in-gemini-api)). Google, the vendor, lists training robots and AI agents among its uses.

**Why it matters:** simulated worlds are one way to train agents and robots without the cost of the real world. Putting the model behind a paid API turns it from a research demo into something other companies can build on.

## On the radar

- **1 December:** Jensen Huang's closed-door House interviews.
- **3 and 10 December (requested):** public Senate Banking hearings with Huang and Commerce Secretary Lutnick.
- **December:** the Fed's next decision, with a rate rise still expected.
