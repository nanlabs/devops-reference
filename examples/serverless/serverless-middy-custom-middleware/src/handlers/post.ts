import { APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

export interface HelloResponse {
  message: string;
}
interface APIGatewayEventMiddyNormalised {
  body: { [msg: string]: string };
}

// Example with official middleware, you need to do a POST request in order to send the body
export const postHandler = async (
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

export const officialMiddlewareHandler = middy(postHandler).use(
  jsonBodyParser()
);

