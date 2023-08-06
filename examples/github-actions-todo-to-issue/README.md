# Converting TODOs in Code to GitHub Issues 😇🔍

## Introduction

In this tutorial, you will learn how to automatically convert TODO comments in your code to GitHub issues using the "Todo-to-Issue" GitHub Action. This action scans new commits on the main branch and looks for TODOs in the code. Whenever a new TODO is detected, it creates a new GitHub issue with the TODO details, allowing you to track and manage these tasks effectively. Additionally, you can customize the action to assign labels, milestones, and even add assignees to the created issues.

## Prerequisites

Before starting this tutorial, you should have the following:

1. A GitHub repository where you want to implement the Todo-to-Issue automation.
2. Basic knowledge of GitHub Actions and workflow setup.

## Tutorial

In the following sections, you will learn how to set up the "Todo-to-Issue" GitHub Action in your repository.

### Step 1: Adding Todo-to-Issue Action

1. Open your GitHub repository in your browser.
2. Navigate to the "Actions" tab and click on "New workflow".
3. Choose "Set up a workflow yourself" to create a new workflow file.
4. Name the workflow file (e.g., `todo-to-issue.yml`).

### Step 2: Configuring the Workflow

Add the following content to the `todo-to-issue.yml` workflow file:

```yaml
name: Todo Checker

on:
  push:
    branches:
      - main

jobs:
  todo:
    runs-on: ubuntu-latest

    steps:
      - name: Begin CI...
        uses: actions/checkout@v3

      - name: TODO to Issue
        uses: alstr/todo-to-issue-action@v4
```

This workflow sets up the "Todo-to-Issue" action to run on every push to the `main` branch.

### Step 3: Customizing the Action

The "Todo-to-Issue" action supports various options to customize the behavior of issue creation. You can specify these options as comments in your code, right next to the TODOs.

Here are some examples:

```typescript
function helloWorld() {
  // TODO: Come up with a more imaginative greeting
  //  Everyone uses hello world and it's boring.
  //  assignees: alstr, bouteillerAlan, hbjydev
  //  labels: enhancement, help wanted
  //  milestone: 1
  //  user projects: alstr/Test User Project/To Do
  //  org projects: alstrorg/Test Org Project/To Do
  console.log("Hello world!");
}
```

In the above example, we have added multiple options to the TODO comment. Let's break down each option:

- `assignees`: Comma-separated list of GitHub usernames to assign to the created issue.
- `labels`: Comma-separated list of labels to add to the created issue.
- `milestone`: The ID of the milestone to assign to the created issue.
- `user projects`: Assign the issue to a specific project within your user context.
- `org projects`: Assign the issue to a specific project within your organization context.

Note: If any of the specified labels or projects do not exist, the action will create them.

### Step 4: Commit and Push

Save the changes to the `todo-to-issue.yml` workflow file and commit it to your repository. Push the changes to the `main` branch.

### Step 5: Observe the Action

Once you've pushed the changes, the "Todo-to-Issue" action will automatically start scanning for TODOs in your code. For each new TODO found, it will create a new GitHub issue with the specified options, if any.

You can check the "Issues" tab in your repository to see the newly created issues and track the progress of your tasks.

## Conclusion

Congratulations! You have successfully set up the "Todo-to-Issue" GitHub Action to automate the process of converting TODOs in your code to GitHub issues. This automation helps you and your team manage tasks more efficiently, improve code quality, and keep track of pending work items. Customize the action further to suit your specific project needs and streamline your development workflow.
