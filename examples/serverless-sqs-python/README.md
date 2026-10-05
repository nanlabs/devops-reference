# Serverless SQS offline + Python + Localstack

[![serverless](http://public.serverless.com/badges/v4.svg)](http://www.serverless.com)

We use Serverless Framework to do production ready deployments and local development using
_serverless-offline_.

We use LocalStack to emulate AWS SQS locally and use the Serverless Offline SQS plugin to consume the emulated queue from Lambda events.

Queues defined in resources, such as `myFirstQueue`, are deployed in cloud environments. They are not deployed by default in LocalStack. The Serverless Offline SQS plugin creates queues automatically in LocalStack when a Lambda event consumes them.

If you need to create a queue without a lambda event consuming it look in the localstack docker-compose.yml file. There is commented code to run a set-up script.

To use a queue in a lambda event we have to specify its arn, and to consume a queue in a lambda function we have to pass its url. So, to simplify this we can add a custom resource per queue by specifying the local arn and the local url (for the other stages we get the value of the cloudformation resource) and then we can pass the custom resource to the lambdas by taking advantage of the stage variable. So we have to create the queues in cloudformation resources and specify them in custom resources as well.

## Requirements

**You’ll need to have Node 24 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

**You'll also need to have Python 3.12.14 installed on your local development machine**. You can use [pyenv](https://github.com/pyenv/pyenv) to easily switch Python versions between different projects.

```sh
pyenv install 3.12.14
pyenv local 3.12.14
```

**You'll also need [Docker](https://www.docker.com/)**

## Local Development

In order to develop locally, you'll need to install the dependencies and run the application using Serverless Offline.
This example uses _localstack_ to emulate AWS SQS.

### Localstack SQS

Run the following command to start the docker container in deamon mode.

```sh
npm run localstack-d
```

Run the following command to stop the docker container

```sh
npm run localstack-down
```

### Serverless

#### Install Dependencies

```sh
npm run sls requirements install
```

#### Run the Application

This repository has a local development setup that uses the file `.env.local` to configure the local environment.
Run the following command to start the local development server:

```sh
npm run sls:offline
```

It will start the following services:

- AWS Lambda at `http://localhost:3000`
- AWS SQS at `http://localhost:9324`

You can use curl to send request to the Lambdas

```sh
curl http://localhost:3000/send-to-queue -d '{ "message": "value"}'

- `sendToQueue` - Enqueue a message on the queue

> NOTE: This will enqueue the message on the queue, and after some seconds you will see
the `compute` lambda getting the message and deleting it.
```

## Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy -- --verbose --stage <stage>
```

## Useful links

We recommend the following documentation:

- [SQS - Serverless](https://www.serverless.com/framework/docs/providers/aws/events/sqs)
- [AWS SQS Queue - Cloudformation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sqs-queue.html)
- [Serverless Offline SQS - NPM](https://www.npmjs.com/package/serverless-offline-sqs)
- [SQS - Localstack](https://docs.localstack.cloud/user-guide/aws/sqs/)
