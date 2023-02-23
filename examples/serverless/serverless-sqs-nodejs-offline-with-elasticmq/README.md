# Serverless SQS offline + TypeScript + ElasticMQ Example

We use Serverless Framework to do production ready deployments and local development using
*serverless-offline*.

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/serverless/serverless-sqs-nodejs
fnm use
npm install
```

## Local Development

This example uses elasticMQ as the interface for the SQS queues.
Run the following command to start the docker image

```sh
npm run elasticmq
```

This repo has a local development set up that uses the file `.env.local` to configure the local environment.
Run the following command to start the local development server:

```sh
npm run start
```

It will start the following services:

- AWS Lambda at `http://localhost:3000`
- AWS SQS at `http://localhost:9324`

After that you can run the following commands:

- `listQueues` - List all queues

```sh
npm run invoke:local listQueues
```

or using `curl`

```sh
curl http://localhost:3000/list

- `sendToQueue` - Enqueue a message on the queue

> NOTE: This command will enqueue the message on the queue, and after some seconds you will see
the `readFromQueue` lambda getting the message and deleting it.

```sh
npm run invoke:local sendToQueue --data '{ "message": "value"}'
```

or using `curl`

```sh
curl -X POST http://localhost:3000/send -d '{ "message": "value"}'
```

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
