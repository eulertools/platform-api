import { getHeaders } from "../utils/headers-helper";
import {
  futuresExchangesInformationResponse,
  futuresExchangesReferenceResponse,
  futuresFundingRatesInformationResponse,
  futuresFundingRatesInstrumentHistoricalResponse,
  futuresFundingRatesInstrumentLatestResponse,
  futuresInsuranceFundInformationResponse,
  futuresInsuranceFundInstrumentHistoricalResponse,
  futuresInsuranceFundInstrumentLatestResponse,
  futuresLiquidationsInformationResponse,
  futuresLiquidationsInstrumentHistoricalResponse,
  futuresLiquidationsInstrumentLatestResponse,
  futuresLongShortRatioInformationResponse,
  futuresLongShortRatioInstrumentHistoricalResponse,
  futuresLongShortRatioInstrumentLatestResponse,
  futuresOhlcvInformationResponse,
  futuresOhlcvInstrumentHistoricalResponse,
  futuresOhlcvInstrumentLatestResponse,
  futuresOpenInterestInformationResponse,
  futuresOpenInterestInstrumentHistoricalResponse,
  futuresOpenInterestInstrumentLatestResponse,
} from "./futures-responses";

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
      case "GET /market/futures/exchanges/information":
        try {
          const { exchange, instrument, includeDates, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeDates && instrument && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresExchangesInformationResponse,
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
      case "GET /market/futures/exchanges/reference":
        try {
          const { exchange, instrument, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && instrument && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresExchangesReferenceResponse,
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
      case "GET /market/futures/funding-rates/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresFundingRatesInformationResponse,
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
      case "GET /market/futures/funding-rates/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresFundingRatesInstrumentLatestResponse,
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
      case "GET /market/futures/funding-rates/{instrument}/historical":
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
              payload: futuresFundingRatesInstrumentHistoricalResponse,
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
      case "GET /market/futures/insurance-fund/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresInsuranceFundInformationResponse,
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
      case "GET /market/futures/insurance-fund/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresInsuranceFundInstrumentLatestResponse,
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
      case "GET /market/futures/insurance-fund/{instrument}/historical":
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
              payload: futuresInsuranceFundInstrumentHistoricalResponse,
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
      case "GET /market/futures/liquidations/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresLiquidationsInformationResponse,
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
      case "GET /market/futures/liquidations/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresLiquidationsInstrumentLatestResponse,
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
      case "GET /market/futures/liquidations/{instrument}/historical":
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
              payload: futuresLiquidationsInstrumentHistoricalResponse,
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
      case "GET /market/futures/long-short-ratio/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresLongShortRatioInformationResponse,
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
      case "GET /market/futures/long-short-ratio/{instrument}/latest":
        try {
          const { exchange, timeFrame, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && timeFrame && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresLongShortRatioInstrumentLatestResponse,
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
      case "GET /market/futures/long-short-ratio/{instrument}/historical":
        try {
          const {
            exchange,
            timeFrame,
            startDate,
            endDate,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            timeFrame &&
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
              payload: futuresLongShortRatioInstrumentHistoricalResponse,
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
      case "GET /market/futures/ohlcv/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOhlcvInformationResponse,
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
      case "GET /market/futures/ohlcv/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOhlcvInstrumentLatestResponse,
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
      case "GET /market/futures/ohlcv/{instrument}/historical":
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
              payload: futuresOhlcvInstrumentHistoricalResponse,
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
      case "GET /market/futures/open-interest/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOpenInterestInformationResponse,
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
      case "GET /market/futures/open-interest/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOpenInterestInstrumentLatestResponse,
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
      case "GET /market/futures/open-interest/{instrument}/historical":
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
              payload: futuresOpenInterestInstrumentHistoricalResponse,
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
