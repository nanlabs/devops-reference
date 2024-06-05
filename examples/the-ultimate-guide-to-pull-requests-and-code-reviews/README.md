# The Ultimate Guide to Pull Requests and Code Reviews 🚀

This guide provides an index of best practices, tools, and methodologies for creating Pull Requests (PRs) and conducting code reviews. It includes links to detailed resources and additional tips not covered in those links.

## Objectives of Code Reviews

- **Uphold Code Quality and Stability:** Detect bugs and enforce best practices.
- **Foster Knowledge Sharing and Security:** Encourage team learning and enhance security.
- **Avoid Unstable Code in Production:** Identify issues early to prevent unstable releases.

## Advantages of Code Reviews

- **Detect Bugs and Elevate Code Quality:** Reviewers can spot potential issues.
- **Encourage Knowledge Sharing:** Serve as a platform for continuous learning.
- **Improve Security:** Regular reviews can reveal security vulnerabilities early.

## Code Review Challenges

- **Time-Intensive:** Reviews can extend delivery times and distract developers.
- **Potential Quality Decline:** Large code blocks can lead to missed issues.
- **Context Switching Overhead:** Delayed reviews can cause inefficiencies.

## Common Issues

- **Delayed Responses from Reviewers:** Can lead to conflicts and slowdowns.
- **Ambiguous Feedback:** Causes confusion and inefficiency.
- **Inconsistent Review Standards:** Results in varied review quality.
- **Non-Descriptive Commits:** Makes changes unclear.

## Best Practices for Code Reviews

**Effective Strategies:**

- **Efficient Time Management:** Be concise and clear to respect others' time.
- **Thorough Preparation:** Use clear, descriptive titles and PR descriptions.
- **Structured Reviews:** Employ templates and checklists.
- **Manageable PRs:** Keep changes small and focused.
- **Review Process:** Provide clear, actionable feedback.
- **Open Communication:** Maintain clear and effective dialogue.

## Additional Tips for Code Reviews

- **Limit Review Duration:** Keep sessions to 1 hour to avoid fatigue.
- **Focus on Small Code Blocks:** Review 200-400 lines at a time.
- **Actionable Feedback:** Provide examples to illustrate suggestions.
- **Verify Bug Fixes:** Test changes in a live environment if possible.
- **Use Templates:** Ensure all necessary information is consistently included.

## Pull Request Templates

Using pull request templates ensures that all necessary information is provided consistently.
You can create a `.github` folder in your repository and add a `PULL_REQUEST_TEMPLATE.md` file with the following content:

**Example Pull Request Template:**

```markdown
## Description

Please include a summary of the changes and the related issue. List any dependencies that are required for this change.

Fixes # (issue)

## Type of Change

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce.

- [ ] Test A
- [ ] Test B

## Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] Any dependent changes have been merged and published in downstream modules
- [ ] I have checked my code and corrected any misspellings
```

This template ensures that all PRs include essential information and follow the same structure.

In the section below, we provide a detailed guide on how to [automate PR validation using DangerJS and TypeScript](#example-automate-pr-validation-with-dangerjs-and-typescript).

## Review Workflow

- **Comprehend the Issue and Solution:** Ensure that the solution aligns with the identified problem.
- **Keep Reviews Short:** Limit reviews to 1 hour to maintain quality.
- **Focus on Manageable Sections:** Review 200-400 lines of code at a time for efficiency.
- **Give Clear, Actionable Feedback:** Use examples to clarify suggestions.
- **Test Bug Fixes:** Verify changes in a live environment when possible.

## Communication and Precision

- **Be Explicit in Requests:** Clearly specify the scope and expectations for the review.
- **Utilize a PR Template:** Ensure all necessary information is included.
- **Foster Constructive Dialogue:** Maintain open, respectful communication.

## Roles and Responsibilities

### Requester

- **Clear Communication:** Clearly specify lines and corrections needed.
- **Be Receptive to Feedback:** Engage constructively with reviewers.

### Reviewer

- **Maintain Git Standards:** Ensure proper commit messages and squashed commits.
- **Uphold Code Quality:** Identify and address code smells and ensure maintainability.
- **Provide Detailed Feedback:** Comment on each recommendation or change request.
- **Conduct Iterative Reviews:** Break down reviews into iterations for easier follow-up.

## Code Review Automation Tools

### Benefits of Code Review Tools

- **Efficiency:** Speed up the review process by automating repetitive tasks.
- **Consistency:** Ensure coding standards and guidelines are applied.
- **Error Reduction:** Catch common errors and bugs early.

### Tools and Guides for Code Review Automation

At NaNLABS we have created a series of guides and examples to help you automate code reviews and streamline the PR process. Here are some of the resources available:

- **[Ultimate Guide to Code Review Tools](https://github.com/nanlabs/devops-reference/tree/main/examples/the-ultimate-guide-to-code-review-tools):** Comprehensive overview of tools to streamline code reviews.
- **[Automaing Code Review using DangerJS and GitHub Actions](https://github.com/nanlabs/devops-reference/tree/main/examples/github-actions-with-dangerjs):** Automates PR reviews using custom rules, saving time by automating initial validations.
- **[TODOs to GitHub Issues](https://github.com/nanlabs/devops-reference/tree/main/examples/github-actions-todo-to-issue/):** Converts TODO comments in code to GitHub Issues. This allow reviewers to suggest improvements using TODO comments that are automatically converted to issues as soon as the PR is merged.
- **[Security Assessment Tools](https://github.com/nanlabs/devops-reference/tree/main/examples/the-ultimate-guide-to-security-assessment-tools):** Guides on integrating security tools in the entire development lifecycle including code reviews to enhance security.

## Example: Automate PR Validation with DangerJS and TypeScript

<details>
  <summary>Automate PR Validation with DangerJS and TypeScript</summary>

To streamline the initial validation of Pull Requests and save valuable time, you can use DangerJS with TypeScript. This setup helps automate checks, enforce coding standards, and ensure that all required information is included in the PR description.

### Step-by-Step Guide

1. **Install DangerJS and TypeScript:**

   ```sh
   npm install --save-dev danger typescript
   ```

2. **Initialize a TypeScript configuration:**

   ```sh
   npx tsc --init
   ```

3. **Create a Dangerfile:**
   Create a `dangerfile.ts` in the root of your project with the following content:

   ```typescript
   import { danger, warn, fail, message } from "danger";

   // Check for a summary in the description
   if (danger.github.pr.body.length === 0) {
     fail("Please provide a description for your PR.");
   }

   // Check for linked issues
   const issueRegex = /#[0-9]+/;
   if (!issueRegex.test(danger.github.pr.body)) {
     warn("Please link an issue in the description.");
   }

   // Check for a checklist
   const checklistRegex = /## Checklist:/;
   if (!checklistRegex.test(danger.github.pr.body)) {
     warn("Please include a checklist in the PR description.");
   }

   // Example of a custom rule
   if (danger.github.pr.additions + danger.github.pr.deletions > 500) {
     warn("This PR is quite large, consider splitting it into smaller PRs.");
   }
   ```

4. **Add Danger to your CI pipeline:**

   Update your CI configuration (e.g., GitHub Actions) to run Danger on each PR:

   ```yaml
   name: Pull Request Validation

    concurrency:
      group: pull_request_${{ github.event.number }}
      cancel-in-progress: true

    on:
      pull_request:
        branches:
          - main

    jobs:
      pr-review:
        name: Danger JS

        if: github.event_name == 'pull_request' && github.event.pull_request.draft == false

        runs-on: ubuntu-latest

        permissions:
          actions: write
          checks: write
          contents: write
          issues: write
          pull-requests: write
          statuses: write

        steps:
          - name: Begin CI...
            uses: actions/checkout@v4

          - uses: actions/setup-node@v4
            with:
              node-version: "v22"

          - name: Install dependencies
            run: npm install

          - name: Danger JS Action
            uses: danger/danger-js@9.1.8
            env:
              GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
   ```

5. **Run Danger:**

   Ensure Danger runs on every PR to automate initial checks and validations.

This setup will help enforce standards and save time by automating the initial validation process for PRs.

</details>

## Additional Resources

For more details on integrating these practices and tools, refer to the specific guides and examples provided in the links. This index serves as a starting point to enhance your PR and code review processes efficiently.
