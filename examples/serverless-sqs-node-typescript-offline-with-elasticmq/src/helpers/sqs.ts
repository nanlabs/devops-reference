import {
  DeleteMessageCommand,
  GetQueueUrlCommand,
  SendMessageCommand,
  SendMessageCommandOutput,
  SQSClient,
} from "@aws-sdk/client-sqs";
import { ListQueuesCommand } from "@aws-sdk/client-sqs";
import {
  getAwsRegion,
  getSqsClientUrl,
  getSqsLocalQueueUrlPrefix,
} from "./env";

export const getSqsClient = () => {
  return new SQSClient({
    region: getAwsRegion(),
    endpoint: getSqsClientUrl(),
  });
};

export const getSqsQueueUrl = async (queueName: string) => {
  if (process.env.STAGE === "local" || process.env.STAGE === "offline") {
    return `${getSqsLocalQueueUrlPrefix()}/${queueName}`;
  }

  return undefined;
};

export const sendToQueue = async (queueName: string, message: string) => {
  const client = getSqsClient();

  const queueUrl = await getSqsQueueUrl(queueName);
  const params = {
    MessageBody: message,
    MessageAttributes: {
      Message: {
        DataType: "String",
        StringValue: message,
      },
    },
    QueueUrl: queueUrl,
  };

  const command = new SendMessageCommand(params);
  const data = await client.send(command);
  return data;
};

export const listQueues = async () => {
  const client = getSqsClient();

  const queues = await client.send(new ListQueuesCommand({}));
  return queues.QueueUrls || [];
};

export const deleteFromQueue = async (
  queueName: string,
  receiptHandle: string
) => {
  const client = getSqsClient();

  const { QueueUrl } = await client.send(
    new GetQueueUrlCommand({ QueueName: queueName })
  );

  const params = {
    QueueUrl,
    ReceiptHandle: receiptHandle,
  };

  const command = new DeleteMessageCommand(params);
  const res = await client.send(command);
  return res;
};
