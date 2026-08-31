import { CfnOutput, Duration, Fn, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Cors, LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class AppPresignedUrlStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const bucketArn = Fn.importValue('app-assets-bucket');

    const bucket = s3.Bucket.fromBucketName(this, 'assets-bucket', bucketArn);

    const entityTable = new dynamodb.Table(this, 'entity-table', {
      partitionKey: {
        name: 'identifier',
        type: dynamodb.AttributeType.STRING,
      },
      tableName: 'presigned-url-table',
      billingMode: dynamodb.BillingMode.PROVISIONED,
      removalPolicy: RemovalPolicy.DESTROY
    });

    const urlLambda = new lambda.Function(this, 'url-handler', {
      handler: 'index.handler',
      description: 'Create lambda to generate presigned url for s3',
      code: lambda.Code.fromAsset(path.join(__dirname, `/../src/aws-s3-lambda`)),
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.minutes(1),
      environment: {
        BUCKET_NAME: bucket.bucketName,
        ENTITY_TABLE: entityTable.tableName
      },
    });

    const uploadS3Lambda = new lambda.Function(this, 'upload-s3-handler', {
      handler: 'index.handler',
      description: 'Create lambda to upload object to s3',
      code: lambda.Code.fromAsset(path.join(__dirname, `/../src/aws-upload-s3-lambda`)),
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.minutes(1),
      environment: {
        BUCKET_NAME: bucket.bucketName,
        ENTITY_TABLE: entityTable.tableName
      },
    });

    bucket.grantReadWrite(urlLambda);

    bucket.grantReadWrite(uploadS3Lambda);

    entityTable.grantReadWriteData(urlLambda);

    entityTable.grantReadWriteData(uploadS3Lambda);

    const restApi = new RestApi(this, `app-presigned-url`, {
      deployOptions: {
        stageName: process.env.ENV,
      },
      defaultCorsPreflightOptions: {
        allowHeaders: ['Content-Type', 'Authorization'],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: Cors.ALL_ORIGINS,
      },
      binaryMediaTypes: ['image/png','multipart/form-data','image/jpeg']
    });

    const getObject = restApi.root.addResource('get-object');

    const putObject = restApi.root.addResource('put-object');

    getObject.addMethod('GET', new LambdaIntegration(urlLambda));

    putObject.addMethod('POST', new LambdaIntegration(uploadS3Lambda));

    new CfnOutput(this, 'assets-bucket-name', { value: bucket.bucketName });

    new CfnOutput(this, 'get-presigned-url-endpoint', {
      value: `${restApi.url}get-object`
    });

    new CfnOutput(this, 'put-object-s3', {
      value: `${restApi.url}put-object`
    });
  }
}
