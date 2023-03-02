# Serverless SQS offline + TypeScript + ElasticMQ Example

We use Serverless Framework to do production ready deployments and local development using
*serverless-offline*.

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/serverless-sqs-nodejs
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
npm run sls:offline
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

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy
```

## Recommended Resources

We recommend the following resources to add local development tools to your project:

- [LocalStack](../../compose-localstack/)
