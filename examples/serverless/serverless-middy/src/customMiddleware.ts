import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import createHttpError from "http-errors";

export const WHITE_LIST: string[] = ["localhost:3000"];

// Example using a custom middleware
export const customMiddleware = (): middy.MiddlewareObj<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> => {
  const before: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  > = async (request): Promise<void> => {
    const host = request.event.headers["host"];
    console.log(request);

    if (host && WHITE_LIST.includes(host)) {
      return;
    }
    throw createHttpError(401, "Unauthorized Request");
  };
  
  const onError: middy.MiddlewareFn<
    APIGatewayProxyEvent,
    APIGatewayProxyResult
  > = async (request): Promise<APIGatewayProxyResult> => {
    return {
      statusCode: 401,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify("Your are not in the white list"),
    };
  };
  return { before, onError };
};