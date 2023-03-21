import os
import json
import boto3

SQS_CLIENT_URL = os.environ['SQS_CLIENT_URL']
client = boto3.client('sqs', endpoint_url=SQS_CLIENT_URL)

def send_to_queue(event, context):
    body = json.loads(event['body'])
    SQS_QUEUE_URL = os.environ['SQS_QUEUE_URL']
    message = client.send_message(
        QueueUrl=SQS_QUEUE_URL,
        MessageBody=body["message"]
        )
    return {
        'statusCode': 200,
        'body': json.dumps(message, indent=2)
    }