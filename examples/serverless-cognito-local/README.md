# Cognito local development with docker-compose and serverless

Cognito local enviroment using [cognito-local](https://github.com/jagregory/cognito-local) and serverless framework to manage lambda trigger functions.

## Requirements

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (version 16.13.2 or later)

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
```

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/cognito-local
npm install
npm run sls:offline
docker-compose up
```

This will start the following services:

- `cognito-local`: running at [http://localhost:9229](http://localhost:9229)
- AWS Lambda Offline [http for lambda] at http://localhost:4000

### Preconfigured resources

1. a User Pool with ID local_3IUPq2kI, see file ./db/local_3IUPq2kI.json
2. a User with username test-user, see file ./db/local_3IUPq2kI.json
3. a User Pool Client with ID e1kcys1v2s6tr4u69ig3nqb27, see file ./db/clients.json
 
### Deploy

deploy the lambda triggers to AWS and create a new user pool.

```sh
npm run sls:deploy
```
