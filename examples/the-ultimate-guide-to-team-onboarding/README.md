# The Ultimate Guide to Team Onboarding

Role-based checklists that take a new teammate from day zero to productive in week one. Replace the bracketed placeholders with your own tools, channels, and environments.

## Developer Onboarding Checklist

### Business understanding

- [ ] Read the project README and architecture overview
- [ ] Know the key stakeholders and their roles
- [ ] Received a functional walkthrough of the system
- [ ] Understand the main goals, scope, and key business flows

### Communication

- [ ] Added to team channels (`[team-chat]`, `[project-chat]`)
- [ ] Introduced to the client/counterparts
- [ ] Key recurring meetings on the calendar

### Access

- [ ] Issue tracker (`[tracker]`) and repositories (`[git-host]`)
- [ ] Environments: development, staging, production (least privilege)
- [ ] Cloud provider accounts (`[aws|gcp|azure]`)
- [ ] Ancillary tools: design files, docs wiki, email

### Local environment

- [ ] Services required for local development running (containers or docs)
- [ ] `.env` configured from the vault — never committed, never shared in chat
- [ ] Linters, formatters, and pre-commit hooks installed and passing
- [ ] Full test suite runs green locally

### Infrastructure & delivery

- [ ] Walkthrough of deployed services and environments
- [ ] Understands the development → review → release workflow
- [ ] Knows how to read logs and troubleshoot per environment
- [ ] Can trace task → branch → PR → deploy → decision (ADR)

### First tasks

- [ ] Starter task assigned (small, well-defined, mentored)
- [ ] First PR opened, reviewed, and merged in week one

## Project Manager Onboarding Checklist

### Communication & stakeholders

- [ ] Added to internal and project channels; introduced to the client
- [ ] Key meetings scheduled; reporting cadence understood

### Access & governance

- [ ] Tracker, docs wiki, environments, and hours reporting (if applicable)

### Delivery management

- [ ] Roadmap, current deliverables, and milestones visible
- [ ] Working model understood (fixed scope / time & materials / staff aug)
- [ ] Risks, assumptions, and open decisions reviewed
- [ ] Knows the escalation path for blockers and support

## Best Practices (Enrichment)

- **Buddy system:** every newcomer gets a named buddy for the first month — halves time-to-first-PR.
- **30/60/90 expectations:** write down what "good" looks like at 30, 60, and 90 days; review together.
- **Onboarding as a test:** every friction point the newcomer hits is a docs bug — fix the docs, not the person.
- **Access least-privilege from day one:** production access is granted, scoped, and time-boxed — never standing admin.
- **Review the checklist itself** quarterly; stale onboarding docs are worse than none.

## References

- [GitLab Team Handbook: Onboarding](https://handbook.gitlab.com/handbook/people-group/general-onboarding/)
- [Atlassian: Team Playbook — Kickoff](https://www.atlassian.com/team-playbook/plays/project-kickoff)
