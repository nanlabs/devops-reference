# The Ultimate Guide to Task Templates and Estimation

Standardized issue templates plus a calibrated estimation system: story-point tables by attribute, capacity planning, and the epic → story/task → subtask hierarchy.

## Issue Hierarchy

- **Epic** — large body of work, broken into stories/tasks.
  - **Story** — user-facing slice of value, broken into subtasks.
    - **Subtasks** — small technical steps within a story.
  - **Task** — technical work that may cross stories.
    - **Subtasks** — smaller steps within a task.
  - **Bug** — defect, also broken into subtasks.

## Epic Template

```markdown
## Epic Title

_Description..._

**Objectives:**

- Objective 1 (measurable outcome)

**Success Criteria:**

- Criterion 1

**Related Tasks:**

- Task 1: ...

**Stakeholders:** ...
**Estimated Effort:** ... | **Owner:** ... | **Due:** ...
```

## Task Template

```markdown
## Task Title

_Description..._

**Summary:** _Goal in one paragraph._

**Technical Notes:**

- Note 1 (useful for estimation and development)

**Acceptance Criteria:**

- [ ] Condition 1
- [ ] Condition 2
```

## Bug Template

```markdown
## Bug Title

_Description..._

**Steps to Reproduce:**

1. ...
2. ...

**Expected Result:** ...
**Actual Result:** ...

**Environment:** Staging | Browser / OS / App version / User role
**Severity:** High / Medium / Low | **Priority:** High / Medium / Low

**Acceptance Criteria (for the fix):**

- [ ] No longer reproducible via the original steps
- [ ] Verified in the relevant environment
- [ ] Resolution documented (comment or screenshot)
```

## Estimation Table (Story Points 1–8)

Rate each attribute, then converge on a single number. If a story lands at 5+, split it.

| Attribute        | 1 pt                        | 2 pts                 | 3 pts                     | 5 pts                           | 8 pts                      |
| ---------------- | --------------------------- | --------------------- | ------------------------- | ------------------------------- | -------------------------- |
| Difficulty       | Trivial for a newcomer      | Done before           | Somewhat difficult        | Uncharted territory             | Extremely difficult        |
| Complexity       | Single codebase, tiny diff  | Single codebase       | Multiple codebases, small | Significant multi-codebase work | Several codebases          |
| Familiarity      | Anyone on the squad gets it | Mostly known          | Moderately known          | Somewhat known                  | Unknown codebase           |
| Certainty        | No unknowns                 | Minor known unknowns  | Moderate known unknowns   | Unknown unknowns                | Lots of unknown unknowns   |
| Risk             | Self-contained              | Very low blast radius | Possible side effects     | Needs safe window + backup plan | All hands + rollback plan  |
| Third-party deps | None                        | Negligible            | One simple dependency     | Moderate dependency             | Multiple dependencies      |
| Time             | ≤ half day                  | ≤ 1 day               | Depends on unknowns       | Depends on unknowns             | Unguessable                |
| QA lift          | Minimal                     | Standard              | Beyond typical            | High                            | Massive, may need QA squad |

**Techniques:** Planning Poker for consensus, T-shirt sizing (XS–XL) for quick relative sizing, Fibonacci spacing to reflect growing uncertainty.

## Iteration Capacity in 4 Steps

1. **Availability:** working days minus holidays/leave, per person.
2. **Non-development time:** deduct meetings, stand-ups, reviews.
3. **Effective capacity:** `(available hours − meeting hours) × focus factor` (use 0.8–0.9).
4. **Load check:** total estimated effort must fit effective capacity; adjust scope, not math.

Example: 2 people × 10 days = 20 person-days, minus 2 days off = 18 → 144h, minus 20h meetings = 124h × 0.85 ≈ **105 effective hours**.

## Best Practices

- Break down anything estimated at 5+ points before committing to it.
- Estimate as a team; the conversation matters more than the number.
- Track velocity and recalibrate the focus factor every few iterations.
- Link every task to its source (PRD, TRD, minutes) for traceability.

## References

- [Planning Poker](https://www.planningpoker.com/)
- [Atlassian: Story Points](https://www.atlassian.com/agile/project-management/estimation)
