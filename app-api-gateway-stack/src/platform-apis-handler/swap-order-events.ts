import { getHeaders } from "../utils/headers-helper";
import {
  swapOpenInterestInformationResponse,
  swapOpenInterestInstrumentHistoricalResponse,
  swapOpenInterestInstrumentLatestResponse,
  swapOrderBookEventsInformationResponse,
  swapOrderBookEventsInstrumentHistoricalResponse,
  swapOrderBookSnapshotsInformationResponse,
  swapOrderBookSnapshotsInstrumentHistoricalResponse,
  swapTickersInformationResponse,
  swapTickersInstrumentHistoricalResponse,
  swapTickersInstrumentLatestResponse,
  swapTradersInformationResponse,
  swapTradersInstrumentHistoricalResponse,
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
      case "GET /market/swaps/open-interest/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOpenInterestInformationResponse,
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
      case "GET /market/swaps/open-interest/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOpenInterestInstrumentLatestResponse,
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
      case "GET /market/swaps/open-interest/{instrument}/historical":
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
              payload: swapOpenInterestInstrumentHistoricalResponse,
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
      case "GET /market/swaps/order-book-events/information":
        try {
          const { exchange, includeInactive, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeInactive && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOrderBookEventsInformationResponse,
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
      case "GET /market/swaps/order-book-events/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOrderBookEventsInstrumentHistoricalResponse,
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
      case "GET /market/swaps/order-book-snapshots/information":
        try {
          const { exchange, includeInactive, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeInactive && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOrderBookSnapshotsInformationResponse,
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
      case "GET /market/swaps/order-book-snapshots/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapOrderBookSnapshotsInstrumentHistoricalResponse,
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
      case "GET /market/swaps/tickers/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapTickersInformationResponse,
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
      case "GET /market/swaps/tickers/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapTickersInstrumentLatestResponse,
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
      case "GET /market/swaps/tickers/{instrument}/historical":
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
              payload: swapTickersInstrumentHistoricalResponse,
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
      case "GET /market/swaps/trades/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: swapTradersInformationResponse,
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
      case "GET /market/swaps/trades/{instrument}/historical":
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
              payload: swapTradersInstrumentHistoricalResponse,
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
