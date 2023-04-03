import { APIGatewayProxyResult } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import { sendSMS } from "../twilio/client";

interface APIGatewayEventMiddyNormalised {
  body: { [msg: string]: string };
}

export const sendTwilioSMS = async (
  event: APIGatewayEventMiddyNormalised
): Promise<APIGatewayProxyResult> => {
  const { toNumber, messageBody } = event.body;
  const messageResponse = await sendSMS(toNumber, messageBody);
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(`The message was successfully sent with the sid: ${messageResponse.sid}`),
  };
};

export const handler = middy(sendTwilioSMS).use(httpHeaderNormalizer()).use(
  jsonBodyParser()
);

