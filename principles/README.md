# Principles

These files are the rules for every article on this site. Whoever writes or edits an article, person or Claude, follows them. If an article and a principle disagree, the principle wins; if a principle is wrong, change it here in its own commit so the change is visible.

| File | Covers |
|---|---|
| [topics.md](topics.md) | The six topics, what belongs in each, and how to add one |
| [structure.md](structure.md) | Article types, file naming, front matter, and the section templates |
| [writing.md](writing.md) | Voice, clarity, length and formatting |
| [editorial.md](editorial.md) | Sourcing, accuracy, dating, neutrality, corrections and staleness |
| [feedback.md](feedback.md) | How edit requests and questions become changes and FAQ entries |
| [automation.md](automation.md) | How articles, especially morning briefings, are generated on a schedule |
| [templates/](templates/) | Copy-ready skeletons for each article type |

## How an article gets made

1. **Pick the type and topic.** Use [structure.md](structure.md) to choose Learning, Briefing or Morning, and [topics.md](topics.md) to choose one primary topic (plus any secondary ones).
2. **Research.** Gather sources to the standard in [editorial.md](editorial.md). Note each source's publication date.
3. **Draft from the template.** Start from the matching file in [templates/](templates/) and follow [writing.md](writing.md).
4. **Check.** Run through the pre-publish checklist at the end of [editorial.md](editorial.md).
5. **Publish.** Commit the file to `_posts/` via a pull request. The site rebuilds on merge.
6. **Maintain.** Feedback arrives as issues and is handled per [feedback.md](feedback.md). Articles past their review date are refreshed or superseded per [editorial.md](editorial.md).

## The reader

The reader is Addy: technical and strategic, short on time, and reading to both learn and stay current. Write for someone who will act on what they read and who will notice hand-waving.
