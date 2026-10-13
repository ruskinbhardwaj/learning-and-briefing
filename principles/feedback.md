# Feedback: edits and FAQ

Readers send feedback after reading an article. Every piece gets a visible outcome.

## How feedback arrives

- **Article links.** Every article ends with "Suggest an edit" and "Ask a question". Each opens a pre-filled GitHub issue (labels `edit-request` or `faq`) with the article URL.
- **Article requests.** The "Request an article" issue template (label `article-request`).
- **Chat.** Addy can say it in the Learning and Briefings project; Claude files or handles it the same way, linking the issue.

## Handling an edit request

1. Read the article and the request. Check the claim against sources.
2. If the request is right, edit the article, add an `updates` entry dated today saying what changed, and open a PR that closes the issue (`Closes #N`).
3. If it's partly right, apply what holds up and explain the rest in the issue.
4. If it's wrong, reply in the issue with the evidence and close it.
5. If the article's conclusion changes, follow the corrections rule in [editorial.md](editorial.md).

## Handling a question

1. Answer it from sources, to the same standard as the article.
2. If the answer is useful to any reader, add it to the article's `faq` with today's date.
3. If the question exposes a gap the article should have covered, also fix the body and log it in `updates`.
4. If the question is big enough for its own article, answer briefly in the FAQ and open an `article-request` issue linking it.
5. Close the issue with a link to the change.

## FAQ format

```yaml
faq:
  - q: "Does this apply to monorepos?"     # The reader's question, tidied but faithful.
    a: >-                                    # Markdown. Lead with the answer. Link sources.
      Yes, with one caveat: ...
    date: 2026-10-20                         # When the answer was added.
```

Adding an FAQ entry doesn't move `last_reviewed`.
