# The Ultimate Guide to PRD and TRD

Two complementary documents bridge product vision and engineering execution: the **PRD** says _what_ and _why_, the **TRD** says _how_ and _with what constraints_. Together they feed estimation, backlog creation, branching, DoR/DoD, and testing scope.

## PRD vs TRD

|                     | PRD (Product Requirements Document)                  | TRD (Technical Requirements Document)                     |
| ------------------- | ---------------------------------------------------- | --------------------------------------------------------- |
| Answers             | What to build, and why                               | How to build it, and with what constraints                |
| Audience            | Product, stakeholders, client                        | Engineers, reviewers, QA                                  |
| Core content        | Personas, user flows, use cases, acceptance criteria | Architecture, data model, decisions, risks, test strategy |
| Source of truth for | Scope and business outcomes                          | Technical approach and trade-offs                         |

## Best Practices

- Keep both concise and iterative; update as the project evolves.
- Never duplicate: link documents instead of copying (`PRD - <Feature>`, `TRD - <Feature>`).
- Treat requirements as living documents, not static contracts.
- Add a Revision History section at the end for traceability.

## PRD Template

```markdown
## Objective

_Clear statement of the goal or problem to solve._

## Personas / User Flows

- Persona 1: ...
- Persona 2: ...

## Entities & Use Cases

| Entity   | Description | Related Use Cases |
| -------- | ----------- | ----------------- |
| Entity 1 | ...         | UC1, UC2          |

- Use Case 1: ...

## Acceptance Criteria

- [ ] Business-level condition 1
- [ ] Business-level condition 2

## Edge Cases

- Error state 1: ...

## Integrations

- External system / API 1: ...

## Timeline

| Phase   | Description | Target Sprint |
| ------- | ----------- | ------------- |
| Phase 1 | ...         | Sprint X      |

## Approvals

- [ ] Product Owner
- [ ] Tech Lead
- [ ] Client stakeholders
```

## TRD Template

```markdown
## Scope

_What this TRD covers and its purpose._

## Architecture Overview

_Components and how they interact (diagram if available)._

- Component 1: ...

## Data Model / API Contracts

| Field   | Type   | Description | Required |
| ------- | ------ | ----------- | -------- |
| field_1 | string | ...         | Yes      |

## Technical Decisions

_Link ADRs for significant choices._

- Decision 1: ...

## Dependencies

- Internal / external dependency 1: ...

## Risks & Constraints

- Risk 1: ...

## Testing Strategy

- Unit: ...
- Integration: ...
- Monitoring: ...

## Implementation Plan

| Step   | Description | Owner | Target Sprint |
| ------ | ----------- | ----- | ------------- |
| Step 1 | ...         | @name | Sprint X      |
```

## References

- [Atlassian: Product Requirements](https://www.atlassian.com/agile/product-management/requirements)
- [Documenting Architecture Decisions (ADRs)](https://adr.github.io/)
