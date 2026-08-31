import { getHeaders } from "../utils/headers-helper";
import {
  marketExchangesResponse,
  marketPairsResponse,
  marketSpotExchangesReferenceResponse,
  marketSpotOhlcvInformationResponse,
  marketSpotOhlcvPairHistoricalResponse,
  marketSpotOhlcvPairLatestResponse,
  marketSpotOrderBookEventsPairHistoricalResponse,
  marketSpotOrderBookSnapshotsPairHistoricalResponse,
  marketSpotPricesAssetsAssetHistoricalResponse,
  marketSpotPricesAssetsAssetLatestResponse,
  marketSpotPricesAssetsInformationResponse,
  marketSpotPricesPairsInformationResponse,
  marketSpotPricesPairsPairHistoricalResponse,
  marketSpotPricesPairsPairLatestResponse,
  marketSpotTickersInformationResponse,
  marketSpotTickersPairsHistoricalResponse,
  marketSpotTickersPairsLatestResponse,
  marketSpotTradersInformationResponse,
  marketSpotTradersPairsHistoricalResponse,
} from "./spot-responses";

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
      case "GET /market/exchanges":
        try {
          const { exchange, pair, includeDates, format } =
            event.queryStringParameters;

          if (exchange && pair && includeDates && format) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketExchangesResponse,
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
      case "GET /market/pairs":
        try {
          const { exchange, pair, includeDates, format } =
            event.queryStringParameters;

          if (exchange && pair && includeDates && format) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketPairsResponse,
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
      case "GET /market/spot/exchanges/reference":
        try {
          const { exchange, pair, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && pair && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotExchangesReferenceResponse,
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
      case "GET /market/spot/ohlcv/information":
        try {
          const { exchange, includeDates, timeInterval, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeDates && timeInterval && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotOhlcvInformationResponse,
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
      case "GET /market/spot/ohlcv/{pair}/latest":
        try {
          const { exchange, format, fields, timeInterval, timeFormat } =
            event.queryStringParameters;

          if (exchange && format && fields && timeInterval && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotOhlcvPairLatestResponse,
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
      case "GET /market/spot/ohlcv/{pair}/historical":
        try {
          const {
            exchange,
            startDate,
            endDate,
            format,
            fields,
            timeInterval,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            format &&
            fields &&
            timeInterval &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotOhlcvPairHistoricalResponse,
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
      case "GET /market/spot/order-book-events/{pair}/historical":
        try {
          const { exchange, startDate, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotOrderBookEventsPairHistoricalResponse,
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
      case "GET /market/spot/order-book-snapshots/{pair}/historical":
        try {
          const { exchange, startDate, timestamp, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timestamp && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotOrderBookSnapshotsPairHistoricalResponse,
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
      case "GET /market/spot/prices/assets/information":
        try {
          const { asset, format, fields, timeFormat } =
            event.queryStringParameters;

          if (asset && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesAssetsInformationResponse,
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
      case "GET /market/spot/prices/assets/{asset}/latest":
        try {
          const { format, fields, timeFormat } = event.queryStringParameters;

          if (format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesAssetsAssetLatestResponse,
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
      case "GET /market/spot/prices/assets/{asset}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            format &&
            fields &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesAssetsAssetHistoricalResponse,
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
      case "GET /market/spot/prices/pairs/information":
        try {
          const { pair, format, fields, timeFormat } =
            event.queryStringParameters;

          if (pair && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesPairsInformationResponse,
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
      case "GET /market/spot/prices/pairs/{pair}/latest":
        try {
          const { exchange, includeCrossRates, format, fields, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeCrossRates && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesPairsPairLatestResponse,
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
      case "GET /market/spot/prices/pairs/{pair}/historical":
        try {
          const {
            exchange,
            includeCrossRates,
            startDate,
            endDate,
            timeInterval,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeCrossRates &&
            startDate &&
            endDate &&
            timeInterval &&
            format &&
            fields &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotPricesPairsPairHistoricalResponse,
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
      case "GET /market/spot/tickers/information":
        try {
          const { exchange } = event.queryStringParameters;

          if (exchange) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTickersInformationResponse,
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
      case "GET /market/spot/tickers/{pair}/latest":
        try {
          const { exchange, format, fields } = event.queryStringParameters;

          if (exchange && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTickersPairsLatestResponse,
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
      case "GET /market/spot/tickers/{pair}/historical":
        try {
          const { exchange, startDate, endDate, format, fields } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTickersPairsHistoricalResponse,
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
      case "GET /market/spot/trades/information":
        try {
          const { exchange, includeDates } = event.queryStringParameters;

          if (exchange && includeDates) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTradersInformationResponse,
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
      case "GET /market/spot/trades/{pair}/historical":
        try {
          const { exchange, startDate, endDate } = event.queryStringParameters;

          if (exchange && startDate && endDate) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTradersPairsHistoricalResponse,
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
