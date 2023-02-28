export const getSqsClientUrl = () => process.env.SQS_CLIENT_URL;

export const getSqsLocalQueueUrlPrefix = () => process.env.SQS_LOCAL_QUEUE_URL_PREFIX;

export const getSqsQueueName = () => process.env.SQS_QUEUE_NAME || '';

export const getAwsRegion = () => process.env.AWS_REGION;
