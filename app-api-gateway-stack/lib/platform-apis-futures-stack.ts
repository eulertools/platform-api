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

export class PlatformApiFuturesStack extends Stack {
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

    const restApi = new LambdaRestApi(this, `platform-apis-futures`, {
      handler: handler,
      description: "Platform API Futures",
      deployOptions: {
        stageName: process.env.ENV,
      },
      defaultCorsPreflightOptions: {
        allowHeaders: ["Content-Type", "Authorization"],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: [
          "http://localhost:8080",
          `https://workflows.${hostedZone}`,
        ],
      },
      restApiName: "platform-apis-futures",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api-futures", {
      domainName: `futures.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "futures.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisFuturesHandler = new NodeJsLambdaConstruct(
      this,
      "futures-apis-lambda-construct",
      {
        functionName: "futures",
        description: `Create Platform Api futures apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisFuturesHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const futuresLambdaIntegrationConfig = new LambdaIntegration(
      platformApisFuturesHandler.lambdaFunc
    );

    const platformApisFuturesOrderEventsHandler = new NodeJsLambdaConstruct(
      this,
      "futures-apis-order-events-lambda-construct",
      {
        functionName: "futures-order-events",
        description: `Create Platform Api futures apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisFuturesOrderEventsHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const futuresOrderEventsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisFuturesOrderEventsHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");
    const futures = market.addResource("futures");
    const futuresExchanges = futures.addResource("exchanges");
    const futuresExchangesInformation =
      futuresExchanges.addResource("information");

    const futuresFundingRates = futures.addResource("funding-rates");
    const futuresFundingRatesInformation =
      futuresFundingRates.addResource("information");
    const futuresFundingRatesInstrument =
      futuresFundingRates.addResource("{instrument}");
    const futuresFundingRatesInstrumentLatest =
      futuresFundingRatesInstrument.addResource("latest");
    const futuresFundingRatesInstrumentHistorical =
      futuresFundingRatesInstrument.addResource("historical");

    const futuresExchangesReference = futuresExchanges.addResource("reference");

    const futuresInsuranceFund = futures.addResource("insurance-fund");
    const futuresInsuranceFundInformation =
      futuresInsuranceFund.addResource("information");
    const futuresInsuranceFundInstrument =
      futuresInsuranceFund.addResource("{instrument}");
    const futuresInsuranceFundInstrumentLatest =
      futuresInsuranceFundInstrument.addResource("latest");
    const futuresInsuranceFundInstrumentHistorical =
      futuresInsuranceFundInstrument.addResource("historical");

    const futuresLiquidations = futures.addResource("liquidations");
    const futuresLiquidationsInformation =
      futuresLiquidations.addResource("information");
    const futuresLiquidationsInstrument =
      futuresLiquidations.addResource("{instrument}");
    const futuresLiquidationsInstrumentLatest =
      futuresLiquidationsInstrument.addResource("latest");
    const futuresLiquidationsInstrumentHistorical =
      futuresLiquidationsInstrument.addResource("historical");

    const futuresLongShortRatio = futures.addResource("long-short-ratio");
    const futuresLongShortRatioInformation =
      futuresLongShortRatio.addResource("information");
    const futuresLongShortRatioInstrument =
      futuresLongShortRatio.addResource("{instrument}");
    const futuresLongShortRatioInstrumentLatest =
      futuresLongShortRatioInstrument.addResource("latest");
    const futuresLongShortRatioInstrumentHistorical =
      futuresLongShortRatioInstrument.addResource("historical");

    const futuresOhlcv = futures.addResource("ohlcv");
    const futuresOhlcvInformation = futuresOhlcv.addResource("information");
    const futuresOhlcvInstrument = futuresOhlcv.addResource("{instrument}");
    const futuresOhlcvInstrumentLatest =
      futuresOhlcvInstrument.addResource("latest");
    const futuresOhlcvInstrumentHistorical =
      futuresOhlcvInstrument.addResource("historical");

    const futuresOpenInterest = futures.addResource("open-interest");
    const futuresOpenInterestInformation =
      futuresOpenInterest.addResource("information");
    const futuresOpenInterestInstrument =
      futuresOpenInterest.addResource("{instrument}");
    const futuresOpenInterestInstrumentLatest =
      futuresOpenInterestInstrument.addResource("latest");
    const futuresOpenInterestInstrumentHistorical =
      futuresOpenInterestInstrument.addResource("historical");

    const futuresOrderBookEvents = futures.addResource("order-book-events");
    const futuresOrderBookEventsInformation =
      futuresOrderBookEvents.addResource("information");
    const futuresOrderBookEventsInstrument =
      futuresOrderBookEvents.addResource("{instrument}");
    const futuresOrderBookEventsInstrumentHistorical =
      futuresOrderBookEventsInstrument.addResource("historical");

    const futuresOrderBookSnapshots = futures.addResource(
      "order-book-snapshots"
    );
    const futuresOrderBookSnapshotsInformation =
      futuresOrderBookSnapshots.addResource("information");
    const futuresOrderBookSnapshotsInstrument =
      futuresOrderBookSnapshots.addResource("{instrument}");
    const futuresOrderBookSnapshotsInstrumentHistorical =
      futuresOrderBookSnapshotsInstrument.addResource("historical");

    const futuresTickers = futures.addResource("tickers");
    const futuresTickersInformation = futuresTickers.addResource("information");
    const futuresTickersInstrument = futuresTickers.addResource("{instrument}");
    const futuresTickersInstrumentLatest =
      futuresTickersInstrument.addResource("latest");
    const futuresTickersInstrumentHistorical =
      futuresTickersInstrument.addResource("historical");

    const futuresTraders = futures.addResource("trades");
    const futuresTradersInformation = futuresTraders.addResource("information");
    const futuresTradersInstrument = futuresTraders.addResource("{instrument}");
    const futuresTradersInstrumentHistorical =
      futuresTradersInstrument.addResource("historical");

    futuresExchangesInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresExchangesReference.addMethod("GET", futuresLambdaIntegrationConfig);
    futuresFundingRatesInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresFundingRatesInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresFundingRatesInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresInsuranceFundInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresInsuranceFundInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresInsuranceFundInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresLiquidationsInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresLiquidationsInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresLiquidationsInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresLongShortRatioInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresLongShortRatioInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresLongShortRatioInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresOhlcvInformation.addMethod("GET", futuresLambdaIntegrationConfig);
    futuresOhlcvInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresOhlcvInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresOpenInterestInformation.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresOpenInterestInstrumentLatest.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );
    futuresOpenInterestInstrumentHistorical.addMethod(
      "GET",
      futuresLambdaIntegrationConfig
    );

    futuresOrderBookEventsInformation.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
    futuresOrderBookEventsInstrumentHistorical.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );

    futuresOrderBookSnapshotsInformation.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
    futuresOrderBookSnapshotsInstrumentHistorical.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );

    futuresTickersInformation.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
    futuresTickersInstrumentLatest.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
    futuresTickersInstrumentHistorical.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );

    futuresTradersInformation.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
    futuresTradersInstrumentHistorical.addMethod(
      "GET",
      futuresOrderEventsLambdaIntegrationConfig
    );
  }
}
