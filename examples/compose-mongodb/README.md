# MongoDB + Mongo Express

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/docker/mongodb
cp .env.example .env
docker compose up
```

This will start the following services:

- `mongodb`: MongoDB server
- `mongo-express`: Mongo Express server running at [http://localhost:8081](http://localhost:8081)

## MongoDB Initialization

When the MongoDB container is started for the first time it will execute files with extensions `.sh` and `.js` that are found in `initdb.d/`. Files will be executed in alphabetical order. `.js` files will be executed by mongo using the database specified by the `MONGO_INITDB_DATABASE` variable, if it is present, or test otherwise. You may also switch databases within the `.js` script.
