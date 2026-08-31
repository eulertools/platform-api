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

export class PlatformApiSwapStack extends Stack {
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

    const restApi = new LambdaRestApi(this, `platform-apis-swap`, {
      handler: handler,
      description: "Platform API Swap",
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
      restApiName: "platform-apis-swap",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api-swap", {
      domainName: `swap.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "swap.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisSwapHandler = new NodeJsLambdaConstruct(
      this,
      "swap-apis-lambda-construct",
      {
        functionName: "swap",
        description: `Create Platform Api swap apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisSwapHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const swapsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisSwapHandler.lambdaFunc
    );

    const platformApisSwapOrderEventsHandler = new NodeJsLambdaConstruct(
      this,
      "swap-apis-order-events-lambda-construct",
      {
        functionName: "swap-order-events",
        description: `Create Platform Api Order Events lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisSwapOrderEventsHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const swapsOrderEventsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisSwapOrderEventsHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");
    const swaps = market.addResource("swaps");
    const swapsExchanges = swaps.addResource("exchanges");
    const swapsExchangesInformation = swapsExchanges.addResource("information");

    const swapsExchangesReference = swapsExchanges.addResource("reference");

    const swapsFundingRates = swaps.addResource("funding-rates");
    const swapsFundingRatesInformation =
      swapsFundingRates.addResource("information");
    const swapsFundingRatesInstrument =
      swapsFundingRates.addResource("{instrument}");
    const swapsFundingRatesInstrumentLatest =
      swapsFundingRatesInstrument.addResource("latest");
    const swapsFundingRatesInstrumentHistorical =
      swapsFundingRatesInstrument.addResource("historical");

    const swapsInsuranceFund = swaps.addResource("insurance-fund");
    const swapsInsuranceFundInformation =
      swapsInsuranceFund.addResource("information");
    const swapsInsuranceFundInstrument =
      swapsInsuranceFund.addResource("{instrument}");
    const swapsInsuranceFundInstrumentLatest =
      swapsInsuranceFundInstrument.addResource("latest");
    const swapsInsuranceFundInstrumentHistorical =
      swapsInsuranceFundInstrument.addResource("historical");

    const swapsLiquidations = swaps.addResource("liquidations");
    const swapsLiquidationsInformation =
      swapsLiquidations.addResource("information");
    const swapsLiquidationsInstrument =
      swapsLiquidations.addResource("{instrument}");
    const swapsLiquidationsInstrumentHistorical =
      swapsLiquidationsInstrument.addResource("historical");

    const swapsOhlcv = swaps.addResource("ohlcv");
    const swapsOhlcvInformation = swapsOhlcv.addResource("information");
    const swapsOhlcvInstrument = swapsOhlcv.addResource("{instrument}");
    const swapsOhlcvInstrumentLatest =
      swapsOhlcvInstrument.addResource("latest");
    const swapsOhlcvInstrumentHistorical =
      swapsOhlcvInstrument.addResource("historical");

    const swapsOpenInterest = swaps.addResource("open-interest");
    const swapsOpenInterestInformation =
      swapsOpenInterest.addResource("information");
    const swapsOpenInterestInstrument =
      swapsOpenInterest.addResource("{instrument}");
    const swapsOpenInterestInstrumentLatest =
      swapsOpenInterestInstrument.addResource("latest");
    const swapsOpenInterestInstrumentHistorical =
      swapsOpenInterestInstrument.addResource("historical");

    const swapsOrderBookEvents = swaps.addResource("order-book-events");
    const swapsOrderBookEventsInformation =
      swapsOrderBookEvents.addResource("information");
    const swapsOrderBookEventsInstrument =
      swapsOrderBookEvents.addResource("{instrument}");
    const swapsOrderBookEventsInstrumentHistorical =
      swapsOrderBookEventsInstrument.addResource("historical");

    const swapsOrderBookSnapshots = swaps.addResource("order-book-snapshots");
    const swapsOrderBookSnapshotsInformation =
      swapsOrderBookSnapshots.addResource("information");
    const swapsOrderBookSnapshotsInstrument =
      swapsOrderBookSnapshots.addResource("{instrument}");
    const swapsOrderBookSnapshotsInstrumentHistorical =
      swapsOrderBookSnapshotsInstrument.addResource("historical");

    const swapsTickers = swaps.addResource("tickers");
    const swapsTickersInformation = swapsTickers.addResource("information");
    const swapsTickersInstrument = swapsTickers.addResource("{instrument}");
    const swapsTickersInstrumentLatest =
      swapsTickersInstrument.addResource("latest");
    const swapsTickersInstrumentHistorical =
      swapsTickersInstrument.addResource("historical");

    const swapsTraders = swaps.addResource("trades");
    const swapsTradersInformation = swapsTraders.addResource("information");
    const swapsTradersInstrument = swapsTraders.addResource("{instrument}");
    const swapsTradersInstrumentHistorical =
      swapsTradersInstrument.addResource("historical");

    swapsExchangesInformation.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsExchangesReference.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsFundingRatesInformation.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsFundingRatesInstrumentLatest.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );
    swapsFundingRatesInstrumentHistorical.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );

    swapsInsuranceFundInformation.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );
    swapsInsuranceFundInstrumentLatest.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );
    swapsInsuranceFundInstrumentHistorical.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );

    swapsLiquidationsInformation.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsLiquidationsInstrumentHistorical.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );

    swapsOhlcvInformation.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsOhlcvInstrumentLatest.addMethod("GET", swapsLambdaIntegrationConfig);
    swapsOhlcvInstrumentHistorical.addMethod(
      "GET",
      swapsLambdaIntegrationConfig
    );

    swapsOpenInterestInformation.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsOpenInterestInstrumentLatest.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsOpenInterestInstrumentHistorical.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );

    swapsOrderBookEventsInformation.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsOrderBookEventsInstrumentHistorical.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );

    swapsOrderBookSnapshotsInformation.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsOrderBookSnapshotsInstrumentHistorical.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );

    swapsTickersInformation.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsTickersInstrumentLatest.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsTickersInstrumentHistorical.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );

    swapsTradersInformation.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
    swapsTradersInstrumentHistorical.addMethod(
      "GET",
      swapsOrderEventsLambdaIntegrationConfig
    );
  }
}
