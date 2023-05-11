# Cognito Local Development with Docker Compose and Serverless

This repository provides a local development environment for Cognito using [cognito-local](https://github.com/jagregory/cognito-local) and the serverless framework for managing lambda trigger functions.

## Requirements

Make sure you have the following software installed on your local development machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (version 16.13.2 or later)

**Note: Node.js 16.13.2 or later is required on your local development machine, but not on the server. You can use [fnm](https://github.com/Schniz/fnm) to easily switch Node versions between different projects.**

To switch to the required Node.js version, run the following command:

```sh
fnm use
```

## Quickstart

Follow these steps to quickly get started with the Cognito local development environment:

1. Clone this repository:

   ```sh
   git clone https://github.com/nanlabs/devops-reference.git
   ```

2. Navigate to the Cognito local example directory:

   ```sh
   cd devops-reference/examples/serverless-cognito-local
   ```

3. Start the required services using Docker Compose:

   ```sh
   docker-compose up
   ```

4. Install the necessary dependencies:

   ```sh
   npm install
   ```

5. Run the serverless framework in offline mode:

   ```sh
   npm run sls:offline
   ```

The following services will be started:

- `cognito-local` at [http://localhost:9229](http://localhost:9229)
- AWS Lambda Offline (HTTP for Lambda) at [http://localhost:4000](http://localhost:4000)
- `setup-resources`: a service for creating the user pool and user pool client

### Preconfigured Resources

Running `docker-compose up` will automatically create the following resources:

1. User pool located at `./.cognito/db/local_XXXXXX.json`
2. User pool client located at `./.cognito/db/clients.json`

### Important Notes

- The `setup-resources` service will create a user pool and a user pool client on the first run. If you want to reset the user pool, you can delete the `./.cognito/db/local_XXXXXX.json` file and restart the service.
- If you only want to run the `cognito-local` service, you can use the command `docker-compose up cognito-local`.
- If you are using a JWT validation library like [aws-jwt-verify](https://www.npmjs.com/package/aws-jwt-verify), make sure to change the user pool ID from `local_XXXXXX` to a matching ID from a user pool created in your AWS account.
You will also need to add the following code to your `./.cognito/config.json` file:

```json
"TokenConfig": {
"IssuerDomain": "https://cognito-idp.{region}.amazonaws.com"
}
```

Replace {region} with the appropriate AWS region where your Cognito user pool is located. For example, if your user pool is in the us-west-2 region, the updated configuration would be:

```json
"TokenConfig": {
"IssuerDomain": "https://cognito-idp.us-west-2.amazonaws.com"
}
```

### Deployment

To deploy the lambda triggers to AWS and create a Cognito user pool in your AWS account, use the following command:

```sh
npm run sls:deploy
```

This command will not only deploy the lambda triggers but also create the required Cognito user pool in your AWS account. Make sure you have the necessary AWS credentials properly configured before running this command.
