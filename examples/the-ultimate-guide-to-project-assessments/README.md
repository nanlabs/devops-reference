# The Ultimate Guide to Project Assessments

A maturity-based framework for evaluating projects consistently: split work into **assessment units**, score each indicator on a **1–5 maturity scale**, and track evolution over time. Scores measure maturity and evidence — not raw performance.

## Assessment Units

- **Technical unit** — a major workload sharing repos, infrastructure, and architecture (frontend app, backend API, data platform, IaC, AI pipeline). Evaluated with technical indicators.
- **Management unit** — the effectiveness of planning, delivery, communication, and governance for a project or squad. Evaluated with management indicators.
- **AI-native readiness** — a cross-unit dimension: can AI safely understand, change, and trace this system? Derived from documentation structure, determinism, and observability.

## Scoring Philosophy (1–5)

| Score          | Meaning                                   | Typical signal                          |
| -------------- | ----------------------------------------- | --------------------------------------- |
| 1 — Reactive   | Implicit, person-dependent, untraceable   | "We do it, but it depends on who"       |
| 3 — Defined    | Documented and mostly followed, some gaps | "We have a system; not fully optimized" |
| 5 — Systematic | Explicit, repeatable, measured, improving | "It works consistently and improves"    |

A 3 is **not** "average" — it means moderate structural maturity with room to optimize.

## Management Indicators (Condensed)

**Governance & structure:** methodology, workflow, issue, and role definitions; risk management; progress tracking.
**Delivery & execution:** delivery frequency/quality, agile adoption, sprint planning effectiveness, backlog management, retrospectives with tracked outcomes, adaptability.
**Collaboration:** business knowledge, client satisfaction, communication quality, stakeholder engagement, standup effectiveness, team satisfaction.
**Culture:** raise the bar (excellence), do what you say (accountability), geek out (craft).

## Technical Indicators by Unit (Condensed)

**General (every unit):** code quality, deployment tooling, developer experience, monitoring & observability, security awareness, tech-debt volume, workflow definition, testing.
**Frontend:** responsiveness, accessibility, performance, UI/UX alignment, test coverage, dependency management.
**Backend:** API documentation, API versioning, error handling, scalability, test coverage, dependency management.
**Cloud & DevSecOps:** CI/CD maturity, IaC coverage, environment bootstrapping, environment parity, secrets management, RBAC, backup/recovery (RTO/RPO), disaster recovery, infra monitoring, pipeline monitoring, cost controls, incident response, continuous security.
**Data engineering:** architecture docs, schema management, orchestration reliability, data quality, lineage, storage optimization, governance & access, security & compliance, pipeline observability, scalability, test coverage, business-rules documentation, consumption readiness.
**UI/UX:** usability, accessibility, consistency, feedback quality, aesthetics, performance, adaptability, user-centricity, real-user testing cadence — or score with the 10 Nielsen heuristics.

## AI-Native Readiness (Condensed)

**Management:** documentation density, decision traceability, workflow determinism, feedback loops, cultural transparency.
**Technical:** codebase explicitness, deterministic builds, observability, validation density, dependency transparency.
Interpretation: 1–2 needs heavy human mediation; 3 viable with oversight; 4–5 safe for AI acceleration.

## Running an Assessment

1. Define units (one technical unit per workload + one management unit).
2. Score each indicator 1–5 with **evidence** (links, artifacts, metrics).
3. Agree on divergences first: define criteria per level, discuss openly, compare relatively across teams, weight by business impact/risk.
4. Record actions: every gap becomes an owned improvement item, re-scored next cycle.

## References

- [DORA Capabilities](https://dora.dev/capabilities/)
- [Nielsen's 10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Google SRE Workbook](https://sre.google/workbook/table-of-contents/)
