import { getHeaders } from "../utils/headers-helper";
import {
  addressesAddressPendingTrxnsResponse,
  addressesExtendedAddressResponse,
  addressesHahsFunctionsResponse,
  addressesHahsLogsResponse,
  addressesHashAccountBalHistoricalResponse,
  addressesHashAccountBalLatestResponse,
  addressesHashAdoptionResponse,
  addressesHashBalancesResponse,
  addressesHashConverterResponse,
  addressesHashInformationResponse,
  addressesHashMetadataResponse,
  addressesHashTokenBalHistoricalResponse,
  addressesHashTokenBalLatestResponse,
  addressesHashTokenTransferResponse,
  addressesHashTransactionsResponse,
  addressesHashUsageResponse,
  addressesMetricsLatestResponse,
  addressesResponse,
} from "./addresses-responses";

const Sentry = require("@sentry/serverless");

Sentry.AWSLambda.init({
  dsn: process.env.DSN_URL,
  tracesSampleRate: 1.0,
});

export async function handler(event: any, context: any, callback: any) {
  console.log("Events: ", event);
  let body;
  let statusCode = 200;
  const headers = getHeaders(event);

  let resourcePath = event.resource;
  let httpMethod = event.httpMethod;
  let route = httpMethod.concat(" ").concat(resourcePath);

  try {
    switch (route) {
      case "GET /addresses":
        try {
          const {
            blockNumber,
            blockNumberGt,
            blockNumberGte,
            blockNumberLt,
            blockNumberLte,
            hash,
            startDate,
            endDate,
            transactionHash,
            type,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;
          if (
            blockNumber &&
            blockNumberGt &&
            blockNumberGte &&
            blockNumberLt &&
            blockNumberLte &&
            hash &&
            startDate &&
            endDate &&
            transactionHash &&
            type &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/account-balances/latest":
        try {
          const { includePrice, currency, format, fields } =
            event.queryStringParameters;
          if (
            includePrice &&
            currency &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashAccountBalLatestResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/account-balances/historical":
        try {
          const {
            blockNumber,
            startDate,
            endDate,
            value,
            valueGt,
            valueGte,
            valueLt,
            valueLte,
            includePrice,
            currency,
            page,
            size,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;
          if (
            blockNumber &&
            value &&
            valueGt &&
            valueGte &&
            valueLt &&
            valueLte &&
            startDate &&
            endDate &&
            includePrice &&
            currency &&
            page &&
            size &&
            format &&
            fields &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashAccountBalHistoricalResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/balances":
        try {
          const { includePrice, currency, timeFormat } =
            event.queryStringParameters;
          if (
            includePrice &&
            currency &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashBalancesResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/balances":
        try {
          const { addresses, blockNumber, includePrice, currency, timeFormat } =
            event.queryStringParameters;
          if (
            addresses &&
            blockNumber &&
            includePrice &&
            currency &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashBalancesResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/functions":
        try {
          const {
            blockNumber,
            direction,
            from,
            to,
            transactionHash,
            startDate,
            endDate,
            validationMethod,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;
          if (
            blockNumber &&
            direction &&
            from &&
            startDate &&
            endDate &&
            to &&
            transactionHash &&
            page &&
            size &&
            format &&
            fields &&
            validationMethod &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHahsFunctionsResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/logs":
        try {
          const {
            blockNumber,
            transactionHash,
            startDate,
            endDate,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;
          if (
            blockNumber &&
            startDate &&
            endDate &&
            transactionHash &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHahsLogsResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/converter":
        try {
          if (event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashConverterResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/information":
        try {
          const { includePrice, currency } = event.queryStringParameters;
          if (includePrice && currency && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashInformationResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/metadata":
        try {
          const { timeFormat } = event.queryStringParameters;
          if (timeFormat && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashMetadataResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/extended/{address}":
        try {
          const { page, size, path, type } = event.queryStringParameters;
          if (page && size && path && type && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesExtendedAddressResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/pending-transactions":
        try {
          const {
            from,
            to,
            startDate,
            endDate,
            includePrice,
            currency,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;
          if (
            from &&
            startDate &&
            endDate &&
            includePrice &&
            currency &&
            to &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesAddressPendingTrxnsResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/metrics/latest":
        try {
          const { format, fields } = event.queryStringParameters;
          if (format && fields && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesMetricsLatestResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/adoption":
        try {
          const { timeFrame, timePeriod, timeFormat } =
            event.queryStringParameters;
          if (
            timeFrame &&
            timePeriod &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashAdoptionResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/usage":
        try {
          const { timeFrame, timePeriod, timeFormat, format, fields } =
            event.queryStringParameters;
          if (
            timeFrame &&
            timePeriod &&
            timeFormat &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashUsageResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/token-balances/latest":
        try {
          const {
            direction,
            includePrice,
            currency,
            format,
            fields,
            sortType,
            page,
            size,
          } = event.queryStringParameters;
          if (
            direction &&
            includePrice &&
            currency &&
            format &&
            fields &&
            sortType &&
            page &&
            size &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashTokenBalLatestResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/token-balances/historical":
        try {
          const {
            amount,
            amountGt,
            amountGte,
            amountLt,
            amountLte,
            startDate,
            endDate,
            tokenAddress,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            amount &&
            amountGt &&
            amountGte &&
            amountLt &&
            amountLte &&
            startDate &&
            endDate &&
            tokenAddress &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashTokenBalHistoricalResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/token-transfers":
        try {
          const {
            amount,
            amountGt,
            amountGte,
            amountLt,
            amountLte,
            startDate,
            endDate,
            tokenAddress,
            transactionHash,
            direction,
            validationMethod,
            includePrice,
            currency,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            amount &&
            amountGt &&
            amountGte &&
            amountLt &&
            amountLte &&
            startDate &&
            endDate &&
            tokenAddress &&
            transactionHash &&
            direction &&
            validationMethod &&
            includePrice &&
            currency &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashTokenTransferResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      case "GET /addresses/{hash}/transactions":
        try {
          const {
            blockNumber,
            from,
            to,
            includeFunctions,
            includeTokenTransfers,
            includeLogs,
            decodeTransactions,
            includePrice,
            startDate,
            endDate,
            validationMethod,
            direction,
            currency,
            format,
            fields,
            size,
            page,
          } = event.queryStringParameters;

          if (
            blockNumber &&
            from &&
            to &&
            startDate &&
            includeTokenTransfers &&
            includeFunctions &&
            decodeTransactions &&
            includeLogs &&
            endDate &&
            page &&
            direction &&
            validationMethod &&
            includePrice &&
            currency &&
            format &&
            fields &&
            size &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: addressesHashTransactionsResponse,
            };
          } else {
            throw {
              status: 404,
              title: "Not Ok",
              description: "Bad Request",
              payload: {
                error: "Some Query Parameters are required, but not found",
              },
            };
          }
        } catch (err) {
          throw err;
        }
        break;
      default:
        throw new Error(`Unsupported route: "${route}"`);
    }
  } catch (err: any) {
    Sentry.captureException({ error: JSON.stringify(err) });
    console.log({ error: JSON.stringify(err) });
    statusCode = 400;
    body = err;
  } finally {
    console.log({ data: body });
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
}
