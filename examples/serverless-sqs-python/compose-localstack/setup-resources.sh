#!/bin/sh

# Needed so all localstack components will startup correctly (i'm sure there's a better way to do this)
sleep 10

aws sqs create-queue --endpoint-url=http://localstack:4566 --queue-name myFirstQueue

# you can go on and put initial items in tables...
