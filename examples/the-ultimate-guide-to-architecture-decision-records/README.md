# The Ultimate Guide to Architecture Decision Records

Architecture Decision Records (ADRs) capture significant technical or process decisions with long-term impact. They give context, rationale, and traceability so teams — present and future — understand **why** the system looks the way it does.

## When to Create an ADR

Create one whenever a decision has long-term architectural or operational implications:

- New service/module or major refactor
- Technology selection (frameworks, libraries, platforms)
- Security or compliance decisions
- Cost-impacting choices (cloud providers, scaling strategies)
- Data model or schema design changes
- Deployment strategy adjustments

Rule of thumb: if you debated it for more than an hour or it will surprise someone in six months, write it down.

## ADR Structure

1. **Title & Status** — Proposed, Accepted, Superseded, Rejected
2. **Context** — problem statement, constraints, assumptions
3. **Options Considered** — alternatives with pros and cons
4. **Decision** — what was chosen and why
5. **Consequences** — trade-offs, risks, follow-ups
6. **References** — tasks, PRDs, PRs, diagrams, external docs

## Blank Template

```markdown
# ADR-001: <Short Decision Title>

**Status:** Proposed | Accepted | Superseded by ADR-00X | Rejected
**Date:** YYYY-MM-DD
**Owners:** @names

## Context

_What problem are we solving? What constraints and assumptions apply?_

## Options Considered

### Option A: <name>

- Pros: ...
- Cons: ...

### Option B: <name>

- Pros: ...
- Cons: ...

## Decision

_What we chose and why. One paragraph, no ambiguity._

## Consequences

- Positive: ...
- Negative / trade-offs: ...
- Follow-ups: ...

## References

- Task/issue: ...
- PRD/TRD: ...
- PRs: ...
```

## Worked Mini-Example

```markdown
# ADR-014: Use Postgres Row-Level Security for tenant isolation

**Status:** Accepted
**Date:** 2025-03-11

## Context

Multi-tenant SaaS on a single Postgres cluster. A missed `tenant_id`
filter leaks data across tenants; we need enforcement below the app layer.

## Options Considered

### Option A: Application-level scoping

- Pros: no DB changes, framework-native.
- Cons: every query is one forgotten filter away from a breach.

### Option B: Postgres RLS policies

- Pros: enforced by the database for every access path.
- Cons: policy debugging is harder; ORM support needs care.

## Decision

Adopt RLS (Option B) for all tenant tables; app keeps `tenant_id` filters
as defense in depth.

## Consequences

- Positive: tenant isolation guaranteed even with buggy queries.
- Negative: migrations must account for policies; add RLS checks to CI.
- Follow-ups: runbook for policy debugging; load-test policy overhead.

## References

- Task: `<tracker>-123`; PR: `<n>`
```

## Process

1. **Draft** — keep it short and human-readable; AI-assisted drafting from task context is fine.
2. **Review** — share with the tech lead and affected teammates; validate technical and business impact.
3. **Link** — connect the ADR to epics/stories and PRs for traceability.
4. **Update** — when superseded, update the status but **preserve history** and reference the newer ADR.

## Best Practices

- Clarity over completeness: short and actionable beats exhaustive.
- One decision per ADR; link related ADRs instead of merging them.
- Add visuals (diagrams, sequence flows) when they improve understanding.
- Revisit ADRs in retrospectives or architecture syncs — outdated architecture is as risky as undocumented architecture.
- ADRs are a team tool: encourage collaboration, never solo decrees.

## References

- [ADR GitHub Organization](https://adr.github.io/)
- [Documenting Architecture Decisions — Michael Nygard](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
