# The Ultimate Guide to Definition of Ready and Done

DoR gates work **before** it starts; DoD gates work **before** it counts as finished. Between them, a task lifecycle plus a multi-layer validation model keeps quality continuous instead of end-loaded.

## Task Lifecycle

```text
BACKLOG → READY TODO → IN PROGRESS ⇄ BLOCKED → READY FOR REVIEW
  → READY FOR ACCEPTANCE → READY FOR QA → READY FOR RELEASE → CLOSED
```

- **BACKLOG:** not estimated, scoped, or planned.
- **READY TODO:** scoped, approved, acceptance criteria clear, dependencies mapped.
- **IN PROGRESS:** development + local tests; draft PR opened early; feature flags OFF by default.
- **BLOCKED:** external dependency; document environment and owner, escalate.
- **READY FOR REVIEW:** deployed to a review environment; CI green; PR linked.
- **READY FOR ACCEPTANCE:** product validates against acceptance criteria with evidence.
- **READY FOR QA:** QA validates in a production-like environment, flags ON and OFF.
- **READY FOR RELEASE:** final checks, merged, production rollout prepared.
- **CLOSED:** validated in production; flags cleaned up; branches deleted.

## Definition of Ready (Start Gate)

- **Clarity & scope:** clear description, agreed acceptance criteria, dependencies and impacts documented.
- **Feasibility:** estimated (split if 5+ points), fits iteration capacity.
- **Technical alignment:** designs attached if needed, approach agreed, environments/flags prepared.
- **Organizational readiness:** stakeholder sign-off, prioritized, owner assigned.

## Definition of Done (Finish Gate)

- **Code & review:** standards-compliant, peer-reviewed, merged via PR, CI green (lint, tests, format).
- **Testing:** unit + integration tests written and passing; manual validation where needed.
- **Staging validation:** deployed to staging/preview; acceptance criteria verified there.
- **Production:** rolled out, acceptance criteria re-verified in production.
- **Docs & comms:** documentation updated, task status updated, stakeholders informed.
- **Housekeeping:** staging synced with main, branches deleted, temporary flags removed.

## Validation Model (6 Layers)

1. **Task-level** — DoD fully met, or the task is not done.
2. **Code** — PR review: quality, maintainability, standards, no regressions.
3. **Workflow** — lifecycle respected; no step skipped.
4. **Integration** — works merged: CI green, system behavior correct.
5. **Stakeholder** — demos/reviews confirm functional expectations.
6. **Release** (optional) — cross-feature check + business readiness.

Minimum non-negotiables: reviewed code, executed tests, respected DoD, traceability (requirement → task → PR → deploy), and **evidence** — validation without evidence counts as not performed.

## Anti-Patterns

Skipping reviews; marking done without DoD; validating only at the end; relying solely on client validation; undefined acceptance criteria.

## References

- [Atlassian: Definition of Done](https://www.atlassian.com/agile/project-management/definition-of-done)
- [Google SRE: Release Engineering](https://sre.google/workbook/release-engineering/)
