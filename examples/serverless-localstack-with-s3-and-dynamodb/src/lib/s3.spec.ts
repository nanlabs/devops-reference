import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { uploadFileToS3 } from './s3';

describe('uploadFileToS3', () => {
  it('sends the file to the configured bucket and key', async () => {
    const send = jest.spyOn(S3Client.prototype, 'send').mockResolvedValue({} as never);
    const fileContent = Buffer.from('hello');

    await uploadFileToS3({
      bucketName: 'example-bucket',
      filePath: 'example/hello.txt',
      fileContent,
    });

    expect(send).toHaveBeenCalledWith(expect.any(PutObjectCommand));
    expect((send.mock.calls[0][0] as PutObjectCommand).input).toMatchObject({
      Bucket: 'example-bucket',
      Key: 'example/hello.txt',
      Body: fileContent,
    });
    send.mockRestore();
  });
});
