# Serverless AppSync + Python Example

[![serverless](http://public.serverless.com/badges/v4.svg)](http://www.serverless.com)

We use Serverless Framework with native CloudFormation resources to deploy this AppSync API to AWS.

## Usage

To install this example to bootstrap your project, run the following command:

```sh
npx serverless install -u https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-appsync-python -n my-project
```

## Requirements

**You’ll need to have Node 24 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

**You'll also need to have Python 3.12 installed on your local development machine**. You can use [pyenv](https://github.com/pyenv/pyenv) to easily switch Python versions between different projects.

```sh
pyenv install
pyenv local
```

## Local Development

The previous AppSync simulator was removed because its dependency tree contains unresolved security advisories. The local server below runs the same GraphQL schema and Lambda handler without emulating AppSync, VTL, or authentication. When migrating an existing stack from the previous plugin based configuration, review the generated CloudFormation change set for resource replacements before applying it.

Install local GraphQL dependencies with `python -m pip install -r requirements-local.txt`, then run `npm run sls:offline` to start the local handler at `http://127.0.0.1:20002/graphql`. Send GraphQL POST requests to that endpoint. Use a deployed development endpoint to validate AppSync-specific behavior. Configure `.env.local` for the target service name before packaging or deployment.

## AppSync Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy
```

## Recommended Resources

We recommend the following resources to add local development tools to your project:

- [LocalStack](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-localstack/)
