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

export class PlatformApiDefiDexStack extends Stack {
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

    const restApi = new LambdaRestApi(this, `platform-apis-defi-dex`, {
      handler: handler,
      description: "Platform API Defi Dex",
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
      restApiName: "platform-apis-defi-dex",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api", {
      domainName: `defidex.api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "defidex.api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisDefiDexHandler = new NodeJsLambdaConstruct(
      this,
      "defi-dex-lambda-construct",
      {
        functionName: "defi-dex",
        description: `Create Platform Api defi-dex lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisDefiDexHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const defiDexLambdaIntegrationConfig = new LambdaIntegration(
      platformApisDefiDexHandler.lambdaFunc
    );

    const platformApisDefiDexWapResourcesHandler = new NodeJsLambdaConstruct(
      this,
      "defi-dex-wap-resources-lambda-construct",
      {
        functionName: "defi-dex-wap-resources",
        description: `Create Platform Api defi-dex-wap-resources- lambda handler`,
        restApiId: restApi.restApiId,
      }
    );

    platformApisDefiDexWapResourcesHandler.lambdaFunc.grantInvoke(
      new ServicePrincipal("apigateway.amazonaws.com")
    );

    const defiDexWapResourcesLambdaIntegrationConfig = new LambdaIntegration(
      platformApisDefiDexWapResourcesHandler.lambdaFunc
    );

    const market = restApi.root.addResource("market");
    const defi = market.addResource("defi");
    const lending = defi.addResource("lending");
    const exchanges = lending.addResource("exchanges");
    const information = exchanges.addResource("information");

    const exchangesExchange = exchanges.addResource("{exchange}");
    const exchangesExchangeLatest = exchangesExchange.addResource("latest");
    const exchangesExchangeHistorical =
      exchangesExchange.addResource("historical");

    const liquidity = defi.addResource("liquidity");
    const liquidityInformation = liquidity.addResource("information");
    const liquidityPool = liquidity.addResource("{pool}");
    const liquidityPoolLatest = liquidityPool.addResource("latest");
    const liquidityPoolHistorical = liquidityPool.addResource("historical");

    const ohlcv = defi.addResource("ohlcv");
    const ohlcvInformation = ohlcv.addResource("information");
    const ohlcvPool = ohlcv.addResource("{pool}");
    const ohlcvPoolLatest = ohlcvPool.addResource("latest");
    const ohlcvPoolHistorical = ohlcvPool.addResource("historical");

    const defiMetrics = defi.addResource("metrics");
    const defiMetricsExchanges = defiMetrics.addResource("exchanges");
    const defiMetricsExchangesExchange =
      defiMetricsExchanges.addResource("{exchange}");
    const defiMetricsExchangesExchangeLatest =
      defiMetricsExchangesExchange.addResource("latest");
    const defiMetricsExchangesExchangeHistorical =
      defiMetricsExchangesExchange.addResource("historical");

    const defiMetricsExchangesExchangeAssets =
      defiMetricsExchangesExchange.addResource("assets");
    const defiMetricsExchangesExchangeAssetsAsset =
      defiMetricsExchangesExchangeAssets.addResource("{asset}");
    const defiMetricsExchangesExchangeAssetsAssetLatest =
      defiMetricsExchangesExchangeAssetsAsset.addResource("latest");
    const defiMetricsExchangesExchangeAssetsAssetHistorical =
      defiMetricsExchangesExchangeAssetsAsset.addResource("historical");

    const defiMetricsExchangesExchangePairs =
      defiMetricsExchangesExchange.addResource("pairs");
    const defiMetricsExchangesExchangePairsPair =
      defiMetricsExchangesExchangePairs.addResource("{pair}");
    const defiMetricsExchangesExchangePairsPairLatest =
      defiMetricsExchangesExchangePairsPair.addResource("latest");
    const defiMetricsExchangesExchangePairsPairHistorical =
      defiMetricsExchangesExchangePairsPair.addResource("historical");

    const defiPrices = defi.addResource("prices");
    const defiPricesAsset = defiPrices.addResource("asset");
    const defiPricesAssetInformation =
      defiPricesAsset.addResource("information");
    const defiPricesAssetsAsset = defiPricesAsset.addResource("{asset}");
    const defiPricesAssetsAssetLatest =
      defiPricesAssetsAsset.addResource("latest");
    const defiPricesAssetsAssetHistorical =
      defiPricesAssetsAsset.addResource("historical");

    const defiPairs = defiPrices.addResource("pairs");
    const defiPairsInformation = defiPairs.addResource("information");

    const defiPairsBases = defiPairs.addResource("bases");
    const defiPairsBasesBase = defiPairsBases.addResource("{base}");
    const defiPairsBasesBaseQuotes = defiPairsBasesBase.addResource("quotes");
    const defiPairsBasesBaseQuotesQuote =
      defiPairsBasesBaseQuotes.addResource("{quote}");
    const defiPairsBasesBaseQuotesQuoteLatest =
      defiPairsBasesBaseQuotesQuote.addResource("latest");
    const defiPairsBasesBaseQuotesQuoteHistorical =
      defiPairsBasesBaseQuotesQuote.addResource("historical");

    const defiTrades = defi.addResource("trades");
    const defiTradesInformation = defiTrades.addResource("information");
    const defiTradesPool = defiTrades.addResource("{pool}");
    const defiTradesPoolHistorical = defiTradesPool.addResource("historical");

    const defiTwap = defi.addResource("twap");
    const defiTwapAsset = defiTwap.addResource("asset");
    const defiTwapAssetInformation = defiTwapAsset.addResource("information");
    const defiTwapAssetsAsset = defiTwapAsset.addResource("{asset}");
    const defiTwapAssetsAssetLatest = defiTwapAssetsAsset.addResource("latest");
    const defiTwapAssetsAssetHistorical =
      defiTwapAssetsAsset.addResource("historical");

    const defiTwapPairs = defiTwap.addResource("pairs");
    const defiTwapPairsInformation = defiTwapPairs.addResource("information");
    const defiTwapPairsBases = defiTwapPairs.addResource("bases");
    const defiTwapPairsBasesBase = defiTwapPairsBases.addResource("{base}");
    const defiTwapPairsBasesBaseQuotes =
      defiTwapPairsBasesBase.addResource("quotes");
    const defiTwapPairsBasesBaseQuotesQuote =
      defiTwapPairsBasesBaseQuotes.addResource("{quote}");
    const defiTwapPairsBasesBaseQuotesQuoteLatest =
      defiTwapPairsBasesBaseQuotesQuote.addResource("latest");
    const defiTwapPairsBasesBaseQuotesQuoteHistorical =
      defiTwapPairsBasesBaseQuotesQuote.addResource("historical");

    const defiVwap = defi.addResource("vwap");
    const defiVwapAsset = defiVwap.addResource("asset");
    const defiVwapAssetInformation = defiVwapAsset.addResource("information");
    const defiVwapAssetsAsset = defiVwapAsset.addResource("{asset}");
    const defiVwapAssetsAssetLatest = defiVwapAssetsAsset.addResource("latest");
    const defiVwapAssetsAssetHistorical =
      defiVwapAssetsAsset.addResource("historical");

    const defiVwapPairs = defiVwap.addResource("pairs");
    const defiVwapPairsInformation = defiVwapPairs.addResource("information");
    const defiVwapPairsBases = defiVwapPairs.addResource("bases");
    const defiVwapPairsBasesBase = defiVwapPairsBases.addResource("{base}");
    const defiVwapPairsBasesBaseQuotes =
      defiVwapPairsBasesBase.addResource("quotes");
    const defiVwapPairsBasesBaseQuotesQuote =
      defiVwapPairsBasesBaseQuotes.addResource("{quote}");
    const defiVwapPairsBasesBaseQuotesQuoteLatest =
      defiVwapPairsBasesBaseQuotesQuote.addResource("latest");
    const defiVwapPairsBasesBaseQuotesQuoteHistorical =
      defiVwapPairsBasesBaseQuotesQuote.addResource("historical");

    information.addMethod("GET", defiDexLambdaIntegrationConfig);
    exchangesExchangeLatest.addMethod("GET", defiDexLambdaIntegrationConfig);
    exchangesExchangeHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    liquidityInformation.addMethod("GET", defiDexLambdaIntegrationConfig);
    liquidityPoolLatest.addMethod("GET", defiDexLambdaIntegrationConfig);
    liquidityPoolHistorical.addMethod("GET", defiDexLambdaIntegrationConfig);

    ohlcvInformation.addMethod("GET", defiDexLambdaIntegrationConfig);
    ohlcvPoolLatest.addMethod("GET", defiDexLambdaIntegrationConfig);
    ohlcvPoolHistorical.addMethod("GET", defiDexLambdaIntegrationConfig);

    defiMetricsExchangesExchangeLatest.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );
    defiMetricsExchangesExchangeHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    defiMetricsExchangesExchangeAssetsAssetLatest.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );
    defiMetricsExchangesExchangeAssetsAssetHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    defiMetricsExchangesExchangePairsPairLatest.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );
    defiMetricsExchangesExchangePairsPairHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    defiPricesAssetInformation.addMethod("GET", defiDexLambdaIntegrationConfig);
    defiPricesAssetsAssetLatest.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );
    defiPricesAssetsAssetHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    defiPairsInformation.addMethod("GET", defiDexLambdaIntegrationConfig);

    defiPairsBasesBaseQuotesQuoteLatest.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );
    defiPairsBasesBaseQuotesQuoteHistorical.addMethod(
      "GET",
      defiDexLambdaIntegrationConfig
    );

    defiTradesInformation.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiTradesPoolHistorical.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );

    defiTwapAssetInformation.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiTwapAssetsAssetLatest.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiTwapAssetsAssetHistorical.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );

    defiTwapPairsInformation.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiTwapPairsBasesBaseQuotesQuoteLatest.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiTwapPairsBasesBaseQuotesQuoteHistorical.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );

    defiVwapAssetInformation.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiVwapAssetsAssetLatest.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiVwapAssetsAssetHistorical.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );

    defiVwapPairsInformation.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiVwapPairsBasesBaseQuotesQuoteLatest.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
    defiVwapPairsBasesBaseQuotesQuoteHistorical.addMethod(
      "GET",
      defiDexWapResourcesLambdaIntegrationConfig
    );
  }
}
