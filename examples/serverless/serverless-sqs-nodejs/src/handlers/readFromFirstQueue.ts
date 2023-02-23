import { SQSClient } from "@aws-sdk/client-sqs";
import { DeleteMessageCommand, GetQueueUrlCommand } from "@aws-sdk/client-sqs";
import { SQSEvent } from "aws-lambda";

const sqsClient = new SQSClient({
  region: process.env.AWS_REGION,
  endpoint: process.env.SQS_CLIENT_URL,
});

export const handler = async (event: SQSEvent) => {
  const { Records } = event;

  if (Records.length > 0) {
    try {
      const res = await sqsClient.send(
        new GetQueueUrlCommand({ QueueName: "sqs-nodejs-local-myFirstQueue" })
      );
      var deleteParams = {
        QueueUrl: res.QueueUrl,
        ReceiptHandle: Records[0].receiptHandle,
      };
      const data = await sqsClient.send(new DeleteMessageCommand(deleteParams));
      console.log("Message deleted", data);
    } catch (err) {
      console.log("Error", err);
    }
  }
};
