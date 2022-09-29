# Contributing guide

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./.github/CODE_OF_CONDUCT.md), please follow it in all your interactions with the project.

You can help contribute to this project in many ways, including:

## Reporting Bugs

This section guides you through submitting a bug report for this project. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

When creating bug reports please fill out [the required template](./.github/ISSUE_TEMPLATE/bug_report.md), the information it asks for helps us resolve issues faster.

## Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for this project, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

When creating enhancement suggestions, please fill in [the template](./.github/ISSUE_TEMPLATE/feature_request.md), including the steps that you imagine you would take if the feature you're requesting existed.

## Pull Requests

1. Fork this repository.
2. Create a new branch for each feature or improvement.
3. Send a pull request from each feature branch to the **main** branch.

It is very important to separate new features or improvements into separate feature branches, and to send a
pull request for each branch. This allows us to review and pull in new features or improvements individually.

### Writing Shell Scripting code

- Follow shell scripting best practices (e.g. as described in
  [Google's shell style guide](https://google.github.io/styleguide/shell.xml))
- Try to be POSIX compliant
- Use `"${variable}"` instead of `$variable`
- Constants (and global variables) should be in `UPPER_CASE`, other variables
  should be in `lower_case`
- Use single square brackets (`[ condition ]`) for conditionals
  (e.g. in 'if' statements)
- Write clean and readable code
- Write comments where needed (e.g. explaining functions)
- Explain what arguments a function takes (if any)
- Use different error codes when exiting and explain when they occur
  at the top of the file
- If you've created a new file or have made a lot of changes
  (judge this by yourself), you can add a copyright disclaimer below the shebang
  line and below any other copyright notices
  (e.g. `Copyright (C) Jane Doe <contact@jane.doe>`)
- Always line wrap at 80 characters
- Scripts should not have an extension, e.g. `./example.sh` should be `./example`.
- Libraries should always have a `.sh` extension and should not have a shebang
- Neither scripts nor libraries should be executable (their permissions are
  set during compilation)
- Use `shellscript` to error-check your code
- Test your code before submitting a PR (not required if it's a draft)
- Write long and informative commit messages

### Writing Dockerfiles

- Follow the [Dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
