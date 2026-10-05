# Serverless LocalStack Example [![serverless](http://public.serverless.com/badges/v4.svg)](http://www.serverless.com)

This project is a TypeScript based API generated using [create-awesome-node-app](https://www.npmjs.com/package/create-awesome-node-app). However, it is recommended to generate your own project using the command and following the options in the interactive menu. Please refer to the documentation for more information.

We use Serverless Framework to do production ready deployments and local development using
_serverless-offline_.

## Features

- 🦾 [TypeScript](https://www.typescriptlang.org/) - Ensures type safety
- 🌐 API Gateway - Build scalable and maintainable APIs
- ⚙️ Configuration Management - Manage different environments and configurations
- 📜 Logging - Implement logging for debugging and monitoring purposes
- 🧪 Unit Testing - Write and execute unit tests to ensure code quality

## Pre-packed with

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/) - JavaScript and JSX linting utility
- [Prettier](https://prettier.io/) - Opinionated code formatter
- [Husky](https://www.npmjs.com/package/husky) - Simplifies Git hooks setup
- [lint-staged](https://www.npmjs.com/package/lint-staged) - Runs linters against staged git files, preventing 💩 from slipping into your code base!

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Composer](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/en/) 22 or later

  **You’ll need to have Node.js 22 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

## Quickstart

```sh
# Setup NodeJs and install dependencies
fnm use
pnpm install
npx serverless login

# For CI or non-interactive use, set SERVERLESS_ACCESS_KEY instead.

# Run the Local Stack using Docker Compose
docker-compose up -d

# Set env variables and run the serverless offline
export AWS_ACCESS_KEY_ID="dummy-value"
export AWS_SECRET_ACCESS_KEY="dummy-value"
pnpm run sls:offline
```

## Testing locally

```sh
curl -X POST http://localhost:3000/ --header 'Content-Type: application/json' --data '{
  "content": "console.log(\"Hello World\");",
  "filePath": "example/file.js"
}'
```

Then run the following command to check the uploaded file:

```sh
# Set the AWS credentials
export AWS_ACCESS_KEY_ID="dummy-value"
export AWS_SECRET_ACCESS_KEY="dummy-value"

# List the uploaded files
aws --endpoint-url=http://localhost:4566 --no-verify-ssl s3 ls --recursive serverless-localstack-bucket
# 2023-10-31 18:00:00         18 example/file.js
```

## Security maintenance

`adm-zip` is temporarily overridden to `0.6.1` because `serverless-localstack@1.4.0`
still requires `^0.5.10`, which has no patched 0.5.x release. The S3 plugin path
uses the compatible ZIP API in 0.6.1, and the override removes the reported high
severity ZIP memory allocation vulnerabilities. Review this override by
**2027-01-03** and remove it when the plugin accepts a patched version without an
override. Advisory: [GHSA-xcpc-8h2w-3j85](https://github.com/advisories/GHSA-xcpc-8h2w-3j85).

## Development

While developing, you will mostly rely on `pnpm run dev`; however, there are additional scripts available:

| `pnpm run <script>` | Description                                                |
| ------------------- | ---------------------------------------------------------- |
| `sls:offline`       | Serves your app locally for development                    |
| `format`            | Formats the project using [Prettier](https://prettier.io/) |
| `lint`              | Lints the project for potential errors                     |
| `lint:fix`          | Lints the project and fixes all correctable errors         |

## Production

Available scripts:

| `pnpm run <script>` | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `sls:package`       | Builds the application to the `.serverless/` directory |

## Extra documentation

You can find useful information such as project structure, available scripts and much more in the [docs](./docs) folder!

## Recommended Resources

We recommend checking out our awesome list of resources for learning about Serverless Framework, AWS Lambda,
local development, and more. Check it out here: [Awesome NaN Labs](https://github.com/nanlabs/awesome-nan).
