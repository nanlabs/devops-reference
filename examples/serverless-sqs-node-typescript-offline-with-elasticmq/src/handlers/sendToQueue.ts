import { getSqsQueueName } from "../helpers/env";
import { sendToQueue } from "../helpers/sqs";

export const handler = async (event: { message?: string }) => {
  const { message } = event;

  try {
    const data = await sendToQueue(getSqsQueueName(), message || "hello world");
    console.log("Message sent to queue", data);
  } catch (err) {
    console.error("Error", err);
  }
};
