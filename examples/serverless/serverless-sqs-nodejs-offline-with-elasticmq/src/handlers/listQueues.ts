import { listQueues } from "../helpers/sqs";

export const handler = async () => {
  try {
    const queues = await listQueues();
    console.log("Your local queues", queues);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(queues),
    };
  } catch (err) {
    console.log("Error", err);
  }

  return {
    statusCode: 500,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: "Internal server error" }),
  };
};
