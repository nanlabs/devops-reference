import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import middy from '@middy/core';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { getPackageVersion, getS3BucketName } from '../helpers/env';
import { uploadFileToS3 } from '../lib/s3';

type PostEvent = APIGatewayProxyEvent & {
  body: {
    content: string;
    filePath: string;
  };
};

const eventSchema = {
  type: 'object',
  required: ['body'],
  properties: {
    body: {
      type: 'object',
      required: ['content', 'filePath'],
      properties: {
        content: {
          type: 'string',
        },
        filePath: {
          type: 'string',
        },
      },
    },
  },
};

const responseSchema = {
  type: 'object',
  required: ['body', 'statusCode'],
  properties: {
    body: {
      type: 'string',
    },
    statusCode: {
      type: 'number',
    },
  },
};

// TODO: Get rid of the explicit partial type middy.MiddyfiedHandler
//      and use the implicit type instead.
const handler: middy.MiddyfiedHandler = middy<PostEvent, APIGatewayProxyResult>()
  .use(httpHeaderNormalizer())
  .use(httpJsonBodyParser())
  .use(
    validator({
      eventSchema: transpileSchema(eventSchema),
      responseSchema: transpileSchema(responseSchema),
    }),
  )
  .handler(async (event) => {
    const { content, filePath } = event.body;

    console.log(`Received ${filePath} with content: ${content}`);

    const s3BucketName = getS3BucketName();
    if (!s3BucketName) throw new Error(' S3 Bucket Name is not defined.');

    const packageVersion = getPackageVersion();
    if (!packageVersion) throw new Error('Package Version is not defined.');

    console.log(`Uploading to s3://${s3BucketName}/${filePath}...`);

    await uploadFileToS3({
      bucketName: s3BucketName,
      filePath,
      fileContent: Buffer.from(event.body.content, 'utf8'),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: ' uploaded successfully to S3.',
      }),
    };
  });

export { handler };
