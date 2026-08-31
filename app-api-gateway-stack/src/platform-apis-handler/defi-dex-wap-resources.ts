import { getHeaders } from "../utils/headers-helper";
import {
  defiTradesInformationResponse,
  defiTradesPoolHistoricalResponse,
  defiTwapAssetInformationResponse,
  defiTwapAssetsAssetHistoricalResponse,
  defiTwapAssetsAssetLatestResponse,
  defiTwapPairsBasesBaseQuotesQuoteHistoricalResponse,
  defiTwapPairsBasesBaseQuotesQuoteLatestResponse,
  defiTwapPairsInformationResponse,
  defiVwapAssetInformationResponse,
  defiVwapAssetsAssetHistoricalResponse,
  defiVwapAssetsAssetLatestResponse,
  defiVwapPairsBasesBaseQuotesQuoteHistoricalResponse,
  defiVwapPairsBasesBaseQuotesQuoteLatestResponse,
  defiVwapPairsInformationResponse,
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
      case "GET /market/defi/trades/information":
        try {
          const {
            exchange,
            includeMetadata,
            includeDates,
            size,
            page,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeMetadata &&
            includeDates &&
            size &&
            page &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTradesInformationResponse,
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
      case "GET /market/defi/trades/{pool}/historical":
        try {
          const { exchange, startDate, endDate, format, fields } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTradesPoolHistoricalResponse,
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
      case "GET /market/defi/twap/asset/information":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTwapAssetInformationResponse,
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
      case "GET /market/defi/twap/asset/{asset}/latest":
        try {
          const { lookbackPeriod, format, fields, timeFormat } =
            event.queryStringParameters;

          if (timeFormat && lookbackPeriod && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTwapAssetsAssetLatestResponse,
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
      case "GET /market/defi/twap/asset/{asset}/historical":
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
              payload: defiTwapAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/twap/pairs/information":
        try {
          const { pair, format, fields, timeFormat } =
            event.queryStringParameters;

          if (pair && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTwapPairsInformationResponse,
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
      case "GET /market/defi/twap/pairs/bases/{base}/quotes/{quote}/latest":
        try {
          const { lookbackPeriod, format, fields, timeFormat } =
            event.queryStringParameters;

          if (lookbackPeriod && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTwapPairsBasesBaseQuotesQuoteLatestResponse,
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
      case "GET /market/defi/twap/pairs/bases/{base}/quotes/{quote}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            format,
            lookbackPeriod,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            format &&
            lookbackPeriod &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiTwapPairsBasesBaseQuotesQuoteHistoricalResponse,
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
      case "GET /market/defi/vwap/asset/information":
        try {
          const { format, fields } = event.queryStringParameters;

          if (format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiVwapAssetInformationResponse,
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
      case "GET /market/defi/vwap/asset/{asset}/latest":
        try {
          const { lookbackPeriod, format, fields, timeFormat } =
            event.queryStringParameters;

          if (timeFormat && lookbackPeriod && format && fields) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiVwapAssetsAssetLatestResponse,
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
      case "GET /market/defi/vwap/asset/{asset}/historical":
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
              payload: defiVwapAssetsAssetHistoricalResponse,
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
      case "GET /market/defi/vwap/pairs/information":
        try {
          const { pair, format, fields, timeFormat } =
            event.queryStringParameters;

          if (pair && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiVwapPairsInformationResponse,
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
      case "GET /market/defi/vwap/pairs/bases/{base}/quotes/{quote}/latest":
        try {
          const { lookbackPeriod, format, fields, timeFormat } =
            event.queryStringParameters;

          if (lookbackPeriod && format && fields && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiVwapPairsBasesBaseQuotesQuoteLatestResponse,
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
      case "GET /market/defi/vwap/pairs/bases/{base}/quotes/{quote}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            format,
            fields,
            lookbackPeriod,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            format &&
            fields &&
            lookbackPeriod &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: defiVwapPairsBasesBaseQuotesQuoteHistoricalResponse,
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
