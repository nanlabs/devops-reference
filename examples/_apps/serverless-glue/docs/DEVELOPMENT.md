# AWS Glue libs

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
docker compose up
```

## Execute jobs

You can test the example `app/jobs/pyspark.py` in the following way:

```sh
# attach to the container
docker compose exec -it awsglue /bin/bash
```

and then run the following command inside the container:

```sh
pip3 install -U requirements.txt
pip3 install -U --editable .
glue-spark-submit app/jobs/pyspark.py --JOB_NAME job_example --CUSTOM_ARGUMENT custom_value
```
