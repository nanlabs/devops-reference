# The Ultimate Guide to AI-Assisted Development

Principles, guardrails, and copy-paste prompt templates for using AI across the SDLC with speed **and** traceability. AI drafts; humans decide.

## Core Principles

- **Documentation first** — the tracker/wiki is the source of truth; log every AI output there.
- **Human-in-the-loop** — no auto-merges, no unreviewed AI outputs; people stay accountable.
- **Full traceability** — task IDs in branches, commits, PRs, and docs.
- **Privacy by default** — never expose secrets or PII; redact and summarize.
- **Least privilege** — short-lived credentials, minimal scopes (OIDC preferred).
- **Reuse before reinvent** — prefer shared modules, templates, and assets.
- **Ethical use** — AI augments; outputs must be transparent and explainable.

## Redaction Guidelines

When documenting with AI assistance:

- **Remove:** emails, phone numbers, tokens, keys, client names.
- **Summarize:** describe sensitive payloads at a high level instead of pasting raw content.
- **Mask:** use placeholders (`<API_KEY>`, `<CLIENT_NAME>`, `<ACCOUNT_ID>`).
- **Escalate:** regulated data (health, personal data) goes to the compliance lead, not the prompt.

## AI Workflow by SDLC Stage

| Stage         | AI does                                                  | Human owns                           |
| ------------- | -------------------------------------------------------- | ------------------------------------ |
| Discovery     | Transcripts → minutes → PRD/TRD drafts → backlog seeding | Approval of scope and priorities     |
| Architecture  | Diagrams, trade-off analysis, IaC review drafts          | Decisions (ADRs), client validation  |
| Planning      | Backlog drafts, AC proposals, initial estimates          | Estimation, prioritization, DoR gate |
| Development   | Snippets, tests, refactors in small loops                | Review, CI green, merge              |
| Testing       | Test scaffolding, edge cases, log analysis               | QA validation and sign-off           |
| DevOps        | Pipeline/IaC drafts, log anomaly hints                   | Security, cost, and deploy approval  |
| Maintenance   | Summaries, changelogs, tech-debt flagging                | Publication approval                 |
| Communication | Minutes, status reports, drafts                          | Tone, accuracy, sending              |

Working rules: pass full context (task ID, docs, ACs) to the model; keep PRs small; open draft PRs early; close the loop with evidence links.

## Prompt Library

### Meeting minutes

```text
You are my meeting assistant. Use: Objectives, Decisions, Open Questions,
Risks, Actions. Redact PII and secrets.
Input: transcript or bullets. Output: minutes + task list to create.
```

### Backlog creation

```text
Given this PRD/TRD, propose epics, user stories, and acceptance criteria.
Tag risks and dependencies. Output a checklist.
```

### ADR drafting

```text
Write an ADR with Title & Status, Context, Options, Decision,
Consequences, and links. Keep it brief and clear.
```

### PR summary

```text
Summarize this PR: changes, motivation, scope, testing steps, risks,
rollout and rollback plan. Include the task ID.
```

### Test suggestions

```text
From these acceptance criteria and code, propose unit and integration
tests plus edge cases. Highlight missing coverage.
```

### IaC review (Terraform)

```text
Review this Terraform module for naming/tagging conventions,
reusability, least privilege, and cost efficiency. Suggest improvements.
```

### Changelog

```text
Generate release notes from these merged PRs, grouped by
Feature / Fix / Chore, with task IDs.
```

## AI-Friendly Technology Checklist

AI performs best on stacks with: repetitive/declarative syntax, great public docs, standardized APIs, high usage, and rich example ecosystems. If a technology scores on most of these, AI will be a strong copilot for it.

## References

- [Google Cloud DORA: AI-Assisted Development Report (2025)](https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report)
- [agents.md open standard](https://agents.md/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
