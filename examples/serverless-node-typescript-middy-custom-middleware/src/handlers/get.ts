import { APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import { customMiddleware } from "../middlewares/custom";

export const SAFELIST: string[] = ["localhost:3000"];

interface APIGatewayEventMiddyNormalised {
  body: { [msg: string]: string };
}

// Example with official middleware, you need to do a POST request in order to send the body
export const getHandler = async (
  event: APIGatewayEventMiddyNormalised
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify("Your are in the safe list"),
  };
};

export const customMiddlewareHandler = middy(getHandler).use(
  customMiddleware()
);
