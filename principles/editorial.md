# Editorial standards

## Sourcing

- **Primary first.** Prefer the original: company announcements, filings, papers, model cards, government documents, court records, conference talks. Use reporting to find primaries, and cite the reporting only for what it adds (interviews, leaks, analysis).
- **Two independent sources** for any claim that is contested, surprising, or market-moving, unless it comes from the primary party about itself (and is then attributed as reported).
- **Vendor claims** (benchmarks, customer counts, revenue) are labelled as vendor-reported unless independently confirmed.
- **Every source has a date.** Record the source's own publication date in `sources`. A source older than the article's review window is flagged in the text as background, not current.
- **No invented specifics.** If a number, name, date or quote can't be traced to a source, it doesn't go in. "Unknown" or "not disclosed" is an acceptable answer.

## Accuracy

- Re-check every figure against its source before publishing.
- Quotes are verbatim, attributed and linked.
- Don't extrapolate a trend from one data point.
- When sources disagree, say so and show both.

## Neutrality and fairness

- Geopolitical articles present each party's stated position in its own terms before analysing it. Avoid loaded labels; describe actions.
- Say who benefits from a claim being believed.
- Competitors get the same standard of evidence: don't accept one vendor's claims while doubting another's.
- Disclose limits: what we couldn't verify, and what we didn't look at.

## Dating and staleness

- Every article carries `date` (published) and `last_reviewed`. The site flags it as possibly out of date once `last_reviewed` plus the review window has passed.
- `last_reviewed` moves forward **only** when every claim in the article has been re-checked. Fixing a typo or adding an FAQ entry doesn't count.
- When an article goes stale:
  - **Learning**: re-check it, update it in place, log the changes under `updates`, and move `last_reviewed`.
  - **Briefing / Morning**: don't rewrite history. If things have moved on, write a new briefing and set `superseded_by` on the old one. If nothing material changed, re-check and move `last_reviewed`.

## Corrections

- Fix errors as soon as they're confirmed. Never silently change a fact.
- Log every substantive change in `updates` with the date and what changed ("Corrected the adoption figure: was 40%, source says 34%").
- If a correction changes the article's conclusion, say so in the first paragraph as well.

## Pre-publish checklist

- [ ] Type, primary topic and summary set; title is a claim or question.
- [ ] Structure matches the template for the type.
- [ ] Every non-obvious claim has a linked source; every source has a date.
- [ ] Facts, reported claims, analysis and forecasts are distinguishable.
- [ ] No relative dates; numbers have units and sources.
- [ ] "How it fits" links to the Landscape or related articles; Landscape updated if the picture changed.
- [ ] Within the length range.
- [ ] Site builds (`bundle exec jekyll build`) and the article renders.
