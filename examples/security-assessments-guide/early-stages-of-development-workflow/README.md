# Early stages of development workflow

## Overview

This guide provides a compilation of various tools that can be implemented in the early stages of development to enhance the security of your web projects.

## Table of Contents

- [IDE Integrations](#ide-integrations)
- [Git Workflow](#git-workflow)
  - [Pre-commit/Pre-push with Snyk/Trivy](#pre-commitpre-push-with-snyktrivy)
  - [Linter Configurations](#linter-configurations)
  - [Husky](#husky)
  - [Examples with Python in Pre-commit](#examples-with-python-in-pre-commit)

## IDE Integrations

In this section, you will find a guide on how to implement tools like Snyk or Trivy in the IDE you are using. The goal is to have a powerful tool that allows you to perform scans on your code and detect important security-related points in the early stages of development.

## Visual Studio Code

### Snyk

Follow the steps below to install Snyk in Visual Studio Code:

1. Visit the [Snyk Visual Studio Code Extension Documentation](https://docs.snyk.io/integrate-with-snyk/ide-tools/visual-studio-code-extension).
2. Install the extension and configure it as necessary.

Example of how you will see snyk in Visual Studio Code:

![Snyk VsCode Extension](../assets/snyk-vscode.png)

Once you have installed the extension and made the required configurations, you can scan the repository you are working on. The analyses you can perform include:

- **Open Source Security:** This scan primarily focuses on your dependencies and devDependencies. If vulnerabilities are found, they will be indicated using notations such as CVE, CWE, CVSS, etc. Recommended actions for such scans usually involve updating dependencies to newer versions.
- **Code Security:** This scan assesses the security of your code, detecting potential issues such as XSS attacks, SQL injections, detection of hardcoded secrets, etc.

- **Configuration Issues:** This section analyzes various configurations of your application, such as .yml files, cloud environment configurations, etc.

- **Code Quality:** This analysis is related to the quality of your code, providing recommendations for code formatting, implementation of best practices, etc.

All the above mentioned scans will give results according to the level of criticality, which may have different severities:

![Severity in Snyk](../assets/severity-snyk.png)

If you want to learn more about analyzing the results obtained, you can check this [link](https://docs.snyk.io/integrate-with-snyk/ide-tools/visual-studio-code-extension/view-analysis-results-from-visual-studio-code-extension).

Snyk will run an analysis each time you start VsCode, and you have the option to perform a rescan whenever needed.

### Trivy

Here, you can find the documentation for installing Trivy in Visual Studio Code: [Trivy VSCode Extension](https://github.com/aquasecurity/trivy-vscode-extension).

Trivy performs a scan on your entire code, providing results aimed at preventing the following types of vulnerabilities:

- **Code vulnerabilities:** Prevent DDOS, SQL Injection, XSS attacks, etc.
- **Infra vulnerabilities:** Analyzes Infrastructure as Code (AWS, Azure, Terraform, etc.) and provides recommendations to avoid security flaws, such as incorrect implementation of Secrets Manager, preventing the use of hardcoded keys, etc.
- **Container analysis:** Provides results on the analysis of containers (Dockerfiles, docker-compose). Some possible results include prevention of using the root user, no HEALTHCHECK defined, etc.

Here's how you'll see the results obtained in each scan:

![Trivy scan](../assets/trivy.png)

## JetBrains

--ToDo

## Git Workflow

In this section we will mention tools that will allow us to perform different types of scans in our git workflow. This way, even being in early stages of our development process, we will be able to detect vulnerabilities and fix them.

### Pre-commit/Pre-push with Snyk/Trivy

--ToDo

### Linter Configurations

--ToDo

### Husky

--ToDo

### Examples with Python in Pre-commit

--ToDo
