import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const client = new SQSClient({
  region: process.env.AWS_REGION,
  endpoint: "http://localhost:9324"
});

export const handler = async (event: { message?: string, queue?: string }) => {
  const { queue, message } = event;
  const queueUrl = `${process.env.BASE_QUEUE_URL}sqs-nodejs-local-${queue || 'myFirstQueue'}`;
  const params = {
    MessageBody: "hello world",
    MessageAttributes: {
      "Message": {
        DataType: "String",
        StringValue: message || "hello world"
      }
    },  
    QueueUrl: queueUrl,
  };
  const command = new SendMessageCommand(params);
  try {
    const data = await client.send(command);
    console.log("Message sent to queue", data);
  } catch (err) {
    console.error("Error", err);
  }
};


