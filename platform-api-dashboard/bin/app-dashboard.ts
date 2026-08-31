#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { LambdaDashboardStack } from "../lib/dashboard-stack";
import { LambdaStack } from "../lib/lambda-stack";

const app = new cdk.App();

const lambdaDashboardStack = new LambdaDashboardStack(
  app,
  "PlatformApiLambdaDashboardStack",
  {
    dashboardName: "PlatformApiLambdaDashboardStack",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  }
);

const lambda = new LambdaStack(lambdaDashboardStack, "PlatformApiLambda");

lambdaDashboardStack.addLambda("PlatformApiLambda", "PlatformApiLambda");
