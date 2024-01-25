# Readme

In this guide, we will primarily analyze three different ways through which we can make an analysis of our project with the goal of avoiding potential vulnerabilities. Each of these methods will be applicable at different stages of the development process, allowing them to be adopted based on the most suitable strategy for each project and team.

The points that will be analyzed include:

## 1. Early Stages of Development Workflows

- Integrate existing tools with IDEs such as VS Code and Intellij.
- Git workflow:
  - Pre-commit/Pre-push with Snyk/Trivy.
  - Linter configurations.
  - Husky configurations.

## 2. Continuous Integration

- How to perform differents types of analyses mentioned, in a CI/CD flow.
- Primary stack for analysis: Github Actions.
- Additional stacks: Gitlab CI/CD, AWS Code Pipeline, Jenkins, Bitbucket.
- Analysis of Github Enterprise - Github Security.

## 3. Scans

- Filesystem scan (code in repositories).
- Infra as Code.
- Kubernetes.
- Container Security.
