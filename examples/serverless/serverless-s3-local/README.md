# Scans Watcher Service

We use Serverless Framework and Serverless Compose to do production ready deployments and local development using _serverless-offline_.

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

- You'll need to have [watchman](https://facebook.github.io/watchman/) installed on your local development machine.
- Install python requirements

  ```sh
  npm run sls requirements install -- --stage local
  ```

### Run the Application

This repo has a local development set up that uses the file `.env.local` to configure the local environment.

Run the following command to start the local development server:

```sh
npm run offline:start -- --stage local
```

### Triggering AWS Events offline

You must use the AWS cli to trigger events locally. First, using aws configure set up a new profile, i.e. `aws configure --profile s3local`. The default creds are

```sh
aws_access_key_id = S3RVER
aws_secret_access_key = S3RVER
```

```sh
aws --endpoint-url=http://localhost:8000 s3 cp .gitignore s3://c2sec-domains/ --profile s3local
```

### Testing pointing to the Cloud

You can also test the application pointing to the cloud. You'll need to have the AWS CLI installed and configured.

```sh
export AWS_ACCESS_KEY_ID=<your-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
export AWS_SESSION_TOKEN=<your-session-token>
export AWS_DEFAULT_REGION=<your-default-region>
```

and the run the previous commands.
