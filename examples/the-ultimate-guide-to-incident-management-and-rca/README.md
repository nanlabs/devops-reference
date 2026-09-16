# The Ultimate Guide to Incident Management and RCA

A practical framework for telling **bugs** apart from **incidents**, running a calm incident response, and writing root cause analyses (RCAs) that actually prevent recurrence.

## Bug vs Incident

| Aspect     | Bug                                                         | Incident                                                 |
| ---------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| What it is | A software defect, usually found during QA or in production | An unplanned event that disrupts or degrades the service |
| Impact     | Limited to specific functionality                           | Hits availability, performance, or real-time UX          |
| Origin     | May exist since the code was written                        | Occurs unexpectedly, often in production                 |
| Trigger    | Testing, users                                              | Alerts, monitoring, users, support                       |
| Handling   | Backlog prioritization and planning                         | Immediate response process                               |
| RCA        | Not required by default                                     | Required depending on severity                           |

### Escalation rule: bug becomes incident when it

- Impacts production systems or live users **now**
- Causes service degradation (performance, availability, data integrity)
- Blocks critical business operations
- Triggers client-reported urgency
- Requires resolution outside normal planning cycles

Once escalated: manage it under the incident process, mitigate immediately, run an RCA, and file backlog follow-ups.

## Incident Report Template

```markdown
## Incident Title

_What was observed, and in which context._

**Detection Details:**

- **Detected By:** User / Monitoring System / QA / Developer
- **Timestamp:** When was it first noticed? (UTC)
- **Environment:** Production / Staging / Dev
- **Alert Source:** Monitoring tool, user report, etc.

**Impact Summary:**

- **Scope:** Services, endpoints, or components affected
- **User Impact:** Downtime, error messages, data loss
- **Duration:** How long the impact lasted

**Timeline (UTC):**

| Time  | Event   |
| ----- | ------- |
| 10:55 | Event 1 |
| 11:00 | Event 2 |

**Root Cause Analysis (5 Whys):**

- **Root Cause:** What caused it?
- **Contributing Factors:** Context that made it worse

**Resolution:**

- **Immediate Fix:** What mitigated or resolved it?
- **Validated In:** QA / Staging / Production
- **Status:** Resolved / In Monitoring / Awaiting Confirmation

**Action Items:**

- [ ] Preventive action 1 (owner, due date)
- [ ] Preventive action 2 (owner, due date)

**Severity:** High / Medium / Low
**Priority:** Critical / High / Medium / Low
```

## Worked Example 1: API Downtime

Checkout API returns intermittent `504 Gateway Timeout` in production; 20% of transactions fail for 32 minutes.

- **Detected by:** Latency alert + customer complaint at 14:23 UTC.
- **Root cause:** Autoscaling policy on the payment service did not react to a load spike after an untested infra change.
- **Fix:** Manual scale-up; validated in production.
- **Action items:** add load test to pipeline, fix autoscaling policy, checklist infra changes, dashboard for payment latency.

## Worked Example 2: Production DB Migration Failure

A planned Alembic migration on RDS PostgreSQL takes an exclusive lock (`ALTER TABLE ... ADD CONSTRAINT`), failing 100% of logins for 15 minutes.

- **Timeline:** 10:55 migration triggered via CI/CD → 11:02 latency alerts → 11:04 login 500s → 11:08 blocking session killed via RDS console → 11:17 fully recovered.
- **Root cause:** Long-running DDL on a hot table without draining connections or staging dry-run.
- **Action items:** use online-schema-change tooling for heavy DDL, document connection-draining pre-migration, add staging dry-run to migration CI templates, alert on DB-level locks.

## Best Practices

- Separate the incident channel from the bug backlog; never let incidents wait for sprint planning.
- Timebox mitigation first, RCA second — restore service before theorizing.
- Every incident ends with **owned, dated action items**, or it will repeat.
- Run blameless postmortems; the output is process fixes, not culprits.
- Validate fixes with clients explicitly (accepted / needs follow-up) and record the outcome.

## References

- [Google SRE Workbook — Postmortem Culture](https://sre.google/workbook/table-of-contents/)
- [Atlassian Incident Management](https://www.atlassian.com/incident-management)
- [Postgres Lock Monitoring](https://www.postgresql.org/docs/current/view-pg-locks.html)
