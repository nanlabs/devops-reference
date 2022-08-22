# Serverless AppSync + Python Example

We use Serverless Framework to do production ready deployments and local development using
_serverless-offline_.

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

**You'll also need to have Python 3.9 installed on your local development machine**. You can use [pyenv](https://github.com/pyenv/pyenv) to easily switch Python versions between different projects.

```sh
pyenv install
pyenv local
```

## Local Development

In order to develop locally, you'll need to install the dependencies and run the application using Serverless Offline.

### Install Dependencies

```sh
npm run sls requirements install
```

### Run the Application

This repo has a local development set up that uses the file `.env.local` to configure the local environment.
Run the following command to start the local development server:

```sh
npm run start
```

It will start the following services:

- App Sync server at `http://localhost:20002/graphql`
- GraphQL playground at `http://localhost:20002`

## AppSync Deployment

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
