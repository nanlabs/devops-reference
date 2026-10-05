# S3 Local Example

[![serverless](http://public.serverless.com/badges/v4.svg)](http://www.serverless.com)

We use Serverless Framework v4 to deploy to AWS and to test the S3-triggered
Lambda locally with LocalStack.

## Usage

To install this example to bootstrap your project, run the following command:

```sh
npx serverless install -u https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-s3-local -n my-project
```

## Requirements

**You’ll need Node.js 20 or later, Python 3.12, Docker Compose, an authenticated
Serverless Framework v4 CLI, and a LocalStack developer token.** Create a token
at <https://app.localstack.cloud>. You can use [fnm](https://github.com/Schniz/fnm)
and [pyenv](https://github.com/pyenv/pyenv) to switch runtime versions.

```sh
fnm use
npm install
```

```sh
pyenv install
pyenv local
```

## Local Development

In order to develop locally, install the dependencies and start LocalStack:

```sh
cp .env.example .env.local
docker compose --env-file .env.local up -d
npm run sls:deploy:local
```

The LocalStack token must stay in `.env.local`; do not commit it. Serverless
Framework v4 also requires CLI authentication. The LocalStack plugin redirects
the `local` stage to the local emulator; the default `dev` stage targets AWS.
LocalStack reaches Docker through an internal socket proxy that enables only
container and image API operations and is not published to the host. Docker
container creation still grants substantial control over the Docker host, so
run only trusted LocalStack images and project code in this setup.

### Triggering S3 events locally

Upload an object to the configured trigger bucket using AWS CLI credentials
accepted by LocalStack:

```sh
AWS_ACCESS_KEY_ID=test AWS_SECRET_ACCESS_KEY=test AWS_DEFAULT_REGION=us-east-1 \
  aws --endpoint-url=http://localhost:4566 s3 cp .gitignore \
  s3://s3-local-lambda-trigger/
```

## Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy -- --verbose --stage <stage>
```
