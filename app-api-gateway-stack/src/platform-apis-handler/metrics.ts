import { getHeaders } from "../utils/headers-helper";
import {
  metricsAssetImpliedyieldLatestResponse,
  metricsAssetSupplyHistoricalResponse,
  metricsAssetSupplyLatestResponse,
  metricsInstrumentImpliedyieldHistoricalResponse,
  metricsSymbolHistoricalNvtResponse,
  metricsSymbolHistoricalSharpeResponse,
  metricsSymbolHistoricalStockResponse,
  metricsSymbolLatestResponse,
  tokensPricesHashHistoricalResponse,
  tokensPricesHashLatestResponse,
} from "./metrics-responses";
import { rankingsResponse } from "./tokens-responses";

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
      case "GET /market/metrics/{symbol}/latest":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsSymbolLatestResponse,
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
      case "GET /market/metrics/{symbol}/historical/nvt":
        try {
          const { startDate, endDate, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFrame &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsSymbolHistoricalNvtResponse,
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
      case "GET /market/metrics/{symbol}/historical/sharpe":
        try {
          const { startDate, endDate, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFrame &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsSymbolHistoricalSharpeResponse,
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
      case "GET /market/metrics/{symbol}/historical/stock-to-flow":
        try {
          const { startDate, endDate, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFrame &&
            format &&
            fields &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsSymbolHistoricalStockResponse,
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
      case "GET /market/metrics/{asset}/implied-yield/latest":
        try {
          const { futuresExchange, spotExchange, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            futuresExchange &&
            spotExchange &&
            timeFrame &&
            format &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsAssetImpliedyieldLatestResponse,
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
      case "GET /market/metrics/{instrument}/implied-yield/historical":
        try {
          const { futuresExchange, spotExchange, timeFrame, format, fields } =
            event.queryStringParameters;

          if (
            futuresExchange &&
            spotExchange &&
            timeFrame &&
            format &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsInstrumentImpliedyieldHistoricalResponse,
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
      case "GET /market/rankings":
        try {
          const {
            direction,
            sortType,
            timeInterval,
            type,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            direction &&
            sortType &&
            timeInterval &&
            type &&
            page &&
            size &&
            format &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: rankingsResponse,
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
      case "GET /market/metrics/{asset}/supply/latest":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsAssetSupplyLatestResponse,
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
      case "GET /market/metrics/{asset}/supply/historical":
        try {
          const { startDate, endDate, timeFormat, format, fields } =
            event.queryStringParameters;

          if (startDate && endDate && timeFormat && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricsAssetSupplyHistoricalResponse,
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
      case "GET /market/tokens/prices/{hash}/latest":
        try {
          const { currency, format, fields } = event.queryStringParameters;

          if (currency && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: tokensPricesHashLatestResponse,
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
      case "GET /market/tokens/prices/{hash}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            timeFormat,
            currency,
            format,
            fields,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeFormat &&
            timeInterval &&
            currency &&
            format &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: tokensPricesHashHistoricalResponse,
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
