### 🌟 Continuous Integration Workflow Guide 🌟

## Overview

🔍 This guide aims to provide tools that allow us to detect potential vulnerabilities in our projects within a CI/CD workflow. By integrating security checks early and throughout the development process, you can ensure your projects are robust and secure.

---

## Github Actions 🚀

### Snyk 🔒

Snyk offers various actions on Github, which can be directly utilized from the Github Marketplace ([Snyk Github Marketplace](https://github.com/marketplace/actions/snyk)) or by referring to the official Snyk documentation ([Snyk Official Documentation](https://github.com/snyk/actions)).

#### Prerequisites 📝

To use these actions, the first step is to obtain your `SNYK_TOKEN`. For this purpose, follow these steps:

1. **In the Snyk UI:**
   - Go to your Snyk account's settings page ([Snyk Account Settings](https://app.snyk.io/account)) and retrieve the API token.
   - Reference: [Revoking and Regenerating Snyk API Tokens](https://support.snyk.io/hc/en-us/articles/360004008278-Revoking-and-regenerating-Snyk-API-tokens).

2. **Using the Snyk CLI:**
   - Run `snyk config get api` to retrieve the token ([Snyk CLI Documentation](https://docs.snyk.io/snyk-cli/getting-started-with-the-cli)).

### Examples 💡

Once you have your `SNYK_TOKEN`, you can start using the actions. Below is a basic example for a Node.js application:

```yaml
name: Example workflow using Snyk
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

📸 By integrating this `YAML` file into your project, the following actions will be executed:

![Snyk CI/CD Example](../assets/snyk-cicd-example.png)
![Snyk CI/CD Vulnerabilities](../assets/snyk-cicd-check-vulnerabilites.png)

> **Note:** This example was executed on a React app created with Vite.

#### Monitor for New Vulnerabilities 🕵️

To monitor for new vulnerabilities, use the following configuration:

```yaml
name: Example workflow using Snyk
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          command: monitor
```

#### High Severity Vulnerabilities Only 🔴

Use the `args` property to report only high-severity vulnerabilities:

```yaml
name: Example workflow using Snyk
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - name: Run Snyk to check for vulnerabilities
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          args: --severity-threshold=high
```

#### Custom Development Environment 🖥️

Use `snyk/actions/setup` to install only the Snyk CLI if you already have the development tools installed:

```yaml
name: Snyk example
on: push
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@master
      - uses: snyk/actions/setup@master
      - uses: actions/setup-go@v1
        with:
          go-version: '1.19'
      - name: Snyk test
        run: snyk test
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

#### Continuing on Error ⚠️

To ensure the Action continues even if Snyk finds vulnerabilities, use `continue-on-error`:

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

#### GitHub Code Scanning Support 🛡️

To use this option for private repositories, you must have GitHub Advanced Security. Use the `--sarif-file-output` option and upload Snyk scan results to GitHub Code Scanning:

```yaml
name: Example workflow using Snyk
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
        with:
          args: --sarif-file-output=snyk.sarif
      - name: Upload result to GitHub Code Scanning
        uses: github/codeql-action/upload-sarif@v2
        with:
          sarif_file: snyk.sarif
```

![Snyk GitHub Code Scanning](../assets/snyk-github.jpeg)

### Alternative Tools 🌐

- **Dependabot**: Automatically keep your dependencies updated ([Dependabot](https://dependabot.com/)).
- **SonarCloud**: Continuous code quality and security ([SonarCloud](https://sonarcloud.io/)).

---

## Gitlab CI/CD 🔧

### Snyk 🔒

The Snyk GitLab integration allows you to:

1. Check for vulnerabilities in your pull requests.
2. Trigger a Snyk pull request for fixes.
3. Receive email alerts for new vulnerabilities and upgrades.

#### Prerequisites 📝

- GitLab versions 9.5 and above (API v4).
- A public or private GitLab group or project.
- A GitLab access token for integration.

#### Setup Steps 🌟

1. **Generate a GitLab Personal Access Token**:
   - Go to profile icon > Edit Profile > Access Tokens.
   - Set the token name (e.g., Snyk) and select the `api` scope.

![Gitlab Integration Step 1](../assets/gitlab-integration-1.png)

2. **Integrate with Snyk**:
   - Navigate to the [Snyk Integrations](https://app.snyk.io/integrations) page, select GitLab integration, and enter the GitLab instance URL and token.

![Gitlab Integration Step 2](../assets/gitlab-integration-2.png)

3. **Configure Projects**:
   - Select GitLab projects to test or add projects from the Snyk Dashboard.

### Uses of Snyk GitLab Integration 💡

- **Fix Vulnerabilities**: Generate merge requests with minimal changes to fix detected vulnerabilities.
- **Receive Email Alerts**: Notifications for new vulnerabilities and available upgrades/patches.

### Alternative Tools 🌐

- **GitLab Security Dashboard**: Built-in security testing tools ([GitLab Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/)).
- **OWASP ZAP**: Free security tool for finding vulnerabilities ([OWASP ZAP](https://www.zaproxy.org/)).

---

## AWS CodePipeline 🚀

### Snyk 🔒

Snyk integrates seamlessly with AWS CodePipeline to scan your application for open-source security vulnerabilities. This integration automates security checks during the build, test, and deploy phases.

#### Language Support 🌐

- JavaScript, Java, .NET, Python, Ruby, PHP, Scala, Swift/Objective-C, Go.

#### Setup Requirements 🛠️

Ensure your project is built before the scan if required. Add a CodeBuild step before the Snyk Step if necessary.

![AWS CodePipeline Step 1](../assets/aws-codepipeline-1.png)

#### CodeBuild Example 💡

Example of a `buildspec.yml` for a JavaScript project:

```yaml
version: 0.2
phases:
  build:
    commands:
      - npm install
artifacts:
  files:
    - "**/*"
```

#### Setup Steps 🌟

1. **Add Stage**:
   - After the Source stage, add a Snyk scan stage. Click Edit, and Add a Scan Stage.

![AWS CodePipeline Step 1](../assets/aws-codepipeline-2.png)

2. **Add Action Group**:
   - Click Add an Action Group to open the Edit Action window:

![AWS CodePipeline Step 2](../assets/aws-codepipeline-3.png)

3. **Name the Action**:
   - Select Snyk as the Action Provider.
   - Click Connect with Snyk to begin the connection process.

![AWS CodePipeline Step 3](../assets/aws-codepipeline-4.png)

4. **Configure Settings**:
   - Configure the settings such as the Snyk organization where reports of findings are saved, vulnerability handling options, and monitoring behavior on build.

![AWS CodePipeline Step 4](../assets/aws-codepipeline-5.png)

#### Example Pipeline Configuration

Here's an example of how you might configure your pipeline to include Snyk:

```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 12
  pre_build:
    commands:
      - npm install
  build:
    commands:
      - npm run build
artifacts:
  files:
    - '**/*'
  discard-paths: no
```

### Alternative Tools 🌐

- **Checkmarx**: Comprehensive application security testing solution ([Checkmarx](https://www.checkmarx.com/)).
- **Veracode**: Application security solutions and services ([Veracode](https://www.veracode.com/)).

---

## Trivy 🔍

Trivy is an open-source vulnerability scanner for container images, file systems, and Git repositories, suitable for continuous integration pipelines.

### Github Actions 🚀

#### Setup Example

To use Trivy in your GitHub Actions workflow, add the following configuration to your workflow file:

```yaml
name: Trivy scan
on: push
jobs:
  trivy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run Trivy
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: 'aquasec/trivy:latest'
          scan-type: 'fs'
          severity: 'HIGH,CRITICAL'
```

#### Monitoring and Reporting

You can also configure Trivy to send reports and monitor for vulnerabilities:

```yaml
name: Trivy monitoring
on: schedule
  - cron: '0 0 * * *'  # Run daily at midnight
jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Run Trivy scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          severity: 'HIGH,CRITICAL'
          exit-code: '1'
```

### Gitlab CI/CD 🔧

#### Integration Steps

1. **Add Trivy to your `.gitlab-ci.yml` file**:

```yaml
stages:
  - security

trivy_scan:
  stage: security
  image: aquasec/trivy:latest
  script:
    - trivy fs --exit-code 1 --severity HIGH,CRITICAL .
```

2. **Configure Severity Levels**:
   - Ensure that only high-severity and critical vulnerabilities break the build.

### AWS CodePipeline 🚀

#### Integration with AWS CodeBuild

1. **Add Trivy as a Build Step**:
   - Integrate Trivy into your buildspec file for AWS CodeBuild.

```yaml
version: 0.2
phases:
  install:
    runtime-versions:
      nodejs: 14
  pre_build:
    commands:
      - npm install
  build:
    commands:
      - npm run build
      - trivy fs --exit-code 1 --severity HIGH,CRITICAL .
artifacts:
  files:
    - '**/*'
  discard-paths: no
```

### Alternative Tools 🌐

- **Clair**: Static analysis tool for vulnerabilities in container images ([Clair](https://github.com/quay/clair)).
- **Anchore**: Tool for analyzing container images for security vulnerabilities ([Anchore](https://anchore.com/)).

---

### Summary

By integrating tools like Snyk and Trivy into your CI/CD pipelines across platforms like GitHub Actions, GitLab CI/CD, and AWS CodePipeline, you can significantly enhance the security of your applications. These tools provide comprehensive vulnerability scanning and monitoring capabilities, ensuring that security checks are an integral part of your development workflow. Additionally, exploring alternative tools such as Dependabot, SonarCloud, Checkmarx, Veracode, Clair, and Anchore can provide more robust security solutions tailored to your specific needs.

![Stay Secure!](https://media.giphy.com/media/3o7aCWXcv0uNHeXf84/giphy.gif)

---

Feel free to reach out if you have any questions or need further assistance in setting up these tools! 🚀🔒
