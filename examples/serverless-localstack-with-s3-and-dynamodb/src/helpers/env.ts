// getStage is used to determine the stage of the application
export const getStage = () => process.env.STAGE;

// getPackageVersion is used to determine the version of the application
export const getPackageVersion = () => process.env.PACKAGE_VERSION;

// getAwsRegion is used to determine the region of the application
export const getAwsRegion = () => process.env.AWS_REGION;

// getAwsAccountId is used to determine the account id of the application
export const getAwsAccountId = () => process.env.AWS_ACCOUNT_ID;

// getAwsAccessKeyId is used to determine the access key id of the application
export const getAwsAccessKeyId = () => process.env.AWS_ACCESS_KEY_ID;

// getAwsSecretAccessKey is used to determine the secret access key of the application
export const getAwsSecretAccessKey = () => process.env.AWS_SECRET_ACCESS_KEY;

// getAwsS3Endpoint is used to determine the s3 endpoint of the application
export const getAwsS3Endpoint = () => process.env.AWS_S3_ENDPOINT || undefined;

// getAwsDynamoDbEndpoint is used to determine the dynamodb endpoint of the application
export const getAwsDynamoDbEndpoint = () => process.env.AWS_DYNAMODB_ENDPOINT || undefined;

// getS3BucketName is used to determine the bucket name of the application
export const getS3BucketName = () => process.env.S3_BUCKET_NAME;

// getTableName is used to determine the table name of the application
export const getTableName = () => process.env.TABLE_NAME;
