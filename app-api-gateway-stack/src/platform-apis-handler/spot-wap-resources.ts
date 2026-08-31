import { getHeaders } from "../utils/headers-helper";
import {
  marketSpotTwapAssetsAssetHistoricalResponse,
  marketSpotTwapAssetsAssetLatestResponse,
  marketSpotTwapAssetsInformationResponse,
  marketSpotTwapPairsInformationResponse,
  marketSpotTwapPairsPairHistoricalResponse,
  marketSpotTwapPairsPairLatestResponse,
  marketSpotVwapAssetsAssetHistoricalResponse,
  marketSpotVwapAssetsAssetLatestResponse,
  marketSpotVwapAssetsInformationResponse,
  marketSpotVwapPairsInformationResponse,
  marketSpotVwapPairsPairHistoricalResponse,
  marketSpotVwapPairsPairLatestResponse,
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
      case "GET /market/spot/vwap/assets/information":
        try {
          const { asset, fields, format, timeFormat } =
            event.queryStringParameters;

          if (asset && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapAssetsInformationResponse,
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
      case "GET /market/spot/vwap/assets/{asset}/latest":
        try {
          const { lookbackPeriod, fields, format, timeFormat } =
            event.queryStringParameters;

          if (lookbackPeriod && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapAssetsAssetLatestResponse,
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
      case "GET /market/spot/vwap/assets/{asset}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapAssetsAssetHistoricalResponse,
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
      case "GET /market/spot/vwap/pairs/information":
        try {
          const { pair, fields, format, timeFormat } =
            event.queryStringParameters;

          if (pair && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapPairsInformationResponse,
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
      case "GET /market/spot/vwap/pairs/{pair}/latest":
        try {
          const {
            exchange,
            includeCrossRates,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeCrossRates &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapPairsPairLatestResponse,
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
      case "GET /market/spot/vwap/pairs/{pair}/historical":
        try {
          const {
            exchange,
            includeCrossRates,
            startDate,
            endDate,
            timeInterval,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeCrossRates &&
            startDate &&
            endDate &&
            timeInterval &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotVwapPairsPairHistoricalResponse,
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
      case "GET /market/spot/twap/assets/information":
        try {
          const { asset, fields, format, timeFormat } =
            event.queryStringParameters;

          if (asset && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapAssetsInformationResponse,
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
      case "GET /market/spot/twap/assets/{asset}/latest":
        try {
          const { lookbackPeriod, fields, format, timeFormat } =
            event.queryStringParameters;

          if (lookbackPeriod && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapAssetsAssetLatestResponse,
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
      case "GET /market/spot/twap/assets/{asset}/historical":
        try {
          const {
            startDate,
            endDate,
            timeInterval,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            startDate &&
            endDate &&
            timeInterval &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapAssetsAssetHistoricalResponse,
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
      case "GET /market/spot/twap/pairs/information":
        try {
          const { pair, fields, format, timeFormat } =
            event.queryStringParameters;

          if (pair && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapPairsInformationResponse,
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
      case "GET /market/spot/twap/pairs/{pair}/latest":
        try {
          const {
            exchange,
            includeCrossRates,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeCrossRates &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapPairsPairLatestResponse,
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
      case "GET /market/spot/twap/pairs/{pair}/historical":
        try {
          const {
            exchange,
            includeCrossRates,
            startDate,
            endDate,
            timeInterval,
            lookbackPeriod,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeCrossRates &&
            startDate &&
            endDate &&
            timeInterval &&
            lookbackPeriod &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: marketSpotTwapPairsPairHistoricalResponse,
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
