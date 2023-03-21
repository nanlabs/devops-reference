import json

def compute(event, context):
    message = {"message": "Hello from compute"}
    print("Received event: " + json.dumps(event, indent=2))
    print("---------------------------------")
    print(event["Records"][0]["body"])
    return {
        'statusCode': 200,
        'body': json.dumps(message, indent=2)
    }