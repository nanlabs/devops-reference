import os
import boto3


def handler(event, _context):
    print("on-object-created handler called")
    filename = event["Records"][0]["s3"]["object"]["key"]
    bucketname = event["Records"][0]["s3"]["bucket"]["name"]
    print(f"File uploaded to S3 bucket: {bucketname}")
    print(f"Filename: {filename}")
