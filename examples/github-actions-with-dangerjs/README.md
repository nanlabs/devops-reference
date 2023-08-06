# Automating Pull Request Review using DangerJS and GitHub Actions 😎

In this tutorial, you will learn how to automate Pull Request (PR) reviews using DangerJS and GitHub Actions. 🔧 DangerJS is a powerful tool that allows you to define custom rules and checks for PR reviews, while GitHub Actions enables you to run these checks automatically whenever a new PR is opened or updated. By automating PR reviews, you can save time ⏳, enforce coding standards 📝, catch potential issues early on 🚨, and ultimately improve the overall code quality in your GitHub repository. 🚀

## Prerequisites

Before starting this tutorial, you should have the following:

1. A GitHub repository where you want to implement automated PR reviews.
2. Node.js installed on your local machine.

## Tutorial

In the following sections, you will learn how to set up DangerJS and GitHub Actions to automate PR reviews. You will start by setting up DangerJS, then install and configure GitHub Actions to run DangerJS automatically whenever a new PR is opened or updated.

### Step 1: Setting up DangerJS

1. Create a new directory in your repository root called `danger`.
2. Inside the `danger` directory, create a new file named `dangerfile.ts`. This file will contain the rules for PR reviews.

```typescript
// dangerfile.ts
import { danger, warn, fail, message, TextDiff } from "danger";

// Define your custom PR review rules here
```

### Step 2: Installing DangerJS

1. Open your terminal and navigate to the root of your repository.
2. Run the following command to install DangerJS as a development dependency:

```bash
npm install --save-dev danger
```

### Step 3: Configuring DangerJS

1. In the `dangerfile.ts`, import the necessary functions from the `danger` package. For example, you can import functions like `message`, `warn`, `fail`, and others.
2. Define your custom rules and actions using the imported functions. You can access information about the PR, such as its title, body, modified files, and more, using the `danger.github` object.

```typescript
// dangerfile.ts
import { danger, warn, fail, message, TextDiff } from "danger";

// No PR is too small to include a description of why you made a change
// To do so, add a # What's this PR do? section to your PR description.
// This is a good place to explain the motivation for making this change.
if (
  !danger.github.pr.body ||
  !danger.github.pr.body.includes("# What's this PR do?")
) {
  const title = "No Emphasis As Heading";
  const idea =
    "Can you add a Summary? " +
    "To do so, add a # What's this PR do? section to your PR description. " +
    "This is a good place to explain the motivation for making this change.";
  message(`${title} - <i>${idea}</i>`);
}

// Define more custom rules here based on your project's requirements
```

### Step 4: Setting up GitHub Actions

1. Create a new directory in your repository root called `.github/workflows`.
2. Inside the `.github/workflows` directory, create a new YAML file named `pr-review.yml`. This file will define the GitHub Actions workflow for automated PR reviews.
3. In the `pr-review.yml`, configure the workflow to trigger whenever a new PR is opened or updated. You can use the `on` field to specify the events that should trigger the workflow.

```yaml
# .github/workflows/pr-review.yml
name: Pull Request Validation

on:
  pull_request:
    types:
      - opened
      - synchronize
```

### Step 5: Defining GitHub Actions Workflow

1. In the `pr-review.yml`, start by specifying the name and other general properties of the workflow.
2. Define the jobs that will be executed as part of the workflow. For automated PR reviews, you will have a single job that includes steps to checkout the code, set up DangerJS, install dependencies, and run DangerJS to perform the PR review.

```yaml
# .github/workflows/pr-review.yml
name: Pull Request Validation

on:
  pull_request:
    types:
      - opened
      - synchronize

jobs:
  pr-review:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14.x"

      - name: Install Dependencies
        run: npm install

      - name: Run DangerJS
        run: npx danger ci
        env:
          DANGER_GITHUB_API_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Step 6: Pushing to the Repository

1. Commit and push the `dangerfile.ts`, `.github/workflows/pr-review.yml`, and any other files you've created to your GitHub repository.
2. GitHub Actions will automatically start running the workflow whenever a new PR is opened or updated.

### Step 7: Viewing the Automated Review

1. When a new PR is opened or updated, navigate to the "Checks" tab in the PR on GitHub.
2. You should see the automated review performed by DangerJS listed as a check. This review will show any messages, warnings, or failures defined in your `dangerfile.ts`.

## Conclusion

Congratulations! You have successfully automated Pull Request reviews using DangerJS and GitHub Actions. By defining custom rules in your `dangerfile.ts`, you can enforce coding standards, check for issues, and provide valuable feedback to contributors automatically. This automation helps streamline your development workflow, leading to better code quality and faster iterations. Share this tutorial with your Sales and Marketing teams so they can spread the word about how your team is improving code collaboration and delivering high-quality software! 🚀📈
