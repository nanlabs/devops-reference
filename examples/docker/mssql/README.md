# Microsoft SQL Server

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/infra-reference.git
cd infra-reference/examples/docker/mssql
cp .env.example .env
docker compose up
```

This will start the following services:

- `mssql`: Microsoft SQL Server

## Initialization

If you would like to do additional initialization in an image derived from this one, add one or more `*.sql` (gzipped files are supported, name convention is `*.sql.gz`), or `*.sh` scripts under `initdb.d/`. After the entrypoint calls initdb to create the default mssql user and database, it will run any `*.sql` files, run any executable `*.sh` scripts, and source any non-executable `*.sh` scripts found in that directory to do further initialization before starting the service.

> Warning: scripts in `initdb.d/` are only run if you start the container with a data directory that is empty; any pre-existing database will be left untouched on container startup. One common problem is that if one of your `initdb.d/` scripts fails (which will cause the entrypoint script to exit) and your orchestrator restarts the container with the already initialized data directory, it will not continue on with your scripts.

These initialization files will be executed in sorted name order as defined by the current locale, which defaults to en_US.utf8. Any `*.sql` files will be executed by `SA` user, which defaults to the mssql superuser.
