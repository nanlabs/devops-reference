# Serverless SQS offline + Python + Localstack

[![serverless](http://public.serverless.com/badges/v4.svg)](http://www.serverless.com)

We use Serverless Framework for production deployments and local development with
_serverless-offline_.

We use LocalStack to emulate AWS SQS locally. The Serverless Offline SQS plugin
consumes the emulated queue from Lambda events.

Queues defined in `resources`, such as `myFirstQueue`, are deployed in cloud
environments. They are not deployed by default in LocalStack. The Serverless
Offline SQS plugin creates a queue automatically when a Lambda event consumes it.

If you need to create a queue without a Lambda event consuming it, see the
LocalStack `docker-compose.yml` file. It contains commented code for a setup script.

Specify a queue's ARN in its Lambda event and pass the queue URL to the function.
This example defines a custom resource for each queue. In the local stage, it
provides the LocalStack ARN and URL; in other stages, it uses the CloudFormation
queue values. The stage variable selects the appropriate values for each function.

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
- [Serverless Offline SQS - npm](https://www.npmjs.com/package/serverless-offline-sqs)
- [SQS - Localstack](https://docs.localstack.cloud/user-guide/aws/sqs/)
