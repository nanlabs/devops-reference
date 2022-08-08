#!/bin/sh

# Needed so all localstack components will startup correctly (i'm sure there's a better way to do this)
sleep 15

aws dynamodb create-table --endpoint-url=http://localstack:4566 --table-name my_table \
    --attribute-definitions AttributeName=key,AttributeType=S \
    --key-schema AttributeName=key,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

aws kinesis create-stream --endpoint-url=http://localstack:4566 --stream-name my_stream --shard-count 1

aws s3 mb s3://example-bucket --endpoint-url=http://localstack:4566

aws sqs create-queue --endpoint-url=http://localstack:4566 --queue-name my_queue

# you can go on and put initial items in tables...
