# Serverless Twilio + TypeScript Example

This example exposes an AWS Lambda function that sends an SMS using [Twilio](https://www.twilio.com/) when it receives a POST request.

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

We use Serverless Framework to do production ready deployments and local development using
_serverless-offline_.

## Setup Twilio Account

1. Sign up for a [Twilio account](http://www.twilio.com)

2. Create a [new phone number](https://www.twilio.com/console/phone-numbers/) in your Twilio trial account

## Usage

To install this example to bootstrap your project, run the following command:

```sh
npx serverless install -u https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-twilio-aws-lambdas-typescript -n my-project
```

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

## Local Development

This repo has a local development set up that uses the file `.env.local` to configure the local environment.
Grab your `ACCOUNT SID` and `AUTH TOKEN` from the [Twilio console](https://www.twilio.com/console)
Run the following command to start the local development server:

```sh
npm run sls:offline
```

It will start the following services:

- AWS Lambda at `http://localhost:3000/send-twilio-sms`

You can then send a request using curl

```sh
curl -X POST \
  --url http://localhost:3000/send-twilio-sms \
  --header 'Content-Type: application/json' \
  --data '{"toNumber": "+541153535353", "messageBody": "This message comes from an AWS Lambda"}'
```

## Lambda Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy
```

## Recommended Resources

We recommend the following resources to add local development tools to your project:

- [LocalStack](https://github.com/nanlabs/devops-reference/tree/main/examples/docker/localstack/)
