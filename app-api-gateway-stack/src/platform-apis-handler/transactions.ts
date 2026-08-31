import {
  transactionsGasPercentilesResponse,
  transactionsGasPredictionsResponse,
  transactionsHashResponse,
  transactionsMetricsHistoricalResponse,
  transactionsMetricsLatestResponse,
  transactionsResponse,
  transactionsTokenTransferResponse,
  transactionsVolumeResponse,
} from "./transactions-responses";
import { getHeaders } from "../utils/headers-helper";

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
      case "GET /transactions":
        try {
          const {
            includeFunctions,
            includeTokenTransfers,
            includeLogs,
            decodeTransactions,
            startDate,
            endDate,
            validationMethod,
            includePrice,
            currency,
            format,
            fields,
            size,
            status,
          } = event.queryStringParameters;

          if (
            startDate &&
            includeTokenTransfers &&
            includeFunctions &&
            decodeTransactions &&
            includeLogs &&
            endDate &&
            status &&
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
              payload: transactionsResponse,
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
      case "GET /transactions/{hash}":
        try {
          const {
            includeFunctions,
            includeTokenTransfers,
            includeLogs,
            decodeTransactions,
            validationMethod,
            includePrice,
            currency,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            includeTokenTransfers &&
            includeFunctions &&
            decodeTransactions &&
            includeLogs &&
            validationMethod &&
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
              payload: transactionsHashResponse,
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
      case "GET /transactions/gas/percentiles":
        try {
          const { blockNumber, numBlocks, timestamp, format, fields } =
            event.queryStringParameters;

          if (
            numBlocks &&
            blockNumber &&
            timestamp &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsGasPercentilesResponse,
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
      case "GET /transactions/gas/predictions":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsGasPredictionsResponse,
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
      case "GET /transactions/metrics/latest":
        try {
          const { includePrice, format, fields, timeFormat } =
            event.queryStringParameters;

          if (
            includePrice &&
            format &&
            fields &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsMetricsLatestResponse,
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
      case "GET /transactions/metrics/historical":
        try {
          const { startDate, endDate, timeFrame, format, fields, timeFormat } =
            event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFrame &&
            format &&
            fields &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsMetricsHistoricalResponse,
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
      case "GET /transactions/volume":
        try {
          const { timeFrame, format, fields, timeFormat } =
            event.queryStringParameters;

          if (
            timeFrame &&
            format &&
            fields &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsVolumeResponse,
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
      case "GET /transactions/{hash}/token-transfers":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: transactionsTokenTransferResponse,
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
