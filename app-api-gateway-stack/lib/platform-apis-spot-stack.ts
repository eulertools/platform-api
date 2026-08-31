import { Duration, Fn, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaIntegration, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { NodeJsLambdaConstruct } from "./constructs/node-js-lambda-construct";
import { Effect, ServicePrincipal } from "aws-cdk-lib/aws-iam";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Code } from "aws-cdk-lib/aws-lambda";
import * as route53targets from "aws-cdk-lib/aws-route53-targets";
import * as ssm from "aws-cdk-lib/aws-ssm";

interface AppStackProps extends StackProps {
  hostedZone: string;
}

export class PlatformApiSpotStack extends Stack {
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

    const restApi = new LambdaRestApi(this, `platform-apis-spot`, {
      handler: handler,
      description: "Platform API Spot",
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
      restApiName: "platform-apis-spot",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api-spot", {
      domainName: `spot.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "spot.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisSpotHandler = new NodeJsLambdaConstruct(
      this,
      "spot-apis-lambda-construct",
      {
        functionName: "spot",
        description: `Create Platform Api spot apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisSpotHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const spotLambdaIntegrationConfig = new LambdaIntegration(
      platformApisSpotHandler.lambdaFunc
    );

    const platformApisSpotWapResourcesHandler = new NodeJsLambdaConstruct(
      this,
      "spot-wap-resources-apis-lambda-construct",
      {
        functionName: "spot-wap-resources",
        description: `Create Platform Api spot apis lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisSpotWapResourcesHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const spotWapResourcesLambdaIntegrationConfig = new LambdaIntegration(
      platformApisSpotWapResourcesHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");
    const marketExchanges = market.addResource("exchanges");
    const marketPairs = market.addResource("pairs");
    const marketSpot = market.addResource("spot");
    const marketSpotExchanges = marketSpot.addResource("exchanges");
    const marketSpotExchangesReference =
      marketSpotExchanges.addResource("reference");

    const marketSpotVwap = marketSpot.addResource("vwap");
    const marketSpotVwapAssets = marketSpotVwap.addResource("assets");
    const marketSpotVwapAssetsInformation =
      marketSpotVwapAssets.addResource("information");
    const marketSpotVwapAssetsAsset =
      marketSpotVwapAssets.addResource("{asset}");
    const marketSpotVwapAssetsAssetLatest =
      marketSpotVwapAssetsAsset.addResource("latest");
    const marketSpotVwapAssetsAssetHistorical =
      marketSpotVwapAssetsAsset.addResource("historical");

    const marketSpotVwapPairs = marketSpotVwap.addResource("pairs");
    const marketSpotVwapPairsInformation =
      marketSpotVwapPairs.addResource("information");
    const marketSpotVwapPairsPair = marketSpotVwapPairs.addResource("{pair}");
    const marketSpotVwapPairsPairLatest =
      marketSpotVwapPairsPair.addResource("latest");
    const marketSpotVwapPairsPairHistorical =
      marketSpotVwapPairsPair.addResource("historical");

    const marketSpotOhlcv = marketSpot.addResource("ohlcv");
    const marketSpotOhlcvInformation =
      marketSpotOhlcv.addResource("information");
    const marketSpotOhlcvPair = marketSpotOhlcv.addResource("{pair}");
    const marketSpotOhlcvPairLatest = marketSpotOhlcvPair.addResource("latest");
    const marketSpotOhlcvPairHistorical =
      marketSpotOhlcvPair.addResource("historical");

    const marketSpotOrderBookEvents =
      marketSpot.addResource("order-book-events");
    const marketSpotOrderBookEventsPair =
      marketSpotOrderBookEvents.addResource("{pair}");
    const marketSpotOrderBookEventsPairHistorical =
      marketSpotOrderBookEventsPair.addResource("historical");

    const marketSpotOrderBookSnapshots = marketSpot.addResource(
      "order-book-snapshots"
    );
    const marketSpotOrderBookSnapshotsPair =
      marketSpotOrderBookSnapshots.addResource("{pair}");
    const marketSpotOrderBookSnapshotsPairHistorical =
      marketSpotOrderBookSnapshotsPair.addResource("historical");

    const marketSpotPrices = marketSpot.addResource("prices");
    const marketSpotPricesAssets = marketSpotPrices.addResource("assets");
    const marketSpotPricesAssetsInformation =
      marketSpotPricesAssets.addResource("information");
    const marketSpotPricesAssetsAsset =
      marketSpotPricesAssets.addResource("{asset}");
    const marketSpotPricesAssetsAssetLatest =
      marketSpotPricesAssetsAsset.addResource("latest");
    const marketSpotPricesAssetsAssetHistorical =
      marketSpotPricesAssetsAsset.addResource("historical");

    const marketSpotPricesPairs = marketSpotPrices.addResource("pairs");
    const marketSpotPricesPairsInformation =
      marketSpotPricesPairs.addResource("information");
    const marketSpotPricesPairsPair =
      marketSpotPricesPairs.addResource("{pair}");
    const marketSpotPricesPairsPairLatest =
      marketSpotPricesPairsPair.addResource("latest");
    const marketSpotPricesPairsPairHistorical =
      marketSpotPricesPairsPair.addResource("historical");

    const marketSpotTickers = marketSpot.addResource("tickers");
    const marketSpotTickersInformation =
      marketSpotTickers.addResource("information");
    const marketSpotTickersPairs = marketSpotTickers.addResource("{pair}");
    const marketSpotTickersPairsLatest =
      marketSpotTickersPairs.addResource("latest");
    const marketSpotTickersPairsHistorical =
      marketSpotTickersPairs.addResource("historical");

    const marketSpotTraders = marketSpot.addResource("trades");
    const marketSpotTradersInformation =
      marketSpotTraders.addResource("information");
    const marketSpotTradersPairs = marketSpotTraders.addResource("{pairs}");
    const marketSpotTradersPairsHistorical =
      marketSpotTradersPairs.addResource("historical");

    const marketSpotTwap = marketSpot.addResource("twap");
    const marketSpotTwapAssets = marketSpotTwap.addResource("assets");
    const marketSpotTwapAssetsInformation =
      marketSpotTwapAssets.addResource("information");
    const marketSpotTwapAssetsAsset =
      marketSpotTwapAssets.addResource("{asset}");
    const marketSpotTwapAssetsAssetLatest =
      marketSpotTwapAssetsAsset.addResource("latest");
    const marketSpotTwapAssetsAssetHistorical =
      marketSpotTwapAssetsAsset.addResource("historical");

    const marketSpotTwapPairs = marketSpotTwap.addResource("pairs");
    const marketSpotTwapPairsInformation =
      marketSpotTwapPairs.addResource("information");
    const marketSpotTwapPairsPair = marketSpotTwapPairs.addResource("{pair}");
    const marketSpotTwapPairsPairLatest =
      marketSpotTwapPairsPair.addResource("latest");
    const marketSpotTwapPairsPairHistorical =
      marketSpotTwapPairsPair.addResource("historical");

    marketExchanges.addMethod("GET", spotLambdaIntegrationConfig);
    marketPairs.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotExchangesReference.addMethod("GET", spotLambdaIntegrationConfig);

    marketSpotOhlcvInformation.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotOhlcvPairLatest.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotOhlcvPairHistorical.addMethod("GET", spotLambdaIntegrationConfig);

    marketSpotOrderBookEventsPairHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotOrderBookSnapshotsPairHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesAssetsInformation.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesAssetsAssetLatest.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesAssetsAssetHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesPairsInformation.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesPairsPairLatest.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );
    marketSpotPricesPairsPairHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );

    marketSpotTickersInformation.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotTickersPairsLatest.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotTickersPairsHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );

    marketSpotTradersInformation.addMethod("GET", spotLambdaIntegrationConfig);
    marketSpotTradersPairsHistorical.addMethod(
      "GET",
      spotLambdaIntegrationConfig
    );

    marketSpotVwapAssetsInformation.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotVwapAssetsAssetLatest.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotVwapAssetsAssetHistorical.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );

    marketSpotVwapPairsInformation.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotVwapPairsPairLatest.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotVwapPairsPairHistorical.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );

    marketSpotTwapAssetsInformation.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotTwapAssetsAssetLatest.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotTwapAssetsAssetHistorical.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );

    marketSpotTwapPairsInformation.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotTwapPairsPairLatest.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
    marketSpotTwapPairsPairHistorical.addMethod(
      "GET",
      spotWapResourcesLambdaIntegrationConfig
    );
  }
}
