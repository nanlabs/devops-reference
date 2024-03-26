# Scan

## Overview

The objective of this section is to show some of the main options to perform different types of scans to help improve the security of our applications.

## Table of Contents

- ToDo

## Filesystem scan

We will show some of the main ways available to perform scans directly on our source code.

## Snyk

The Snyk CLI brings the functionality of Snyk into your development workflow. You can run the CLI locally from the command line or in an IDE.
Snyk supports most major languages: Javascript, Typescript, Python, Go, Java. You can see the details of which languages are accepted [here](https://docs.snyk.io/getting-started/supported-languages-and-frameworks)

The following shows an example of Snyk CLI test command output:

![Snyk Scan]("examples/security-assessments-guide/assets/scan-snyk.png")

### Installation

To use Snyk CLI, you must follow these steps:

- [Installation](https://docs.snyk.io/snyk-cli/install-or-update-the-snyk-cli)
- [Authentication](https://docs.snyk.io/snyk-cli/authenticate-the-cli-with-your-account)

### Test your installation

After authenticating, you can test your installation. For a quick test, `run snyk --help`.
Alternatively, you can perform a quick test on a public npm package, for example `snyk test ionic`.

### Scan your project

Note: Before using the Snyk CLI to test your Open Source Project for vulnerabilities, with limited exceptions, you must build your Project. For details, see Open Source Projects that must be built before testing.

In addition, depending on the language of your open-source Project, you may need to set up your language environment before using the Snyk CLI. For details, refer to Supported languages, frameworks, and feature availability overview.

After you have installed the CLI and authenticated your machine, to scan an open-source Project, use cd /my/project/ to change the current directory to a folder containing a supported package manifest file, such as `package.json`, `pom.xml`, or `composer.lock`. Then run snyk test. All vulnerabilities identified are listed, including their path and fix guidance.

To scan your source code run snyk code test. More information [here](https://docs.snyk.io/snyk-cli/scan-and-maintain-projects-using-the-cli/snyk-cli-for-open-source)

You can scan a Docker image by its tag running, for example: `snyk container test ubuntu:18.04`. More information [here](https://docs.snyk.io/snyk-cli/commands/container)

### Monitor your Open Source or Container Project

Snyk can monitor your Open Source or Container integrated SCM Project periodically and alert you to new vulnerabilities. To set up your Project to be monitored, run snyk monitor or snyk container monitor.

This creates a snapshot of your current dependencies so Snyk can regularly scan your code. Snyk can then alert you about newly disclosed vulnerabilities as they are introduced or when a previously unavailable patch or upgrade path is created. The following code shows an example of the output of the snyk monitor command.

You can log in to your Snyk account and navigate to the [Projects page](https://app.snyk.io/projects?_gl=1*18cfs1o*_ga*MjA0MzE3ODY5Mi4xNzA4NjIzNzk4*_ga_X9SH3KP7B4*MTcxMTQ3NTk5OC40LjEuMTcxMTQ3NjkzNy4wLjAuMA..) to find the latest snapshot and scan results:

![Snyk Snapshots](examples/security-assessments-guide/assets/snyk-snapshots.png)

## Infra as Code

All the information in this section was obtained from this [documentation](https://docs.snyk.io/scan-with-snyk/snyk-iac/scan-your-iac-source-code)

## Snyk + Terraform

Snyk currently scans Terraform (`.tf`) files when they are imported from an integrated Git repository. You can scan a Terraform module repository by importing the repo that holds the module from an SCM or by scanning the directory itself using the `snyk iac test` CLI command.

Scanning Terraform files gives you security feedback on everything that is statically configured in the module. To benefit from recurring and scheduled testing, follow best practices and import custom modules directly from an SCM.

### Prerequisites

- You must be an administrator for the Organization you are configuring in Snyk.
- Ensure you have already integrated your Git repository.

#### Configure Snyk to scan Terraform files

- Log in to your account and navigate to the relevant Group and Organization that you want to manage.
  Integrations are managed per Organization.
- Toggle the setting to enable Snyk to detect Infrastructure as code files as shown:

![Snyk iac-1]("examples/security-assessments-guide/assets/snyk-iac-1.png")

- If needed, review and adjust the Infrastructure as code Severity settings on the AWS tab in the example.
  Check to select the file types to scan, CloudFormation, Terraform, or both, and from the pulldown selection, choose the severity level for each API Gateway.

![Snyk iac-2](examples/security-assessments-guide/assets/snyk-iac-2.png)
