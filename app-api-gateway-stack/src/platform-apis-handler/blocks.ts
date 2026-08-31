import { getHeaders } from "../utils/headers-helper";
import {
  blockFunctionsResponse,
  blockLogsResponse,
  blocksByIdResponse,
  blocksMetricsHistoricalResponse,
  blocksMetricsLatestResponse,
  blocksResponse,
  blocksTokenTransferResponse,
  blocksTransactionsResponse,
} from "./blocks-responses";

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
      case "GET /blocks":
        try {
          const {
            startNumber,
            endNumber,
            size,
            validationMethod,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            startNumber &&
            endNumber &&
            size &&
            validationMethod &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blocksResponse,
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
      case "GET /blocks/{id}":
        try {
          const { timeFormat, validationMethod, format, fields } =
            event.queryStringParameters;

          if (
            timeFormat &&
            validationMethod &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blocksByIdResponse,
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
      case "GET /blocks/{id}/functions":
        try {
          const { validationMethod, format, fields } =
            event.queryStringParameters;

          if (
            validationMethod &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blockFunctionsResponse,
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
      case "GET /blocks/{id}/logs":
        try {
          const { transactionHash, validationMethod, format, fields } =
            event.queryStringParameters;

          if (
            transactionHash &&
            validationMethod &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blockLogsResponse,
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
      case "GET /blocks/metrics/latest":
        try {
          const { timeFormat, format, fields } = event.queryStringParameters;

          if (
            timeFormat &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blocksMetricsLatestResponse,
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
      case "GET /blocks/metrics/historical":
        try {
          const { startDate, endDate, timeFormat, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFormat &&
            timeFrame &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: blocksMetricsHistoricalResponse,
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
      case "GET /blocks/{id}/token-transfers":
        try {
          const {
            amount,
            amountGt,
            amountGte,
            amountLt,
            amountLte,
            from,
            to,
            tokenAddress,
            transactionHash,
            includePrice,
            currency,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            amount &&
            amountGt &&
            amountGte &&
            amountLt &&
            amountLte &&
            from &&
            to &&
            tokenAddress &&
            transactionHash &&
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
              payload: blocksTokenTransferResponse,
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
      case "GET /blocks/{id}/transactions":
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
            page,
          } = event.queryStringParameters;

          if (
            startDate &&
            includeTokenTransfers &&
            includeFunctions &&
            decodeTransactions &&
            includeLogs &&
            endDate &&
            page &&
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
              payload: blocksTransactionsResponse,
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
