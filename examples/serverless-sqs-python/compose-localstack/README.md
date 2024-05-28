# LocalStack

## Requirements

- [docker](https://www.docker.com/)

## Quickstart

```sh
git clone https://github.com/nanlabs/devops-reference.git
cd devops-reference/examples/compose-localstack
docker compose up
```

It will execute the script `setup-resources.sh` to setup the resources.

## Resources

Once the docker compose is up, it will create the following resources:

- [DynamoDB Table](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)
- [Kinesis Stream](https://docs.aws.amazon.com/streams/latest/dev/getting-started.html)
- [S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)
- [SQS Queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html)

## Testing

From outside the container you can execute the following commands to test the service each service:

- **DynamoDB**

```sh
$ aws --endpoint-url=http://localhost:4566 dynamodb list-tables
{
    "TableNames": [
        "my_table"
    ]
}
```

- **Kinesis**

```sh
$ aws --endpoint-url=http://localhost:4566 kinesis list-streams
{
    "StreamNames": [
        "my_stream"
    ]
}
```

- **S3**

```sh
$ aws --endpoint-url=http://localhost:4566 s3 ls
2022-08-08 03:16:01 example-bucket
```

- **SQS**

```sh
$ aws --endpoint-url=http://localhost:4566 sqs list-queues
{
    "QueueUrls": [
        "http://localhost:4566/000000000000/my_queue"
    ]
}
```
