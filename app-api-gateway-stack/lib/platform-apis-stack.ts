import { Duration, Fn, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { LambdaIntegration, LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53targets from "aws-cdk-lib/aws-route53-targets";
import * as iam from "aws-cdk-lib/aws-iam";
import { Effect } from "aws-cdk-lib/aws-iam";
import { Certificate } from "aws-cdk-lib/aws-certificatemanager";
import { NodeJsLambdaConstruct } from "./constructs/node-js-lambda-construct";
import { Code } from "aws-cdk-lib/aws-lambda";
import * as ssm from "aws-cdk-lib/aws-ssm";

interface AppStackProps extends StackProps {
  hostedZone: string;
}

export class PlatformApisStack extends Stack {
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

    const handler = new lambda.Function(this, "platform-api-handler", {
      functionName: "platform-api-handler",
      handler: "handler",
      description:
        "Create subscriptions api that retrieves records from dynamodb",
      code: Code.fromInline(`
        exports.handler = async (event) => {
          console.log('event: ', event)
        };
      `),
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: Duration.minutes(1),
    });

    const restApi = new LambdaRestApi(this, `app-users-api`, {
      handler: handler,
      description: "Platform API",
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
      restApiName: "platform-apis",
      proxy: false,
      policy: apiResourcePolicy,
    });

    restApi.addDomainName("platform-api", {
      domainName: `api.${hostedZone}`,
      certificate: certificate,
    });

    new route53.ARecord(this, "custom-domain-alias-record-subscriptions", {
      recordName: "api",
      zone: publicZone,
      target: route53.RecordTarget.fromAlias(
        new route53targets.ApiGateway(restApi)
      ),
    });

    const platformApisTokensHandler = new NodeJsLambdaConstruct(
      this,
      "tokens-lambda-construct",
      {
        functionName: "tokens",
        description: `Create Platform Api tokens handler`,
        restApiId: restApi.restApiId,
      }
    );

    const platformApisBlocksHandler = new NodeJsLambdaConstruct(
      this,
      "blocks-lambda-construct",
      {
        functionName: "blocks",
        description: `Create Platform Api blocks handler`,
        restApiId: restApi.restApiId,
      }
    );

    const platformApisTransactionsHandler = new NodeJsLambdaConstruct(
      this,
      "transactions-lambda-construct",
      {
        functionName: "transactions",
        description: `Create Platform Api transactions handler`,
        restApiId: restApi.restApiId,
      }
    );

    const platformApisAddressesHandler = new NodeJsLambdaConstruct(
      this,
      "addresses-lambda-construct",
      {
        functionName: "addresses",
        description: `Create Platform Api addresses handler`,
        restApiId: restApi.restApiId,
      }
    );

    const platformApisUnclesHandler = new NodeJsLambdaConstruct(
      this,
      "uncles-lambda-construct",
      {
        functionName: "uncles",
        description: `Create Platform Api uncles handler`,
        restApiId: restApi.restApiId,
      }
    );

    const platformApisContractsHandler = new NodeJsLambdaConstruct(
      this,
      "contracts-lambda-construct",
      {
        functionName: "contracts",
        description: `Create Platform Api contracts handler`,
        restApiId: restApi.restApiId,
      }
    );

    const tokens = restApi.root.addResource("tokens");
    const hash = tokens.addResource("{hash}");
    const holders = hash.addResource("holders");
    const lastest = holders.addResource("latest");
    const historical = holders.addResource("historical");

    const metrics = tokens.addResource("metrics");
    const symbol = metrics.addResource("{symbol}");
    const metricLastest = symbol.addResource("latest");
    const metricHistorical = symbol.addResource("historical");

    const metricVelocity = hash.addResource("velocity");
    const metricVolume = hash.addResource("volume");

    const rankings = tokens.addResource("rankings");
    const rankingsHistorical = rankings.addResource("historical");

    const transfers = hash.addResource("transfers");

    const supplies = hash.addResource("supplies");
    const suppliesLastest = supplies.addResource("latest");
    const suppliesHistorical = supplies.addResource("historical");

    const tokensLambdaIntegrationConfig = new LambdaIntegration(
      platformApisTokensHandler.lambdaFunc
    );

    lastest.addMethod("GET", tokensLambdaIntegrationConfig);
    historical.addMethod("GET", tokensLambdaIntegrationConfig);

    metricLastest.addMethod("GET", tokensLambdaIntegrationConfig);
    metricHistorical.addMethod("GET", tokensLambdaIntegrationConfig);
    metricVelocity.addMethod("GET", tokensLambdaIntegrationConfig);
    metricVolume.addMethod("GET", tokensLambdaIntegrationConfig);

    rankings.addMethod("GET", tokensLambdaIntegrationConfig);
    rankingsHistorical.addMethod("GET", tokensLambdaIntegrationConfig);

    transfers.addMethod("GET", tokensLambdaIntegrationConfig);

    suppliesLastest.addMethod("GET", tokensLambdaIntegrationConfig);
    suppliesHistorical.addMethod("GET", tokensLambdaIntegrationConfig);

    const blocksLambdaIntegrationConfig = new LambdaIntegration(
      platformApisBlocksHandler.lambdaFunc
    );

    const blocks = restApi.root.addResource("blocks");
    const blockId = blocks.addResource("{id}");
    const functions = blockId.addResource("functions");
    const logs = blockId.addResource("logs");
    const transactions = blockId.addResource("transactions");

    const blocksMetrics = blocks.addResource("metrics");
    const blocksMetricsLatest = blocksMetrics.addResource("latest");
    const blocksMetricsHistorical = blocksMetrics.addResource("historical");

    const tokenTransfer = blockId.addResource("token-transfers");

    blocks.addMethod("GET", blocksLambdaIntegrationConfig);
    blockId.addMethod("GET", blocksLambdaIntegrationConfig);
    functions.addMethod("GET", blocksLambdaIntegrationConfig);
    logs.addMethod("GET", blocksLambdaIntegrationConfig);
    transactions.addMethod("GET", blocksLambdaIntegrationConfig);

    blocksMetricsLatest.addMethod("GET", blocksLambdaIntegrationConfig);
    blocksMetricsHistorical.addMethod("GET", blocksLambdaIntegrationConfig);

    tokenTransfer.addMethod("GET", blocksLambdaIntegrationConfig);

    const transactionsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisTransactionsHandler.lambdaFunc
    );

    const transaction = restApi.root.addResource("transactions");
    const transactionHash = transaction.addResource("{hash}");
    const transactionGas = transaction.addResource("gas");
    const transactionpercentiles = transactionGas.addResource("percentiles");
    const transactionPredictions = transactionGas.addResource("predictions");

    const transactionMetrics = transaction.addResource("metrics");
    const transactionMetricsLatest = transactionMetrics.addResource("latest");
    const transactionMetricsHistorical =
      transactionMetrics.addResource("historical");

    const transactionVolume = transaction.addResource("volume");
    const transactionTokenTransfers =
      transactionHash.addResource("token-transfers");

    transaction.addMethod("GET", transactionsLambdaIntegrationConfig);
    transactionHash.addMethod("GET", transactionsLambdaIntegrationConfig);
    transactionpercentiles.addMethod(
      "GET",
      transactionsLambdaIntegrationConfig
    );
    transactionPredictions.addMethod(
      "GET",
      transactionsLambdaIntegrationConfig
    );

    transactionMetricsLatest.addMethod(
      "GET",
      transactionsLambdaIntegrationConfig
    );
    transactionMetricsHistorical.addMethod(
      "GET",
      transactionsLambdaIntegrationConfig
    );

    transactionVolume.addMethod("GET", transactionsLambdaIntegrationConfig);
    transactionTokenTransfers.addMethod(
      "GET",
      transactionsLambdaIntegrationConfig
    );

    const addressesLambdaIntegrationConfig = new LambdaIntegration(
      platformApisAddressesHandler.lambdaFunc
    );

    const addresses = restApi.root.addResource("addresses");
    const addressesHash = addresses.addResource("{hash}");
    const addressesAccountBal = addressesHash.addResource("account-balances");
    const addressesAccountBalLatest = addressesAccountBal.addResource("latest");
    const addressesAccountBalHistorical =
      addressesAccountBal.addResource("historical");

    const addressesHashBalances = addressesHash.addResource("balances");
    const addressesBalances = addresses.addResource("balances");
    const addressesHashFunctions = addressesHash.addResource("functions");
    const addressesHashLogs = addressesHash.addResource("logs");
    const addressesHashConverter = addressesHash.addResource("converter");
    const addressesHashInformation = addressesHash.addResource("information");
    const addressesHashMetadata = addressesHash.addResource("metadata");

    const addressesExtended = addresses.addResource("extended");
    const addressesExtendedAddress = addressesExtended.addResource("{address}");
    const addressesAddressPendingTrxns = addressesHash.addResource(
      "pending-transactions"
    );

    const addressesMetrics = addresses.addResource("metrics");
    const addressesMetricsLatest = addressesMetrics.addResource("latest");

    const addressesHashAdoption = addressesHash.addResource("adoption");
    const addressesHashUsage = addressesHash.addResource("usage");
    const addressesHashTokenBal = addressesHash.addResource("token-balances");
    const addressesHashTokenBalLatest =
      addressesHashTokenBal.addResource("latest");
    const addressesHashTokenBalHistorical =
      addressesHashTokenBal.addResource("historical");

    const addressesHashTokenTransfer =
      addressesHash.addResource("token-transfers");
    const addressesHashTransactions = addressesHash.addResource("transactions");

    addresses.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesAccountBalLatest.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );
    addressesAccountBalHistorical.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );

    addressesHashBalances.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesBalances.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashFunctions.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashLogs.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashConverter.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashInformation.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashMetadata.addMethod("GET", addressesLambdaIntegrationConfig);

    addressesExtendedAddress.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesAddressPendingTrxns.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );

    addressesMetricsLatest.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashAdoption.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashUsage.addMethod("GET", addressesLambdaIntegrationConfig);
    addressesHashTokenBalLatest.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );
    addressesHashTokenBalHistorical.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );

    addressesHashTokenTransfer.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );
    addressesHashTransactions.addMethod(
      "GET",
      addressesLambdaIntegrationConfig
    );

    const unclesLambdaIntegrationConfig = new LambdaIntegration(
      platformApisUnclesHandler.lambdaFunc
    );

    const uncles = restApi.root.addResource("uncles");
    const unclesHash = uncles.addResource("{hash}");

    uncles.addMethod("GET", unclesLambdaIntegrationConfig);
    unclesHash.addMethod("GET", unclesLambdaIntegrationConfig);

    const contractsLambdaIntegrationConfig = new LambdaIntegration(
      platformApisContractsHandler.lambdaFunc
    );

    const contracts = restApi.root.addResource("contracts");
    const contractsHash = contracts.addResource("{hash}");
    const contractsHashFunctions = contractsHash.addResource("functions");

    const signatures = restApi.root.addResource("signatures");
    const signaturesHash = signatures.addResource("{hash}");

    contractsHash.addMethod("GET", contractsLambdaIntegrationConfig);
    contractsHashFunctions.addMethod("GET", contractsLambdaIntegrationConfig);

    signaturesHash.addMethod("GET", contractsLambdaIntegrationConfig);
  }
}
