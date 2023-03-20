# Cognito local development with docker-compose and serverless

Cognito local enviroment using [cognito-local](https://github.com/jagregory/cognito-local) and serverless framework to manage lambda trigger functions.

## Requirements

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (version 16.13.2 or later)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)


**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
```

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/cognito-local
npm install
npm run dev
```

## Cognito Local

If you do not need the lambda triggers you can start only the local cognito enviroment by running

```sh
docker-compose up
```

### Preconfigured resources
1. a User Pool with ID local_3IUPq2kI, see file ./db/local_3IUPq2kI.json
2. a User with username test-user, see file ./db/local_3IUPq2kI.json
3. a User Pool Client with ID e1kcys1v2s6tr4u69ig3nqb27, see file ./db/clients.json

## Serverless

The serverless framework is used to manage the lambda triggers. The serverless framework is configured to use the local cognito enviroment. You can also deploy the lambda triggers to AWS.

### Local

```sh
sls offline
```

### Deploy
this will deploy the lambda triggers to AWS and create a new user pool.

```sh
sls deploy
```
