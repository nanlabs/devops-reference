import { SQSClient } from "@aws-sdk/client-sqs";
import { ListQueuesCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({
  region: process.env.AWS_REGION,
  endpoint: "http://localhost:9324",
});

export const handler = async () => {
  try {
    const queues = await sqsClient.send(new ListQueuesCommand({}));
    console.log("Your local queues", queues);
  } catch (err) {
    console.log("Error", err);
  }
};
