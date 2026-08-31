import * as cdk from 'aws-cdk-lib';
import { AppPresignedUrlStack } from '../lib/app-presigned-url-stack-stack';

const app = new cdk.App();

new AppPresignedUrlStack(app, 'app-presigned-url-stack', {
  description: 'App stack including assests bucket, lambda and api gateway',
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
