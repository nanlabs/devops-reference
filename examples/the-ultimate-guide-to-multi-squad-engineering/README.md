# The Ultimate Guide to Multi-Squad Engineering

How to scale from one team to several autonomous squads without losing alignment: what to unify, what to leave local, and the phased playbook to get there. Inspired by the Spotify model, adapted for delivery teams that need auditability.

## Shared vs Local

**Unify across squads** (non-negotiable):

| Domain                              | Why shared                            |
| ----------------------------------- | ------------------------------------- |
| Incident management & RCA           | Traceability and audit readiness      |
| Monitoring & observability          | Shared view of product health         |
| Security & privacy baselines        | Compliance requirements               |
| Task lifecycle & Definition of Done | Consistent delivery expectations      |
| Release process & rollback          | Predictability                        |
| Documentation format                | Discoverability and knowledge sharing |

**Leave to squads** (autonomy):

| Domain              | Why local                              |
| ------------------- | -------------------------------------- |
| Work methodology    | Scrum, Kanban, or Shape Up per context |
| Ceremony cadence    | Weekly vs biweekly retros, etc.        |
| Planning tools      | Roadmaps visualized their way          |
| Discovery practices | Different tools per problem type       |

## Transition Playbook (Single Team → Squads)

**Phase 1 — Mirror (months 0–2):** every new squad keeps the existing methodology, board, and ceremonies. Define PM/TL/QA per squad even if shared. Distribute ownership gradually; delivery stays centralized. Goal: preserve velocity while boundaries settle.

**Phase 2 — Autonomy (months 2–4):** squads choose their delivery model; planning and docs go squad-local within agreed standards. Start biweekly PM/TL syncs (shared deliverables, blockers, cadence). Keep QA, observability, and incidents centralized.

**Phase 3 — Governance (ongoing):** architecture council, product reviews, chapter meetings. Squads publish lessons learned, milestones, and spike findings. Review tooling maturity and shared-repository contributions periodically. Encourage mobility and pairing to prevent silos.

## Sync Routines

- **PM/TL sync (biweekly):** planning, risks, milestones across squads.
- **Engineering chapter (biweekly/monthly):** shared tooling, DevEx, observability.
- **Product alignment (monthly):** OKR progress across squads.

## Repository Governance

Every repository has a designated **maintainer squad**: enforces standards, owns CI/CD and security tooling, keeps README and onboarding docs current. Anyone may contribute; ownership never means exclusivity.

## Risks to Watch

Single shared QA becoming a bottleneck; divergent incident protocols; inconsistent technical practices; PM/PO drift; knowledge silos; tooling fragmentation. Mitigate with onboarding, explicit roles, and the sync routines above.

## Spotify Model Comparison

| This model        | Spotify     | Notes                                       |
| ----------------- | ----------- | ------------------------------------------- |
| Autonomous squads | Squads      | Own part of the product, choose methodology |
| Cross-role syncs  | Chapters    | Shared learning across squads               |
| Shared practices  | Guilds      | Observability, incidents, CI/CD conventions |
| OKRs & roadmap    | Tribe goals | Strategy synchronization                    |

Differences by design: formal incident RCA, release milestones, and security baselines — plus a scale plan (tribe lead at 5+ squads, platform team for tooling/DevEx, portfolio Kanban for strategy).

## References

- [Team Topologies — Skelton & Pais](https://teamtopologies.com/)
- [Spotify Model (Atlassian overview)](https://www.atlassian.com/agile/agile-at-scale/spotify)
- [Shape Up — Basecamp](https://basecamp.com/shapeup)
- [Conway's Law — Mel Conway](https://www.melconway.com/Home/Conways_Law.html)
