import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getAwsS3Endpoint } from '../helpers/env';

const endpoint = getAwsS3Endpoint();
const s3Client = new S3Client({
  endpoint,
  region: process.env.AWS_REGION || 'us-east-1',
  forcePathStyle: Boolean(endpoint),
});

type UploadFileInput = {
  bucketName: string;
  filePath: string;
  fileContent: Buffer;
};

export const uploadFileToS3 = async ({ bucketName, filePath, fileContent }: UploadFileInput) => {
  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: filePath,
      Body: fileContent,
    }),
  );
};
