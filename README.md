# Learning & Briefing

Dated learning articles and briefings on autonomous software delivery, AI-native companies, and the products, geopolitics and infrastructure shaping them.

**Site:** https://ruskinbhardwaj.github.io/learning-and-briefing/

## What's where

| Path | What |
|---|---|
| `_posts/` | Articles, named `YYYY-MM-DD-slug.md` |
| `principles/` | The rules every article follows: writing, editorial, structure, topics, feedback, automation, templates |
| `landscape.md` | The big-picture map of how the topics fit together |
| `_data/topics.yml`, `_data/types.yml` | Topic and article-type lists |
| `_layouts/`, `_includes/`, `assets/` | Site templates and styles |
| `.github/ISSUE_TEMPLATE/` | Forms for edit requests, questions and article requests |
| `.github/workflows/pages.yml` | Builds on PRs; builds and deploys on `main` and daily |

## Feedback

Every article ends with **Suggest an edit** and **Ask a question** links that open a pre-filled issue. See `principles/feedback.md` for what happens next.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/learning-and-briefing/.

## One-time setup

In the repository's **Settings → Pages**, set **Source** to **GitHub Actions**.
