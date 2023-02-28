import { SQSEvent } from "aws-lambda";
import { getSqsQueueName } from "../helpers/env";
import { deleteFromQueue } from "../helpers/sqs";

export const handler = async (event: SQSEvent) => {
  const { Records } = event;

  for (const record of Records) {
    console.log("Message received", record.body);

    try {
      const res = await deleteFromQueue(
        getSqsQueueName(),
        record.receiptHandle
      );
      console.log("Message deleted", res);
    } catch (err) {
      console.log("Error", err);
    }
  }
};
