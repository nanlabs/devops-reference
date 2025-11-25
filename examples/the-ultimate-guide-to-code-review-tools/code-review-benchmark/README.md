# Code Review Benchmark Examples

This directory contains minimal TypeScript example files designed for benchmarking AI code review tools on GitHub. These files are **not intended to be run or compiled** - they are standalone examples for testing how well code review tools can identify issues.

## Overview

Each file is 40-80 lines of realistic code in a payment/order processing domain. The code includes JSDoc comments describing the intended behavior, but the implementations contain subtle (and not-so-subtle) bugs and issues.

## Files

### `logic-example.ts`

**Focus:** Logic errors and bugs

This file contains various logic errors that would cause incorrect behavior at runtime:

- Boundary condition errors (off-by-one mistakes)
- Incorrect aggregation calculations
- Boolean logic errors
- Edge case handling problems (empty arrays, null values)
- Incorrect comparison operators

The code looks reasonable at first glance but contains bugs that would be caught during careful code review or testing.

### `security-example.ts`

**Focus:** Security vulnerabilities

This file contains security flaws in otherwise functional-looking code:

- SQL injection vulnerabilities through string concatenation
- Unsafe handling of user input without validation
- Sensitive information leakage in error messages and logs
- Insecure password storage (plain text)
- Hard-coded secrets and API keys in source code

The logic is mostly correct, but the security issues would pose significant risks in production.

### `maintainability-example.ts`

**Focus:** Code quality and maintainability issues

This file contains code that "works" but is difficult to maintain:

- Very long functions doing multiple things (violating single responsibility)
- Poor variable naming (generic names like `data`, `result1`)
- Code duplication across different functions
- Mixed concerns (business logic, formatting, I/O operations all in one function)
- Inconsistent coding style (mixing async/await with raw promises)

The behavior is mostly correct, but the code structure clearly needs refactoring for better maintainability.

## Usage

These files are designed to be used as test cases for evaluating AI code review tools on GitHub (such as CodeRabbit, GitHub Copilot, LinearB gitStream, etc.). Review each file and identify:

1. **Logic issues** - What bugs would cause incorrect behavior?
2. **Security issues** - What vulnerabilities could be exploited?
3. **Maintainability issues** - What refactoring would improve the code?

## Note

These examples are intentionally flawed for benchmarking purposes. Do not use this code in production environments. No build tools or dependencies are required - these are standalone TypeScript files for code review analysis only.
