# Temporary dependency overrides

- Reviewed: 2026-10-05
- Next review due: 2027-01-03

This override is a temporary compatibility control. The upstream package still
constrains a vulnerable transitive dependency. Review it by the due date and
remove it when its parent supports a patched version directly.

## `serverless-s3-local`

- `adm-zip@0.6.1` replaces the Serverless LocalStack plugin's `^0.5.10` range.
  No patched 0.5.x release exists; `0.6.1` is the first non-vulnerable version.
  The plugin uses the same `AdmZip` API in its custom-resource packaging path.
- The archived `serverless-s3-local` plugin was removed. Serverless Framework
  4 and `serverless-localstack` use LocalStack's S3-to-Lambda event integration.

## Validation and review

The S3 Local lockfile resolves `adm-zip@0.6.1`; `npm audit --audit-level=high`
reports no high or critical findings in that example. AppSync no longer uses
the vulnerable simulator and packaging plugins. Its clean installs and audit
checks pass with zero reported vulnerabilities. Serverless Framework v4's
access-key/license gate prevents local packaging; run that step in CI where the
repository credentials are configured.

At review time, check whether `serverless-localstack` accepts a patched
`adm-zip` release. If it does, remove the override and regenerate the lockfile.
If it does not, renew the override only with current advisory evidence and a
new dated review.
