# Serverless FastAPI example

We use [Serverless](https://www.serverless.com/) to deploy our API to AWS Lambda.

## Requirements

**You’ll need to have Node 18.17.0 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

**You'll also need to have Python 3.9 installed on your local development machine**. You can use [pyenv](https://github.com/pyenv/pyenv) to easily switch Python versions between different projects. If you are using Windows, you should use [pyenv-win](https://github.com/pyenv-win/pyenv-win).

```sh
pyenv install
pyenv local
```

### Gotchas for Certain Environments

**Depending on your dev environment, it may also be necessary to create and initiate a virtualenv for python**. Do so by running the below commands:

```sh
python3 -m venv venv
source venv/bin/activate
pip3 install -r requirements.txt
```

For windows user using WSL2, you may also need to have Docker Desktop installed, running, and with the [WSL2 connection](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers) set up.

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
npm run sls:offline
```

## Deployment

To deploy the app to AWS, you'll first need to configure your AWS credentials. There are many ways
to set your credentials, for more information refer to the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).

Once set you can deploy your app using the serverless framework with:

```sh
npm run sls:deploy -- --verbose --stage <stage>
```
