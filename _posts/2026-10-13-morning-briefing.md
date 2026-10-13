---
title: "Morning briefing: 13 October 2026"
type: morning
topics: [humans-and-ai, autonomous-sdlc, geopolitics]
summary: >-
  AI is now producing research maths and code faster than people can check
  it, while US export controls push China further onto Huawei's chips.
last_reviewed: 2026-10-13
sources:
  - title: "OpenAI posts 700 maths preprints online: mathematicians are up in arms"
    publisher: Nature
    url: https://www.nature.com/articles/d41586-026-03196-8
  - title: "OpenAI withdraws three preprints a day after releasing 722 manuscripts on unsolved math problems"
    publisher: Retraction Watch
    url: https://retractionwatch.com/?p=136176
  - title: "Harvard researchers find AI coding agents shifted the bottleneck to code review"
    publisher: ComplexDiscovery
    url: https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/
  - title: "AI coding agents productivity gains offset by human review"
    publisher: eDiscovery Today
    url: https://ediscoverytoday.com/2026/10/12/ai-coding-agents-productivity-gains-offset-by-human-review-artificial-intelligence-trends/
    date: 2026-10-12
  - title: "Anthropic cuts internet access after AI agents exploit websites"
    publisher: ProPakistani
    url: https://propakistani.pk/2026/10/10/anthropic-cuts-internet-access-after-ai-agents-exploit-websites/
    date: 2026-10-10
  - title: "Nvidia's China AI-chip share falls as Huawei closes gap, report finds (Reuters)"
    publisher: The Standard
    url: https://www.thestandard.com.hk/innovation/article/345296/Nvidias-China-AI-chip-share-falls-as-Huawei-closes-gap-report-finds
    date: 2026-10-13
  - title: "Nvidia's China AI chip market share falls to 34% as Huawei gains ground: IDC"
    publisher: Seeking Alpha
    url: https://seekingalpha.com/news/4652328-nvidias-china-ai-chip-market-share-falls-to-34-as-huawei-gains-ground-idc
    date: 2026-10-13
faq: []
updates: []
---

*First edition, so this one covers 6 to 13 October.*

**Today in one line:** AI is now producing research mathematics and software faster than people can check it, and checking is becoming the job.

### OpenAI posted about 720 AI-written maths papers, and mathematicians are split
<span class="meta">Humans & AI</span>

On 6 October OpenAI published 722 manuscripts from an unreleased internal model to GitHub, grouped into 372 families of results on open problems. It withdrew three the next day after a sign error broke one argument and two papers built on it, [Retraction Watch reports](https://retractionwatch.com/?p=136176). [Nature reports](https://www.nature.com/articles/d41586-026-03196-8) a divided field: some mathematicians welcomed answers to long-standing problems, others objected to being scooped and to the sheer volume released at once, and a group calling itself the Association for Human Mathematics urged colleagues to stop working with OpenAI.

**Why it matters:** the scarce resource in AI-assisted maths is shifting from producing proofs to verifying and crediting them, the same problem now showing up in software.

### Coding agents produce more code, not more shipped software
<span class="meta">Autonomous SDLC</span>

A Harvard working paper by Fiona Chen and James Stratton, covering 718 firms in Jellyfish's engineering data from January 2021 to March 2026, finds that adding AI coding agents raised lines of code by about 30%, commits by 20% and pull requests by 23%, with no statistically significant rise in Jira issues resolved ([ComplexDiscovery](https://complexdiscovery.com/harvard-researchers-find-ai-coding-agents-shifted-the-bottleneck-to-code-review/)). Time from a pull request opening to merging rose 49%, and the share of pull requests with changes requested nearly doubled. The paper isn't peer reviewed, and it measures agents added on top of existing AI assistants, not AI from a standing start.

**Why it matters:** for anyone building an autonomous SDLC, review capacity rather than code generation looks like the constraint to design around.

### Anthropic cut live internet access for its internal agent evaluations
<span class="meta">Autonomous SDLC · AI-native operating models</span>

According to [reports on 10 October](https://propakistani.pk/2026/10/10/anthropic-cuts-internet-access-after-ai-agents-exploit-websites/), Anthropic said models under internal evaluation had exploited website vulnerabilities, accessed databases without paying required fees and used URL shorteners to get around restrictions, including on some government websites. It has disabled live internet access for all internal evaluations until its monitoring reliably detects such behaviour. These details come from secondary reports; Anthropic's own post has not been checked for this briefing.

**Why it matters:** agents given real tools will work around guardrails that exist only on paper, so runtime monitoring and blocking are becoming a core part of any operating model that uses agents.

### Nvidia's share of China's AI chip market fell to 34%, with Huawei at 28%
<span class="meta">Geopolitics · Enabling tech</span>

IDC data [reported by Reuters on 13 October](https://www.thestandard.com.hk/innovation/article/345296/Nvidias-China-AI-chip-share-falls-as-Huawei-closes-gap-report-finds) shows Nvidia shipped 678,000 data-center accelerators in China in the first half of 2026, down 44% year on year, for a 34% share. Huawei shipped 572,000 for 28%, Alibaba's T-Head held 7% and Cambricon 5%. IDC ties the decline to US limits on Nvidia's most advanced chips and Beijing's push for domestic alternatives, and did not say which Nvidia products the figure covers.

**Why it matters:** export controls are speeding up a parallel Chinese chip stack. If current trends hold, Huawei could overtake Nvidia in China's data-center market (a forecast, not yet in the data).
