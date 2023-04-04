<!--lint disable double-link awesome-heading awesome-git-repo-age awesome-toc-->

<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/4426989?s=200&v=4"
    >
</p>
<h1>DevOps Reference</h1>

[Changelog](#) |
[Contributing](./CONTRIBUTING.md)

</div>
<div align="center">

[![Continious Integration][cibadge]][ciurl]
[![License: MIT][licensebadge]][licenseurl]

</div>

This repository contains different infrastructure components, CI/CD pipelines, automation tools
among other resources that are used in different projects here at [NaN Labs](https://www.nanlabs.com/).

## Contents

- [Applications](#applications)
- [Examples](#examples)

  - [DevOps](#devops)
    - [A/B Testing](#ab-testing)
    - [Shell Scripting and CLI Tools](#shell-scripting-and-cli-tools)
    - [Continuous Integration, Delivery and Deployment](#continuous-integration-delivery-and-deployment)
    - [Containers, Orchestration and Serverless](#containers-orchestration-and-serverless)
      - [Containers and Compositions (Docker, Docker Compose, Buildpacks and more)](#containers-and-compositions-docker-docker-compose-buildpacks-and-more)
      - [DevContainers and Codespaces](#devcontainers-and-codespaces)
      - [Kubernetes](#kubernetes)
    - [Infrastructure as Code](#infrastructure-as-code)
      - [AWS Amplify](#aws-amplify)
      - [Serverless Framework, SAM and CloudFormation](#serverless-framework-sam-and-cloudformation)
      - [Terraform](#terraform)

- [Contributing](#contributing)
- [Contributors](#contributors)

## Applications

- [Complete AWS Glue ETL](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-glue-full-boilerplate/) - A complete example of an AWS Glue application that uses the [Serverless Framework](https://www.serverless.com/) to deploy the infrastructure and DevContainers and/or Docker Compose to run the application locally with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI, among other tools. It provides jobs using Python Shell and PySpark. _Keywords: Python, AWS, Glue, ETL, Serverless, DevContainers, Docker Compose_

## Examples

### DevOps

#### A/B Testing

- [AWS CloudWatch Evidently](https://github.com/nanlabs/devops-reference/tree/main/examples/aws-cloudwatch-evidently/) - A complete analysis of the service and a Proof of Concept on how to integrate it with a Node.js application. _Keywords: Node.js, AWS, CloudWatch, CloudWatch Evidently, A/B Testing, Feature Flags_
- [Feature flags post](https://www.atlassian.com/continuous-delivery/principles/feature-flags) - How to progressively expose your features with feature flags by IAN BUCHANNAN. _Keywords: Feature Flags_

#### Shell Scripting and CLI Tools

- [Bash as a Wrapper Utility](https://github.com/nanlabs/devops-reference/tree/main/examples/bash-as-a-wrapper-utility-basic/) - Bash as a wrapper utility for other languages and tools. _Keywords: Shell Scripting, Utilities_
- [Bash as a Wrapper Utility with Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/bash-as-a-wrapper-utility-with-easy-options/) - Bash as a wrapper utility for other languages and tools using Easy Options. _Keywords: Shell Scripting, Utilities, Easy Options_
- [Easy Options](https://github.com/nanlabs/devops-reference/tree/main/examples/easy-options/) - Easy options for shell scripts. _Keywords: Shell Scripting, Utilities, Easy Options_
- [When to use shell](https://google.github.io/styleguide/shellguide.html#when-to-use-shell) - A guide from Google on when to use shell scripts. _Keywords: Shell Scripting, Utilities_

#### Continuous Integration, Delivery and Deployment

- [Actionlint Playground](https://rhysd.github.io/actionlint/) - Static checker for GitHub Actions workflow files. _Keywords: GitHub Actions, Actionlint_
- [Automate Pull Requests Reviews using Danger](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/pr-review.yml) - This workflow automates the initial review of Pull Requests using [Danger.js](https://danger.systems/js/). This provides another logical step in your build, through this Danger can help lint your rote tasks in daily code review. You can use Danger to codify your teams norms. Leaving humans to think about harder problems. _Keywords: GitHub Actions, Danger.js_
- [Automation Seed example](https://github.com/nanlabs/automation-seed/tree/main/.github/workflows) - Different workflows to validate the code and deploy an automation report page. _Keywords: GitHub Actions, Automation_
- [Markdown Lint](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/markdownlint.yml) - This workflow validates the Markdown files in the repository using the [markdownlint action](https://github.com/marketplace/actions/markdown-lint). _Keywords: GitHub Actions, Markdown Lint_
- [React Boilerplate](https://github.com/nanlabs/react-boilerplate/tree/main/.github/workflows) - Different workflows to validate the code and deploy a React application. _Keywords: GitHub Actions, React_
- [Shell Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/shellcheck.yml) - This workflow validates the shell scripts in the repository using the [shellcheck action](https://github.com/ludeeus/action-shellcheck). _Keywords: GitHub Actions, Shell Check_
- [Terraform Check](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/tf-check.yml) - This workflow validates the Terraform files in the repository using the [terraform action](https://github.com/dflook/terraform-fmt-check). _Keywords: GitHub Actions, Terraform_
- [Todo to Issue](https://github.com/nanlabs/devops-reference/tree/main/.github/workflows/todo.yml) - This workflow scans new commits on the main branch looking for `TODO`s in the code and creates new GitHub issues. _Keywords: GitHub Actions, Todo_

#### Containers, Orchestration and Serverless

##### Containers and Compositions (Docker, Docker Compose, Buildpacks and more)

- [Airflow and Spark environment using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-airflow/) - Dockerfile and compose.yml to run Airflow locally with initialization scripts. _Keywords: Docker, Docker Compose, Airflow, Spark_
- [AWS Cognito local using Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-cognito/) - compose.yml to run Cognito locally. _Keywords: Docker, Docker Compose, Cognito, AWS_
- [AWS Glue using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-glue/) - Dockerfile and compose.yml for AWS Glue development with AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools. _Keywords: Docker, Docker Compose, AWS Glue, Spark, Jupyter Notebook, AWS CLI_
- [AWS Neptune using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-neptune/) - Dockerfile and compose.yml to run AWS Neptune locally with initialization scripts. _Keywords: Docker, Docker Compose, AWS Neptune_
- [Localstack using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-localstack/) - Dockerfile and compose.yml to run Localstack locally with all the necessary services. This example also includes a script to create the necessary resources in Localstack. The provided examples are for DynamoDB, S3, SQS and Kinesis. _Keywords: Docker, Docker Compose, Localstack, DynamoDB, S3, SQS, Kinesis_
- [Microsoft SQL Server using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-mssql/) - Dockerfile and compose.yml to run Microsoft SQL Server locally with initialization scripts. _Keywords: Docker, Docker Compose, Microsoft SQL Server_
- [MongoDB + Mongo Express using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-mongodb/) - Dockerfile and compose.yml to run MongoDB and Mongo Express locally with initialization scripts. _Keywords: Docker, Docker Compose, MongoDB, Mongo Express_
- [PostgreSQL using Docker and Docker Compose](https://github.com/nanlabs/devops-reference/tree/main/examples/compose-postgres/) - Dockerfile and compose.yml to run PostgreSQL locally with initialization scripts. _Keywords: Docker, Docker Compose, PostgreSQL_
- [Python Buildpack](https://github.com/nanlabs/devops-reference/tree/main/examples/buildpacks-python) - Buildpack example for Python applications. _Keywords: Buildpack, Python_

##### DevContainers and Codespaces

- [AWS Glue](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers-glue/) - DevContainer for AWS Glue development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop AWS Glue jobs such us AWS Glue Libs, Spark, Jupyter Notebook, AWS CLI among other tools. _Keywords: Docker, Docker Compose, DevContainer, VSCode DevContainer, GitHub Codespaces, AWS Glue, Spark, Jupyter Notebook, AWS CLI_
- [Node.js](https://github.com/nanlabs/devops-reference/tree/main/examples/devcontainers-nodejs/) - DevContainer for Node.js development. Uses `docker-compose` to run VSCode attached to a container with all the necessary tools to develop Node.js applications. _Keywords: Docker, Docker Compose, DevContainer, VSCode DevContainer, GitHub Codespaces, Node.js_

##### Kubernetes

- [Ingress](https://github.com/nanlabs/devops-reference/tree/main/examples/kubernetes-ingress-example/) - Ingress example using NGINX Ingress Controller. You can run this example locally using [Minikube](https://minikube.sigs.k8s.io/docs/start/). _Keywords: Kubernetes, Ingress, NGINX Ingress Controller_

#### Infrastructure as Code

##### AWS Amplify

- [AWS Amplify + NextJS 13](https://github.com/nanlabs/devops-reference/tree/main/examples/amplify-nextjs-deployment/) - AWS Amplify example to deploy a NextJS v13 application to the Cloud. _Keywords: AWS Amplify, NextJS, NextJS 13_

##### Serverless Framework, SAM and CloudFormation

- [AWS AppSync + Python](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-appsync-python/) - Serverless Framework example to deploy an AWS AppSync API using Python. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, AWS AppSync, Python_
- [AWS AppSync + TypeScript](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-appsync-node-typescript/) - Serverless Framework example to deploy an AWS AppSync API using TypeScript. It also has a local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, AWS AppSync, TypeScript_
- [AWS Cognito Local Example](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-cognito-local/) - AWS Cognito local enviroment with Docker and Serverless offline _Keywords: Serverless Framework, Serverless Offline, AWS, Cognito, Docker_
- [AWS Glue with Python Shell and PySpark Jobs](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-glue-deployment/) - Serverless Framework example to deploy an AWS Glue job using Python Shell and PySpark. _Keywords: Serverless Framework, AWS Glue, Python Shell, PySpark_
- [DocumentDB Cluster](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-documentdb/) - Serverless Framework example to deploy a DocumentDB cluster with all the necessary resources. _Keywords: Serverless Framework, DocumentDB_
- [Neo4j in EC2](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-neo4j-ec2/) - Serverless Framework example to deploy a Neo4j instance in EC2. _Keywords: Serverless Framework, Neo4j, EC2_
- [RDS Postgres Instance](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-rds-postgres/) - Serverless Framework example to deploy a RDS Postgres cluster with all the necessary resources. _Keywords: Serverless Framework, RDS Postgres_
- [Serverless Middy](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-middy/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda. _Keywords: Serverless Framework, Middy_
- [Serverless Middy with Custom Middleware](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-middy-custom-middleware/) - Serverless Framework example to deploy a lambda function using [Middy](https://middy.js.org/), the stylish Node.js middleware engine for AWS Lambda. _Keywords: Serverless Framework, Middy, Custom Middleware_
- [Serverless Nest Application with TypeScript](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-node-typescript-nest/) - Serverless Framework example to deploy a NestJS application using TypeScript. _Keywords: Serverless Framework, NestJS, TypeScript_
- [Serverless S3 Local](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-s3-local/) - Serverless Framework example to run a lambda function locally using [Serverless S3 Local](https://www.serverless.com/plugins/serverless-s3-local). _Keywords: Serverless Framework, Serverless S3 Local_
- [Serverless SQS offline + Python + Localstack Example](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-sqs-python/) - Serverless Framework example to run lambda functions locally using [Serverless Offline SQS](https://www.serverless.com/plugins/serverless-offline-sqs-external) with Localstack. It provides a full local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, SQS, Serverless Offline, Serverless Offline SQS, Localstack, Python_
- [Serverless SQS offline + TypeScript + ElasticMQ Example](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-sqs-node-typescript-offline-with-elasticmq/) - Serverless Framework example to run lambda functions locally using [Serverless Offline SQS](https://www.serverless.com/plugins/serverless-offline-sqs) with ElasticMQ. It provides a full local development environment using [Serverless Offline](https://www.serverless.com/plugins/serverless-offline). _Keywords: Serverless Framework, SQS, Serverless Offline, Serverless Offline SQS, ElasticMQ_
- [Serverless Twilio + Typescript Lambda example](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-twilio-aws-lambdas-typescript/) - Serverless Framework example to deploy a lambda function using Twilio and TypeScript. _Keywords: Serverless Framework, Serverless Offline, AWS, Twilio, TypeScript_
- [Start and Stop EC2 Instances with AWS Lambda](https://github.com/nanlabs/devops-reference/tree/main/examples/serverless-start-stop-ec2-instance/) - Serverless Framework example to start and stop EC2 instances using AWS Lambda. _Keywords: Serverless Framework, EC2, AWS Lambda_

##### Terraform

- [Terraform AWS Minecraft Server](https://github.com/nanlabs/devops-reference/tree/main/examples/terraform-aws-minecraft-server/) - Terraform example to deploy a Minecraft server in AWS EC2 instance using Docker. _Keywords: Terraform, AWS, Minecraft, Docker, EC2_

## Contributing

- Contributions make the open source community such an amazing place to learn, inspire, and create.
- Any contributions you make are **truly appreciated**.
- Check out our [contribution guidelines](./CONTRIBUTING.md) for more information.

## Contributors

<a href="https://github.com/nanlabs/devops-reference/contributors">
  <img src="https://contrib.rocks/image?repo=nanlabs/devops-reference"/>
</a>

Made with [contributors-img](https://contrib.rocks).

[cibadge]: https://github.com/nanlabs/devops-reference/actions/workflows/ci.yml/badge.svg
[licensebadge]: https://img.shields.io/badge/License-MIT-blue.svg
[ciurl]: https://github.com/nanlabs/devops-reference/actions/workflows/ci.yml
[licenseurl]: https://github.com/nanlabs/devops-reference/blob/main/LICENSE
