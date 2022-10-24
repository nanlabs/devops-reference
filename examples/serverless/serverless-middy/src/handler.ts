import { APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from '@middy/http-json-body-parser'

export interface HelloResponse {
  message: string;
}

interface APIGatewayEventMiddyNormalised {
  body: { [msg: string]: string };
}

// Example with official middleware
export const handler = async (
  event: APIGatewayEventMiddyNormalised
): Promise<APIGatewayProxyResult> => {
  const { msg } = event.body;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(msg),
  };
};

export const middyHandler = middy(handler)
  .use(jsonBodyParser());