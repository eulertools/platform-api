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

export class PlatformApiOptionsStack extends Stack {
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

    const publicZone = route53.HostedZone.fromLookup(this, "public-zone", {
      domainName: hostedZone,
      privateZone: false,
    });

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

    const restApi = new LambdaRestApi(this, `platform-apis-options`, {
      handler: handler,
      description: "Platform API Options",
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
      restApiName: "platform-apis-options",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api-options", {
      domainName: `options.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "options.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisOptionsHandler = new NodeJsLambdaConstruct(
      this,
      "options-apis-lambda-construct",
      {
        functionName: "options",
        description: `Create Platform Api options apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisOptionsHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const optionsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisOptionsHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");
    const options = market.addResource("options");
    const optionsExchanges = options.addResource("exchanges");
    const optionsExchangesInformation =
      optionsExchanges.addResource("information");
    const optionsExchangesReference = optionsExchanges.addResource("reference");

    const optionsLiquidations = options.addResource("liquidations");
    const optionsLiquidationsInformation =
      optionsLiquidations.addResource("information");
    const optionsLiquidationsInstrument =
      optionsLiquidations.addResource("{instrument}");
    const optionsLiquidationsInstrumentLatest =
      optionsLiquidationsInstrument.addResource("latest");
    const optionsLiquidationsInstrumentHistorical =
      optionsLiquidationsInstrument.addResource("historical");

    const optionsOhlcv = options.addResource("ohlcv");
    const optionsOhlcvInformation = optionsOhlcv.addResource("information");
    const optionsOhlcvInstrument = optionsOhlcv.addResource("{instrument}");
    const optionsOhlcvInstrumentLatest =
      optionsOhlcvInstrument.addResource("latest");
    const optionsOhlcvInstrumentHistorical =
      optionsOhlcvInstrument.addResource("historical");

    const optionsOpenInterest = options.addResource("open-interest");
    const optionsOpenInterestInformation =
      optionsOpenInterest.addResource("information");
    const optionsOpenInterestInstrument =
      optionsOpenInterest.addResource("{instrument}");
    const optionsOpenInterestInstrumentLatest =
      optionsOpenInterestInstrument.addResource("latest");
    const optionsOpenInterestInstrumentHistorical =
      optionsOpenInterestInstrument.addResource("historical");

    const optionsOrderBookEvents = options.addResource("order-book-events");
    const optionsOrderBookEventsInformation =
      optionsOrderBookEvents.addResource("information");
    const optionsOrderBookEventsInstrument =
      optionsOrderBookEvents.addResource("{instrument}");
    const optionsOrderBookEventsInstrumentHistorical =
      optionsOrderBookEventsInstrument.addResource("historical");

    const optionsOrderBookSnapshots = options.addResource(
      "order-book-snapshots"
    );
    const optionsOrderBookSnapshotsInformation =
      optionsOrderBookSnapshots.addResource("information");
    const optionsOrderBookSnapshotsInstrument =
      optionsOrderBookSnapshots.addResource("{instrument}");
    const optionsOrderBookSnapshotsInstrumentHistorical =
      optionsOrderBookSnapshotsInstrument.addResource("historical");

    const optionsTickers = options.addResource("tickers");
    const optionsTickersInformation = optionsTickers.addResource("information");
    const optionsTickersInstrument = optionsTickers.addResource("{instrument}");
    const optionsTickersInstrumentLatest =
      optionsTickersInstrument.addResource("latest");
    const optionsTickersInstrumentHistorical =
      optionsTickersInstrument.addResource("historical");

    const optionsTraders = options.addResource("trades");
    const optionsTradersInformation = optionsTraders.addResource("information");
    const optionsTradersInstrument = optionsTraders.addResource("{instrument}");
    const optionsTradersInstrumentHistorical =
      optionsTradersInstrument.addResource("historical");

    optionsExchangesInformation.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsExchangesReference.addMethod("GET", optionsLambdaIntegrationConfig);

    optionsLiquidationsInformation.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsLiquidationsInstrumentLatest.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsLiquidationsInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsOhlcvInformation.addMethod("GET", optionsLambdaIntegrationConfig);
    optionsOhlcvInstrumentLatest.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsOhlcvInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsOpenInterestInformation.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsOpenInterestInstrumentLatest.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsOpenInterestInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsOrderBookEventsInformation.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsOrderBookEventsInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsOrderBookSnapshotsInformation.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsOrderBookSnapshotsInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsTickersInformation.addMethod("GET", optionsLambdaIntegrationConfig);
    optionsTickersInstrumentLatest.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
    optionsTickersInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );

    optionsTradersInformation.addMethod("GET", optionsLambdaIntegrationConfig);
    optionsTradersInstrumentHistorical.addMethod(
      "GET",
      optionsLambdaIntegrationConfig
    );
  }
}
