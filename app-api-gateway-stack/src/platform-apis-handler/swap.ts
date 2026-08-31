import { getHeaders } from "../utils/headers-helper";
import {
  swapExchangesInformationResponse,
  swapExchangesReferenceResponse,
  swapFundingRatesInformationResponse,
  swapFundingRatesInstrumentHistoricalResponse,
  swapFundingRatesInstrumentLatestResponse,
  swapInsuranceFundInformationResponse,
  swapInsuranceFundInstrumentHistoricalResponse,
  swapInsuranceFundInstrumentLatestResponse,
  swapLiquidationsInformationResponse,
  swapLiquidationsInstrumentHistoricalResponse,
  swapOhlcvInformationResponse,
  swapOhlcvInstrumentHistoricalResponse,
  swapOhlcvInstrumentLatestResponse,
} from "./swap-responses";

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
      case "GET /market/swaps/exchanges/information":
        try {
          const {
            exchange,
            instrument,
            includeDates,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeDates &&
            instrument &&
            format &&
            fields &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapExchangesInformationResponse,
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
      case "GET /market/swaps/exchanges/reference":
        try {
          const { exchange, instrument, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && instrument && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapExchangesReferenceResponse,
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
      case "GET /market/swaps/funding-rates/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapFundingRatesInformationResponse,
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
      case "GET /market/swaps/funding-rates/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapFundingRatesInstrumentLatestResponse,
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
      case "GET /market/swaps/funding-rates/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, fields, format, timeFormat } =
            event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapFundingRatesInstrumentHistoricalResponse,
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
      case "GET /market/swaps/insurance-fund/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapInsuranceFundInformationResponse,
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
      case "GET /market/swaps/insurance-fund/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapInsuranceFundInstrumentLatestResponse,
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
      case "GET /market/swaps/insurance-fund/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, fields, format, timeFormat } =
            event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapInsuranceFundInstrumentHistoricalResponse,
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
      case "GET /market/swaps/liquidations/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapLiquidationsInformationResponse,
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
      case "GET /market/swaps/liquidations/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, fields, format, timeFormat } =
            event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            fields &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapLiquidationsInstrumentHistoricalResponse,
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
      case "GET /market/swaps/ohlcv/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOhlcvInformationResponse,
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
      case "GET /market/swaps/ohlcv/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOhlcvInstrumentLatestResponse,
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
      case "GET /market/swaps/ohlcv/{instrument}/historical":
        try {
          const {
            exchange,
            startDate,
            endDate,
            timeInterval,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            fields &&
            timeInterval &&
            format &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOhlcvInstrumentHistoricalResponse,
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
