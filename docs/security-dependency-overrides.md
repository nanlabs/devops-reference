# Temporary dependency overrides

- Reviewed: 2026-10-05
- Next review due: 2027-01-03

These overrides are temporary compatibility controls for two examples. Their
current `serverless-appsync-simulator@0.20.0` release has not updated the
vulnerable transitive dependencies. Review the overrides by the due date and
remove them when the simulator supports patched versions directly.

## `serverless-appsync-node-typescript`

- `mysql2@3.24.5` replaces the simulator's `^2.2.5` range, which resolved to
  `2.3.3`. Advisory fixes are `3.9.4` for GHSA-fpw7-j2hg-69v5,
  `3.9.7` for GHSA-4rch-2fh8-94vw, and `3.9.8` for
  GHSA-pmh2-wpjm-fj45.
- `form-data@4.0.6` replaces `3.0.5` in the simulator's Jest 26/jsdom chain.

## `serverless-appsync-python`

- `mysql2@3.24.5` replaces the simulator's `^2.2.5` range, which resolved to
  `2.3.3`. The same mysql2 advisories apply.
- `form-data@4.0.6` replaces `3.0.5` in the simulator's Jest 26/jsdom chain.

## Validation and review

Both lockfiles resolve `mysql2@3.24.5` and `form-data@4.0.6`. Clean `npm ci`
passes in both examples, and targeted `npm audit` reports no findings for either
package. `npx tsc --noEmit` passes for the TypeScript example. Local
`sls package` is blocked by Serverless Framework v4's access-key/license gate.
Run that step in CI where the repository credentials are configured.

At review time, check whether a newer `serverless-appsync-simulator` release
accepts patched dependency versions. If it does, remove the corresponding
override and regenerate the lockfile. If it does not, renew an override only
with current advisory evidence and a new dated review.
