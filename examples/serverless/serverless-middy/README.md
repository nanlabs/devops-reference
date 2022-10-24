# Serverless Middy + TypeScript Example

We use Serverless Framework to do production ready deployments and local development using
*serverless-offline*.

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
git clone https://github.com/nanlabs/infra-reference.git
cd infra-reference/examples/serverless/serverless-middy
fnm use 16.13.2
npm install
```

## Local Development

This repo has a local development set up that uses the file `.env.local` to configure the local environment.
Run the following command to start the local development server:

```sh
npm run start
```

It will start the following services:

- AWS Lambda at `http://localhost:3000`

## Lambda Deployment

Set up the following environment variables:

```sh
export AWS_ACCESS_KEY_ID=<your-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
export AWS_REGION=<your-default-region>
```

or setup your AWS credentials in your `~/.aws/credentials` file. Then you can
define the environment variable `AWS_PROFILE` to point to the profile you want to use.

```sh
export AWS_PROFILE=<your-profile-name>
```

> You can include these environment variables in your project’s env files at: `.env` or `.env.<stage>`.

Then run the following command:

```sh
npm run deploy -- --verbose --stage <stage>
```

## Recommended Resources

We recommend the following resources to add local development tools to your project:

- [LocalStack](../../docker/localstack/)
