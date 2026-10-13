# Structure

## Article types

| Type | `type:` | What it is | Length | Review window |
|---|---|---|---|---|
| Learning | `learning` | Evergreen explainer: how something works and why it matters | 1,500–3,000 words | 365 days |
| Briefing | `briefing` | One recent development in depth: what happened, why it matters, what to watch | 600–1,200 words | 90 days |
| Morning briefing | `morning` | Daily roundup of what changed across all topics in the last 24 hours | 400–800 words, 3–7 items | 7 days |

Review windows are set in `_config.yml` (`review_days`). An article can override with its own `review_days` when it is clearly faster or slower moving than its type.

## Files and URLs

- Articles live in `_posts/` as `YYYY-MM-DD-slug.md`. The date is the publication date.
- The slug is short, lowercase and hyphenated, and describes the subject, not the date: `2026-10-13-agentic-code-review.md`.
- Morning briefings use the slug `morning-briefing`: `2026-10-14-morning-briefing.md`.
- URLs are `/YYYY/MM/DD/slug/`. Never rename a published file; it breaks links.

## Front matter

```yaml
---
title: "Agentic code review: what's actually working"   # Sentence case. A claim or a question, not a label.
type: briefing                                          # learning | briefing | morning
topics: [autonomous-sdlc, products-and-companies]       # Primary first. One to three.
summary: >-                                             # One sentence. Shown in lists and as the lede.
  Three vendors now ship review agents that block merges; early data shows
  fewer escaped defects but more reviewer fatigue.
last_reviewed: 2026-10-13                               # Date every claim was last checked. Starts equal to the publish date.
# review_days: 30                                       # Optional override of the type's window.
# superseded_by: /2027/01/15/agentic-code-review-revisited/  # Set when a newer article replaces this one.
sources:                                                # Every source the article relies on.
  - title: "Announcing ..."
    publisher: Example Corp
    url: https://example.com/post
    date: 2026-10-10                                    # Source's own publication date.
faq: []                                                 # Filled from reader questions, see feedback.md.
#   - q: "Does this apply to monorepos?"
#     a: "Yes, with one caveat: ..."
#     date: 2026-10-20
updates: []                                             # Dated log of substantive changes, see editorial.md.
#   - date: 2026-10-20
#     note: "Corrected the adoption figure (was 40%, source says 34%)."
---
```

The layout renders the dates, the stale banner, FAQ, Sources, Updates and the feedback links from this front matter. Don't repeat them in the body.

## Section templates

Copy-ready versions are in [templates/](templates/).

### Learning

1. **Opening paragraph**: what this is and why it matters, in three or four sentences. No heading.
2. **The short version**: three to five bullets a reader could stop after.
3. **How it works**: the mechanism, step by step. One diagram or table if it shows the mechanism better than prose.
4. **In practice**: real examples with names, numbers and dates.
5. **Where it breaks**: limits, failure modes, open debates.
6. **How it fits**: where this sits on the Landscape and links to related articles.
7. **Further reading**: three to five annotated links, best first.

### Briefing

1. **TL;DR**: two or three sentences: what happened, and the one thing it changes.
2. **What happened**: facts only, dated, sourced.
3. **Why it matters**: analysis, labelled as such. Who gains, who loses, what it unlocks.
4. **How it fits**: where it sits on the Landscape; what earlier articles it updates.
5. **What to watch**: two to four concrete signals that would confirm or overturn the analysis, with dates where known.

### Morning briefing

1. **Today in one line**: the single most important development.
2. **Items**: three to seven, most important first. Each item is a bold headline, two to four sentences (what, so what), the topic, and a source link. Items with nothing new are left out; a quiet day gets a short briefing, not padding.
3. **On the radar**: optional, up to three upcoming dates or decisions worth knowing about.

A morning item that deserves more than four sentences becomes a candidate for its own Briefing; note it under "On the radar" or open an article request.
