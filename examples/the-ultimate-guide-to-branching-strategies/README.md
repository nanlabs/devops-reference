# The Ultimate Guide to Branching Strategies

How to choose and operate a branching model: Trunk-Based, Feature Branch, Gitflow, GitHub Flow, GitLab Flow, and Centralized — plus what to use for MVPs.

## Strategy Comparison

| Strategy                    | Model                                                                       | Best For                                             | Watch Out For                              |
| --------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ |
| **Trunk-Based Development** | Small commits straight to main; short-lived branches (< 1 day)              | Small, highly collaborative teams with CI/CD         | Requires discipline, flags, and fast CI    |
| **Feature Branch Workflow** | One branch per feature, merged via PR                                       | Independent features, parallel work                  | Long-lived branches drift and conflict     |
| **Gitflow**                 | `main` + `develop` + feature/release/hotfix branches                        | Scheduled releases, mobile apps, maintained versions | Heavy ceremony, fights continuous delivery |
| **GitHub Flow**             | Feature branches off `main`, deploy on merge                                | Continuous deployment, SaaS                          | Little release structure                   |
| **GitLab Flow**             | Feature branches + environment branches (`main` → `staging` → `production`) | Mix of CD and structured releases                    | Branch hygiene discipline required         |
| **Centralized Workflow**    | Everyone commits to one branch (SVN-style)                                  | Teams migrating from SVN                             | No isolation; does not scale               |

## Decision Matrix

| Product Type                          | Team Size | Collaboration Maturity | Recommended                              |
| ------------------------------------- | --------- | ---------------------- | ---------------------------------------- |
| Any, with CD                          | Small     | High                   | Trunk-Based                              |
| SaaS, continuous release              | Medium    | Moderate               | GitHub Flow, Trunk-Based, Feature Branch |
| Mobile apps, fixed release windows    | Medium    | Moderate               | Gitflow, GitLab Flow, Feature Branch     |
| Platform products, quality-critical   | Medium    | Moderate               | GitLab Flow, Feature Branch              |
| Long-maintenance enterprise platforms | Large     | Moderate               | Gitflow, Feature Branch                  |

## Branching for MVPs

MVPs (~2 months, small team) need speed with safety. Two models fit:

- **Trunk-Based Development** — rapid integration, every commit deployable, minimal branch overhead. Requires feature flags for unfinished work.
- **Feature Branch Workflow** — isolation for risky/experimental work, parallel tracks, PR-gated quality. Slightly slower integration.

Pick Trunk-Based when collaboration is high and CI is fast; pick Feature Branch when several risky tracks run in parallel.

## Operating Rules (Any Strategy)

- **Branch naming:** `feature/<id>-short-desc`, `bugfix/<id>-short-desc`, `hotfix/<id>-short-desc`, `release/x.y.z`.
- **Protect `main`:** no direct pushes; PR + green CI + at least one review.
- **Keep branches short-lived:** rebase or merge `main` daily on branches older than a day.
- **Delete after merge:** merged branches are clutter; automate cleanup.
- **Feature flags for trunk:** unfinished work hides behind flags OFF by default, never behind stale branches.
- **Tag releases:** semantic versioning (`v1.2.3`) with generated release notes.

## Conventional Commits Companion

Pair your branching model with [Conventional Commits](https://www.conventionalcommits.org/):

```text
feat(auth): add OAuth2 login
fix(api): handle expired tokens
docs(readme): update setup steps
refactor(db): split user repository
```

Enforce it with [commitlint](https://commitlint.js.org/) + [husky](https://typicode.github.io/husky/) pre-commit hooks so history stays searchable and changelogs generate themselves.

## References

- [Atlassian: Comparing Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Trunk-Based Development](https://trunkbaseddevelopment.com/)
- [GitHub Flow Guide](https://docs.github.com/en/get-started/using-github/github-flow)
- [Conventional Commits](https://www.conventionalcommits.org/)
