# Continuous Integration Workflow

## Overview

This guide aims to provide tools that allow us to detect potential vulnerabilities in our projects within a CI/CD workflow.

## Table of Contents

- [Github Actions](#github-actions)
  - [Snyk](#snyk)
  - [Trivy](#trivy)
- [Gitlab CI/CD](#gitlab-ci/cd)
  - [Snyk](#gitlab-snyk)
  - [Trivy](#gitlab-trivy)
- [AWS Pipeline](#aws-pipeline)
  - [Snyk](#aws-snyk)
  - [Trivy](#aws-trivy)

## Github Actions

## Snyk

Snyk offers various actions on Github, which can be directly utilized from the Github Marketplace ([Snyk Github Marketplace](https://github.com/marketplace/actions/snyk)) or by referring to the official Snyk documentation ([Snyk Official Documentation](https://github.com/snyk/actions)).

### Prerequisites

To use these actions, the first step is to obtain our `SNYK_TOKEN`. For this purpose, consider the following:

Every Snyk account has this token. Once you create an account ([Snyk Account Creation](https://app.snyk.io/login?utm_medium=Partner&utm_source=GitHub&utm_term=Actions-Marketplace&utm_content=signup)), you can find it in one of two ways:

1. In the Snyk UI, go to your Snyk account's settings page ([Snyk Account Settings](https://app.snyk.io/account)) and retrieve the API token, as shown in the following [Revoking and Regenerating Snyk API Tokens](https://support.snyk.io/hc/en-us/articles/360004008278-Revoking-and-regenerating-Snyk-API-tokens).

2. If you're using the Snyk CLI ([Snyk CLI Documentation](https://docs.snyk.io/snyk-cli/getting-started-with-the-cli)) locally, you can retrieve it by running `snyk config get api`.

### Examples

Once we have our SNYK_TOKEN, we can start using the actions. Next, we will provide a basic example of one, taking into account an application that uses Node JS:

```yaml
name: Example workflow using Snyk
on: push
jobs:
security:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@master - name: Run Snyk to check for vulnerabilities
uses: snyk/actions/node@master
env:
SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

By integrating this `yml` file to our project, it will cause the following actions to be executed in our project:

![Snyk CI/CD](examples/security-assessments-guide/assets/snyk-cicd-example.png)
![Snyk CI/CD vulnerabilities](examples/security-assessments-guide/assets/snyk-cicd-check-vulnerabilites.png)

Note that this example was executed on a React app created with Vite.

If you want to send data to Snyk, and be alerted when new vulnerabilities are discovered, you can run Snyk monitor like so:

```yaml
name: Example workflow using Snyk
on: push
jobs:
security:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@master - name: Run Snyk to check for vulnerabilities
uses: snyk/actions/node@master
env:
SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
with:
command: monitor
```

### Example of reporting only on high severity vulnerabilities

By using the args property of the action you can use all of the options and capabilities of the ([Snyk CLI](https://docs.snyk.io/snyk-cli/cli-reference)). This example shows use of the option --severity-threshold=high.

```yaml
name: Example workflow using Snyk
on: push
jobs:
security:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@master - name: Run Snyk to check for vulnerabilities
uses: snyk/actions/nodemaster
env:
SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
with:
args: --severity-threshold=high
```

### Use your own development environment

The Snyk GitHub Actions for each language automatically install all the required development tools for Snyk to determine the correct dependencies and hence vulnerabilities from different language environments. If you have a workflow where you already have the development tools installed, you can instead use the snyk/actions/setup Action to install only Snyk CLI. An example follows:

```yaml
name: Snyk example
on: push
jobs:
security:
runs-on: ubuntu-latest
steps: - uses: actions/checkout@master - uses: snyk/actions/setup@master - uses: actions/setup-go@v1
with:
go-version: '1.19' - name: Snyk test
run: snyk test
env:
SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

The example here uses actions/setup-go. You must select the right action to install the relevant development requirements for your project. If you are already using the same pipeline to build and test your application, you are likely already installing the relevant development requirements.

### Continuing on error

The above examples will fail the workflow when issues are found. If you want to ensure the Action continues, even if Snyk finds vulnerabilities, then ([continue-on-error](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)) can be used.

```yaml
name: Example workflow using Snyk with continue on error
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        continue-on-error: true
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

### GitHub Code Scanning support

> To use this option for private repos you must have GitHub Advanced Security.
> If you see the error `Advanced Security must be enabled for this repository to use code scanning`, check that GitHub Advanced Security is enabled. For more information, see "Managing security and analysis settings for your repository."

Snyk GitHub Actions support integration with GitHub Code Scanning to show vulnerability information on the GitHub Security tab. The following applies to Snyk GitHub Actions for Open Source languages and package managers. For information on specific languages, package managers, and processes see the pages listed in ([GitHub Actions for Open Source languages and package managers](https://docs.snyk.io/integrations/ci-cd-integrations/github-actions-integration#github-actions-for-open-source-languages-and-package-managers)) and ([GitHub Actions for Snyk Container and Snyk Infrastructure as Code](https://docs.snyk.io/integrations/ci-cd-integrations/github-actions-integration#github-actions-for-snyk-container-and-snyk-infrastructure-as-code)).

Using `--sarif-file-output` ([Snyk CLI option](https://docs.snyk.io/snyk-cli/cli-reference)) and the ([GitHub SARIF upload action](https://docs.github.com/en/code-security/secure-coding/uploading-a-sarif-file-to-github)), you can upload Snyk scan results to the GitHub Code Scanning as shown in the example that follows.

The Snyk Action fails when vulnerabilities are found. This would prevent the SARIF upload action from running. Thus you must use a continue-on-error option as shown in the example that follows.

```yaml
name: Example workflow using Snyk
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/nodemaster
        continue-on-error: true # To make sure that SARIF upload gets called
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --sarif-file-output=snyk.sarif
      - name: Upload result to GitHub Code Scanning
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: snyk.sarif
```

![Snyk GitHub Code Scanning](examples/security-assessments-guide/assets/snyk-github.jpeg)

## Gitlab

## Snyk

All the information detailed below is based on this [official documentation](https://docs.snyk.io/integrate-with-snyk/git-repositories-scms-integrations-with-snyk/snyk-gitlab-integration).

### Snyk GitLab Integration Features

The Snyk GitLab integration allows you to:

1. Check for vulnerabilities in your pull requests.
2. Trigger a Snyk pull request for the fixes listed from the Report page or the Project page on the Snyk Web UI.
3. Receive email alerts when new vulnerabilities that affect your repository arise and fixes for those vulnerabilities are shown.
4. Receive email alerts containing a new pull request if a new upgrade or patch is available for a vulnerability.

### Prerequisites for Snyk GitLab Integration

- GitLab versions 9.5 and above (API v4).
- A public or private GitLab group or project.

Additionally, you will need a GitLab access token to perform the integration between GitLab and Snyk.

To set up the GitLab integration with Snyk, create a GitLab access token and enter this into the Snyk application.

Typically, the first user in a Snyk Organization, a [Snyk admin](https://docs.snyk.io/snyk-admin/introduction-to-snyk-administration#member-user-types), and GitLab Owner or Maintainer set up an integration with a GitLab Personal Access Token or Group Access Token. This token is then authenticated with GitLab, enabling access by Snyk to the repositories in that GitLab account.

### How to Set Up the Snyk GitLab Integration

Add a GitLab Personal Access Token in GitLab

1. Generate a GitLab Personal Access Token in a GitLab instance.
   Select the profile icon, then Edit Profile > Access Tokens.
   Set the token name, for example, Snyk, and select the api scope.

![Gitlab-integration-1](examples/security-assessments-guide/assets/gitlab-integration-1.png)

2. Navigate to the Snyk [Integrations](https://app.snyk.io/integrations?_gl=1*117zdop*_ga*MTE0NDg5NDA5MC4xNzA2MDAyOTQ2*_ga_X9SH3KP7B4*MTcwODYyMjI2NC4zLjEuMTcwODYyMzIzNC4wLjAuMA..) page, select the GitLab integration tile, and enter the URL of the GitLab instance and the token you generated.

![Gitlab-integration-2](examples/security-assessments-guide/assets/gitlab-integration-2.png)

3. Click Save.

4. When the tile on the Integrations page indicates the integration is Configured, click the tile and select the GitLab projects to test or select Add projects from the Snyk Dashboard.

### Uses of the Snyk GitLab Integration

### Fix Vulnerabilities with Snyk Merge Requests

When viewing a Snyk test report for a Snyk Project that you own or when looking at a GitLab Project that you are watching with Snyk, you see two options for fixing a vulnerability:

- Fix these vulnerabilities: generate a Snyk merge request with the minimal changes needed to fix all the Snyk Project's detected vulnerabilities.
- Fix this vulnerability: generate a Snyk merge request on an individual issue that fixes the vulnerability.

You can review the vulnerabilities that will be fixed, change your selection with the checkboxes, and choose to ignore any vulnerabilities that cannot be fixed now before opening the merge request on the Open a Fix Merge Request page.

### Receive Email Alerts for New Vulnerabilities

When a new vulnerability is detected on a Snyk Project you are watching, Snyk will send you an email with a generated Snyk merge request to address the vulnerability.

### Receive Email Alerts for New Upgrades or Patches

You may find yourself in a situation where no upgrade is found for a vulnerability, and only a patch is available. When a fix does become available, Snyk notifies you by email and generates a merge request containing the new fix.
