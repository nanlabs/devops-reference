# Complete AWS Glue example app

This example app is a full AWS Glue setup that deploys a Glue job using Python Shell Script
and a Glue job using PySpark.

- [Complete AWS Glue example app](#complete-aws-glue-example-app)
  - [Overview](#overview)
  - [Local Development](#local-development)
    - [Using VSCode + Remote Containers (recommended)](#using-vscode--remote-containers-recommended)
    - [Using Docker Compose manually](#using-docker-compose-manually)
  - [Deployment](#deployment)

## Overview

This example was created as a composition of the following examples:

- [Serverless Glue example](../../serverless/serverless-glue/)
- [AWS Glue docker example](../../docker/glue/)
- [VSCode DevContainer example](../../devcontainer/glue/)

## Local Development

We have two options to run the services locally:

- **Using VSCode + Remote Containers (recommended)**
- **Using Docker Compose - (longer, but more flexible)**

### Using VSCode + Remote Containers (recommended)

1. Install Docker
2. Install [VSCode](https://code.visualstudio.com/)
3. Install the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) extension
4. Clone this repository
5. Create your application within a container (see gif below)

![Create application within a container](./docs/vscode-open-in-container.gif)

after the container is running inside VSCode, you can try to run the jobs locally.

In the following gif we execute the following commands:

```sh
glue-spark-submit src/jobs/pyspark.py --JOB_NAME job_example --CUSTOM_ARGUMENT custom_value
```

### Using Docker Compose manually

Check the full [development documentation](./docs/DEVELOPMENT.md) to learn how to setup a local development environment for DataNaN
using Docker Compose.

## Deployment

We use Serverless Framework to deploy the AWS Glue jobs among other resources.
Check the full [deployment documentation](./docs/DEPLOYMENT.md) to learn how to deploy the AWS Glue jobs.
