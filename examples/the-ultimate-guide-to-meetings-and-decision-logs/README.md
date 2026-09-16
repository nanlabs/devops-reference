# The Ultimate Guide to Meetings and Decision Logs

Lightweight templates that turn meetings into traceable decisions and action items — plus the decision log that keeps reasoning alive after the call ends.

## Meeting Lifecycle

```text
PLANNED → AGENDA SET → IN PROGRESS → READY TO COMMUNICATE
  → FOLLOW-UP REQUIRED → COMPLETED  (or WONT DO)
```

## General Meeting Template

```markdown
**Details:** Date / Time / Location-Link / Facilitator / Attendees

**Agenda:**

- [ ] Topic 1: ...
- [ ] Topic 2: ...

**Minutes:**

- Discussion points per topic
- Decisions made

**Action Items:**

| Action | Owner | Due | Status |
| ------ | ----- | --- | ------ |
| ...    | ...   | ... | ...    |

**Parking Lot:**

- [ ] Off-topic item for later
```

Run it well: agenda in advance, timebox each topic, capture actions with owners and dates during the call, distribute minutes for approval, park off-topic items instead of debating them.

## Bug/Incident Validation Meeting Template

Use with clients to formally validate that a fix is delivered and accepted.

```markdown
**Details:** Date / Time / Link / Facilitator / Attendees (dev, PM, client, QA)

**Agenda:**

- [ ] Bug/Incident 1 link + demo
- [ ] Client feedback
- [ ] Agreement on next steps

**Minutes:** what was reviewed, issues raised, validation status
(**Accepted** / **Needs follow-up**)

**Action Items:** table as above, linked back to the tracker.
```

## Decision Log Template

One entry per decision, forever searchable:

```markdown
## 2025-04-02 — Adopt Postgres RLS for tenant isolation

**Decision:** Enforce tenant isolation with Row-Level Security on all
tenant tables; keep app-level filters as defense in depth.

**Rationale:** One forgotten `tenant_id` filter leaks data; enforcement
below the app layer removes the class of bug.

**Alternatives rejected:** app-only scoping (single layer of defense),
separate database per tenant (cost, ops overhead).

**Owner:** @owner | **Status:** Accepted | **Task:** `<tracker>-123`
```

Larger or cross-team agreements deserve an **agreement document**: summary, parties involved, terms (expectations, limits, responsibilities), and start/review dates.

## AI-Assisted Minutes Workflow

1. **Capture** — record (Meet/Zoom) and transcribe.
2. **Redact** — strip PII and secrets; summarize sensitive parts.
3. **Structure** — fit into the template above.
4. **Link** — attach to tasks, PRDs/TRDs, ADRs.
5. **Extract** — turn action items into tracked tasks with owners and due dates, and mark unknowns explicitly.

## References

- [Atlassian: Decision Logs and DARCY](https://www.atlassian.com/blog/statuspage/better-incident-postmortems)
- [Shape Up: Circuit Breakers & Betting](https://basecamp.com/shapeup)
