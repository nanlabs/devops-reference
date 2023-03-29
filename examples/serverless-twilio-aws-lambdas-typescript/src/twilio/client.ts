import { Twilio } from "twilio";
import { MessageInstance } from "twilio/lib/rest/api/v2010/account/message";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = new Twilio(accountSid, authToken);

export const sendSMS = (to: string, body: string): Promise<MessageInstance> => client.messages.create({
    body,
    from: twilioNumber,
    to,
  });
