import { APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";

export interface HelloResponse {
  message: string;
}

// Example with official middleware, you need to do a POST request in order to send the body
export const getHandler = async (): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Hello world!",
    }),
  };
};

export const handler = middy(getHandler);
