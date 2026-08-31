import { getHeaders } from "../utils/headers-helper";
import {
  defiMetricHistoricalResponse,
  defiMetricLastestResponse,
  defiMetricsExchangesExchangeAssetsAssetHistoricalResponse,
  defiMetricsExchangesExchangeAssetsAssetLatestResponse,
  defiPairsBasesBaseQuotesQuoteLatestResponse,
  defiPairsInformationResponse,
  defiPricesAssetInformationResponse,
  defiPricesAssetsAssetHistoricalResponse,
  defiTradesInformationResponse,
  lendingExchangesHistoricalResponse,
  lendingExchangesInformationResponse,
  lendingExchangesLatestResponse,
  liquidityInformationResponse,
  liquidityPoolHistoricalResponse,
  liquidityPoolLatestResponse,
  ohlcvInformationResponse,
  ohlcvPoolHistoricalResponse,
  ohlcvPoolLatestResponse,
} from "./defi-dex-responses";

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
      case "GET /market/defi/lending/exchanges/information":
        try {
          const { exchange, includeDates, format, fields } =
            event.queryStringParameters;

          if (exchange && includeDates && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: lendingExchangesInformationResponse,
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
      case "GET /market/defi/lending/exchanges/{exchange}/latest":
        try {
          const { asset, format, timeFormat, fields } =
            event.queryStringParameters;

          if (asset && format && timeFormat && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: lendingExchangesLatestResponse,
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
      case "GET /market/defi/lending/exchanges/{exchange}/historical":
        try {
          const { asset, startDate, endDate, format, timeFormat, fields } =
            event.queryStringParameters;

          if (asset && startDate && endDate && format && timeFormat && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: lendingExchangesHistoricalResponse,
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
      case "GET /market/defi/liquidity/information":
        try {
          const {
            exchange,
            includeMetadata,
            includeDates,
            timeFormat,
            size,
            page,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeMetadata &&
            includeDates &&
            size &&
            timeFormat &&
            page
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: liquidityInformationResponse,
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
      case "GET /market/defi/liquidity/{pool}/latest":
        try {
          const { exchange, format, timeFormat, fields } =
            event.queryStringParameters;

          if (exchange && format && timeFormat && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: liquidityPoolLatestResponse,
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
      case "GET /market/defi/liquidity/{pool}/historical":
        try {
          const { exchange, startDate, endDate, format, timeFormat, fields } =
            event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            format &&
            timeFormat &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: liquidityPoolHistoricalResponse,
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
      case "GET /market/defi/ohlcv/information":
        try {
          const {
            exchange,
            includeMetadata,
            includeDates,
            page,
            timeFormat,
            size,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeMetadata &&
            includeDates &&
            page &&
            timeFormat &&
            size
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: ohlcvInformationResponse,
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
      case "GET /market/defi/ohlcv/{pool}/latest":
        try {
          const { exchange, format, fields, timeFormat } =
            event.queryStringParameters;

          if (exchange && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: ohlcvPoolLatestResponse,
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
      case "GET /market/defi/ohlcv/{pool}/historical":
        try {
          const {
            exchange,
            startDate,
            endDate,
            timeInterval,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
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
              payload: ohlcvPoolHistoricalResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/latest":
        try {
          const { format, fields, timeFormat } = event.queryStringParameters;

          if (format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiMetricLastestResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/historical":
        try {
          const { startDate, endDate, format, fields, timeFormat } =
            event.queryStringParameters;

          if (startDate && endDate && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiMetricHistoricalResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/assets/{asset}/latest":
        try {
          const { format, fields, timeFormat } = event.queryStringParameters;

          if (format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiMetricsExchangesExchangeAssetsAssetLatestResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/assets/{asset}/historical":
        try {
          const { startDate, endDate, format, fields, timeFormat } =
            event.queryStringParameters;

          if (startDate && endDate && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload:
                defiMetricsExchangesExchangeAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/pairs/{pair}/latest":
        try {
          const { format, fields, timeFormat } = event.queryStringParameters;

          if (format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiMetricsExchangesExchangeAssetsAssetLatestResponse,
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
      case "GET /market/defi/metrics/exchanges/{exchange}/pairs/{pair}/historical":
        try {
          const { startDate, endDate, format, fields, timeFormat } =
            event.queryStringParameters;

          if (startDate && endDate && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload:
                defiMetricsExchangesExchangeAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/prices/asset/information":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiPricesAssetInformationResponse,
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
      case "GET /market/defi/prices/asset/{asset}/latest":
        try {
          const { lookbackPeriod, format, fields, timeFormat } =
            event.queryStringParameters;

          if (timeFormat && lookbackPeriod && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiPricesAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/prices/asset/{asset}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            lookbackPeriod,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            timeFormat &&
            lookbackPeriod &&
            format &&
            fields
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiPricesAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/prices/pairs/information":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiPairsInformationResponse,
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
      case "GET /market/defi/prices/pairs/bases/{base}/quotes/{quote}/latest":
        try {
          const { format, fields, timeFormat } = event.queryStringParameters;

          if (format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiPairsBasesBaseQuotesQuoteLatestResponse,
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
      case "GET /market/defi/prices/pairs/bases/{base}/quotes/{quote}/historical":
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
              payload: defiPairsBasesBaseQuotesQuoteLatestResponse,
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
