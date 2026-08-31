import { Duration, Fn, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaIntegration, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { NodeJsLambdaConstruct } from "./constructs/node-js-lambda-construct";
import { Effect, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53targets from "aws-cdk-lib/aws-route53-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Code } from "aws-cdk-lib/aws-lambda";
import * as ssm from "aws-cdk-lib/aws-ssm";

interface AppStackProps extends StackProps {
  hostedZone: string;
}

export class PlatformApiMetricsStack extends Stack {
  constructor(scope: Construct, id: string, props?: AppStackProps) {
    super(scope, id, props);

    const { hostedZone } = props!;

    const certificateArn = ssm.StringParameter.fromStringParameterName(
      this,
      "api-public-cert",
      "/devops-infra/certificate-public-api"
    );

    const certificate = Certificate.fromCertificateArn(
      this,
      "Certificate",
      certificateArn.stringValue
    );

    const publicZone = route53.HostedZone.fromLookup(
      this,
      "public-hosted-zone",
      {
        privateZone: false,
        domainName: hostedZone,
      }
    );

    const apiResourcePolicy = new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          effect: Effect.ALLOW,
          actions: ["execute-api:Invoke"],
          principals: [new iam.AnyPrincipal()],
          resources: ["execute-api:/*"],
        }),
      ],
    });

    const handler = new lambda.Function(this, `${id}-handler`, {
      functionName: `${id}-handler`,
      handler: "handler",
      description: "Create lambda that logs events",
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log('event: ', event)
        };
      `),
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.minutes(1),
    });

    const restApi = new LambdaRestApi(this, `platform-apis-metrics`, {
      handler: handler,
      description: "Platform API Metrics",
      deployOptions: {
        stageName: process.env.ENV,
      },
      defaultCorsPreflightOptions: {
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: [
          "http://localhost:8080",
          "https://workflows.dev.euler.tools",
        ],
      },
      restApiName: "platform-apis-metrics",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api-metrics", {
      domainName: `metrics.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "metrics.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisMetricspHandler = new NodeJsLambdaConstruct(
      this,
      "metrics-apis-lambda-construct",
      {
        functionName: "metrics",
        description: `Create Platform Api metrics apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisMetricspHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const metricsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisMetricspHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");

    const metrics = market.addResource("metrics");
    const metricsSymbol = metrics.addResource("{symbol}");
    const metricsSymbolLatest = metricsSymbol.addResource("latest");
    const metricsSymbolHistorical = metricsSymbol.addResource("historical");
    const metricsSymbolHistoricalNvt =
      metricsSymbolHistorical.addResource("nvt");
    const metricsSymbolHistoricalSharpe =
      metricsSymbolHistorical.addResource("sharpe");
    const metricsSymbolHistoricalStock =
      metricsSymbolHistorical.addResource("stock-to-flow");

    const metricsAssetImpliedyield = metricsSymbol.addResource("implied-yield");
    const metricsAssetImpliedyieldLatest =
      metricsAssetImpliedyield.addResource("latest");
    const metricsInstrumentImpliedyieldHistorical =
      metricsAssetImpliedyield.addResource("historical");

    const rankings = market.addResource("rankings");

    const metricsAssetSupply = metricsSymbol.addResource("supply");
    const metricsAssetSupplyLatest = metricsAssetSupply.addResource("latest");
    const metricsAssetSupplyHistorical =
      metricsAssetSupply.addResource("historical");

    const tokens = market.addResource("tokens");
    const tokensPrices = tokens.addResource("prices");
    const tokensPricesHash = tokensPrices.addResource("{hash}");
    const tokensPricesHashLatest = tokensPricesHash.addResource("latest");
    const tokensPricesHashHistorical =
      tokensPricesHash.addResource("historical");

    metricsSymbolLatest.addMethod("GET", metricsLambdaIntegrationConfig);
    metricsSymbolHistoricalNvt.addMethod("GET", metricsLambdaIntegrationConfig);
    metricsSymbolHistoricalSharpe.addMethod(
      "GET",
      metricsLambdaIntegrationConfig
    );
    metricsSymbolHistoricalStock.addMethod(
      "GET",
      metricsLambdaIntegrationConfig
    );
    metricsAssetImpliedyieldLatest.addMethod(
      "GET",
      metricsLambdaIntegrationConfig
    );
    metricsInstrumentImpliedyieldHistorical.addMethod(
      "GET",
      metricsLambdaIntegrationConfig
    );

    rankings.addMethod("GET", metricsLambdaIntegrationConfig);

    metricsAssetSupplyLatest.addMethod("GET", metricsLambdaIntegrationConfig);
    metricsAssetSupplyHistorical.addMethod(
      "GET",
      metricsLambdaIntegrationConfig
    );
    tokensPricesHashLatest.addMethod("GET", metricsLambdaIntegrationConfig);
    tokensPricesHashHistorical.addMethod("GET", metricsLambdaIntegrationConfig);
  }
}
