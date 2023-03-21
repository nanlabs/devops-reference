# Cognito Local

## Requirements

- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/compose-cognito
docker compose up
```

This will start the following services:

- `cognito-local`: running at [http://localhost:9229](http://localhost:9229)

### Preconfigured resources

1. a User Pool with ID local_3IUPq2kI, see file ./db/local_3IUPq2kI.json
2. a User with username test-user, see file ./db/local_3IUPq2kI.json
3. a User Pool Client with ID e1kcys1v2s6tr4u69ig3nqb27, see file ./db/clients.json
