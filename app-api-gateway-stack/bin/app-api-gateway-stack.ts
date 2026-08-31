#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PlatformApisStack } from "../lib/platform-apis-stack";
import { PlatformApiDefiDexStack } from "../lib/platform-apis-defi-dex-stack";
import { PlatformApiFuturesStack } from "../lib/platform-apis-futures-stack";
import { PlatformApiMetricsStack } from "../lib/platform-apis-metrics-stack";
import { PlatformApiOptionsStack } from "../lib/platform-apis-options-stack";
import { PlatformApiSpotStack } from "../lib/platform-apis-spot-stack";
import { PlatformApiSwapStack } from "../lib/platform-apis-swap-stack";

const app = new cdk.App();

const hostedZone =
  process.env.CDK_DEFAULT_ACCOUNT == process.env.CDK_DEV_ACCOUNT
    ? "dev.euler.tools"
    : "prod.euler.tools";

const branch =
  process.env.CDK_DEFAULT_ACCOUNT == process.env.CDK_DEV_ACCOUNT ? "development" : "main";

new PlatformApisStack(app, "platform-apis-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiDefiDexStack(app, "platform-api-defi-dex-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiFuturesStack(app, "platform-api-futures-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiSpotStack(app, "platform-api-spot-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiSwapStack(app, "platform-api-swap-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiOptionsStack(app, "platform-api-options-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

new PlatformApiMetricsStack(app, "platform-api-metrics-stack", {
  hostedZone,
  description: "Platform Api Pipeline stack with platform api gateway",
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

app.synth();
