# AWS Glue libs

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/infra-reference.git
cd infra-reference/examples/docker/glue
docker compose up
```

## Example

You can test the example `pyspark_example.py` in the following way:

```sh
# attach to the container
docker compose exec -it awsglue /bin/bash
```

and then run the following command inside the container:

```sh
glue-spark-submit pyspark_example.py --JOB_NAME job_example --CUSTOM_ARGUMENT custom_value
```
