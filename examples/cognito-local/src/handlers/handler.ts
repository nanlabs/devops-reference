import { Context, Callback, PreSignUpTriggerEvent } from 'aws-lambda';
export const preSignUp = async (
  event: PreSignUpTriggerEvent,
  _context: Context,
  callback: Callback
) => {
  console.log('event', event);
  callback(null, event);
};
