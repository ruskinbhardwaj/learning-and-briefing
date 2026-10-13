# Topics

Every article has one **primary** topic (listed first in `topics:`) and up to two secondary ones. The canonical list lives in `_data/topics.yml`; this file explains the scope.

The [Landscape](../landscape.md) page shows how the topics stack together. When an article changes the picture, update the Landscape page in the same pull request.

## Autonomous SDLC (`autonomous-sdlc`)

AI agents across the software lifecycle: requirements and planning, coding, code review, testing, security, deployment, operations and incident response.

- Key questions: Which stages can agents own end to end today? What does the human loop look like at each stage? What evidence (benchmarks, production reports) backs the claims?
- Belongs: agent architectures for software work, evaluation results, case studies of teams running agent-driven delivery, tooling (IDEs, CI integrations, review bots).
- Doesn't belong: general model releases with no software-delivery angle (that's Products & companies).

## AI-native operating models (`ai-native-operating-models`)

How companies decompose the problem of becoming AI-native: org structure, workflows, decision rights, data foundations, measurement, and the feedback loops (flywheels) that compound advantage.

- Key questions: What do companies actually change first? How do they split work between people and agents? Which flywheels are real (data, distribution, usage) and which are slideware?
- Belongs: company playbooks, org redesigns, operating metrics, studies of adoption, frameworks for decomposition.

## Products & companies (`products-and-companies`)

What is shipping and who is building it: model providers, platforms, applications, infrastructure vendors. Business models, funding, partnerships and acquisitions.

- Key questions: Where does each product sit in the stack? What is its flywheel? Who is it displacing?
- Every product article says where the product fits on the Landscape.

## Geopolitics (`geopolitics`)

Export controls, industrial policy, sovereignty initiatives, regulation, and competition between nations and blocs over AI capability and supply chains.

- Key questions: Who can build, buy and run what, and where? How do rules change the economics further down the stack?
- Held to the neutrality rules in [editorial.md](editorial.md).

## Enabling tech (`enabling-tech`)

The physical and protocol base: semiconductors and chip fabrication, energy and grid, datacenters and cooling, networking, and distributed ledger technology (DLT) where it plays a real role.

- Key questions: Where are the bottlenecks? What would loosen them, and on what timeline?
- DLT articles must show a concrete link to AI or software delivery, not crypto market news.

## Humans & AI (`humans-and-ai`)

AI's impact on fields like mathematics and science, and the roles people are likely to play alongside increasingly capable systems.

- Key questions: How are discovery and proof changing? Which human skills gain value and which lose it? What do practitioners in the field say?
- Separate evidence (results, studies) from forecasts, and label forecasts as such.

## Adding or changing a topic

1. Add an entry to `_data/topics.yml` (`id`, `name`, `summary`).
2. Add `topics/<id>.md` with `layout: topic` and `topic: <id>`.
3. Add a section to this file and a layer or note on the Landscape page.
4. Renaming an `id` breaks links; prefer changing `name` instead.
