# Temporary dependency overrides

Reviewed: 2026-10-05  
Next review due: 2027-01-03

These overrides are temporary compatibility controls for two examples whose current `serverless-appsync-simulator@0.20.0` release has not updated vulnerable transitive dependencies. Review them by the due date and remove them when the simulator or its dependency chain supports patched versions directly.

| Example | Package | Override | Evidence and scope |
| --- | --- | --- | --- |
| `serverless-appsync-node-typescript` | `mysql2` | `3.24.5` | The simulator requests `^2.2.5` and locks `2.3.3`; advisories GHSA-fpw7-j2hg-69v5 (fixed in 3.9.4), GHSA-4rch-2fh8-94vw (3.9.7), and GHSA-pmh2-wpjm-fj45 (3.9.8) affect it. Scope is this example only. |
| `serverless-appsync-node-typescript` | `form-data` | `4.0.6` | The simulator's Jest 26/jsdom chain locks `3.0.5`; the 4.x release is outside the vulnerable 3.x range. Scope is this example only. |
| `serverless-appsync-python` | `mysql2` | `3.24.5` | Same simulator dependency and mysql2 advisories as above. Scope is this example only. |
| `serverless-appsync-python` | `form-data` | `4.0.6` | The simulator's Jest 26/jsdom chain locks `3.0.5`; the 4.x release is outside the vulnerable 3.x range. Scope is this example only. |

Validation for this change: clean `npm ci` in both examples, lockfile resolution checks, targeted `npm audit` with no remaining `mysql2` or `form-data` findings, and `npx tsc --noEmit` for the TypeScript example. Local `sls package` is blocked by Serverless Framework v4's access-key/license gate; run the package step in CI where the repository credentials are configured. Reassess simulator behavior and remove or revise the overrides at the next review.

At review time, check whether a newer `serverless-appsync-simulator` release accepts patched dependency versions. If it does, remove the corresponding override and regenerate the lockfile. If it does not, renew an override only with current advisory evidence and a new dated review.
