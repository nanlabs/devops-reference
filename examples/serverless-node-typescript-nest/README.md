# Basic Starter for NestJS on AWS Lambda with Serverless

We use Serverless Framework to do production ready deployments and local development using
*serverless-offline*.

## Usage

To install this example to bootstrap your project, run the following command:

```sh
npx serverless install -u https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-nest -n my-project
```

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/serverless-node-typescript-nest
fnm use
npm install
```

## Local Development

This repo has a local development set up that uses the file `.env.local` to configure the local environment.
Run the following command to start the local development server:

```bash
npm run sls:offline
```

It will start the following services:

- AWS Lambda at `http://localhost:3000`

## Lambda Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```bash
npm run sls:deploy
```
