# Serverless Neo4j Deployment

We use Serverless Framework to do production ready deployments.

## Usage

To install this example to bootstrap your project, run the following command:

```sh
npx serverless install -u https://github.com/nanlabs/devops-reference/tree/main/examples/serverless/serverless-neo4j-ec2 -n my-project
```

## Requirements

**You’ll need to have Node 16.13.2 or later on your local development machine** (but it’s not required on the server). You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.

```sh
fnm use
npm install
```

## EC2 Instance Deployment

Set up the following environment variables:

```sh
export AWS_ACCESS_KEY_ID=<your-access-key-id>
export AWS_SECRET_ACCESS_KEY=<your-secret-access-key>
export AWS_REGION=<your-default-region>
```

or setup your AWS credentials in your `~/.aws/credentials` file. Then you can
define the environment variable `AWS_PROFILE` to point to the profile you want to use.

```sh
export AWS_PROFILE=<your-profile-name>
```

> You can include these environment variables in your project’s env files at: `.env` or `.env.<stage>`.

Then run the following command:

```sh
npm run deploy -- --verbose --stage <stage>
```
