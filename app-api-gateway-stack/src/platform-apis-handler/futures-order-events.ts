import { getHeaders } from "../utils/headers-helper";
import {
  futuresOrderBookEventsInformationResponse,
  futuresOrderBookEventsInstrumentHistoricalResponse,
  futuresOrderBookSnapshotsInformationResponse,
  futuresOrderBookSnapshotsInstrumentHistoricalResponse,
  futuresTickersInformationResponse,
  futuresTickersInstrumentHistoricalResponse,
  futuresTickersInstrumentLatestResponse,
  futuresTradersInformationResponse,
  futuresTradersInstrumentHistoricalResponse,
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
      case "GET /market/futures/order-book-events/information":
        try {
          const { exchange, includeInactive, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeInactive && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOrderBookEventsInformationResponse,
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
      case "GET /market/futures/order-book-events/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOrderBookEventsInstrumentHistoricalResponse,
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
      case "GET /market/futures/order-book-snapshots/information":
        try {
          const { exchange, includeInactive, timeFormat } =
            event.queryStringParameters;

          if (exchange && includeInactive && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOrderBookSnapshotsInformationResponse,
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
      case "GET /market/futures/order-book-snapshots/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, timeFormat } =
            event.queryStringParameters;

          if (exchange && startDate && endDate && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresOrderBookSnapshotsInstrumentHistoricalResponse,
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
      case "GET /market/futures/tickers/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresTickersInformationResponse,
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
      case "GET /market/futures/tickers/{instrument}/latest":
        try {
          const { exchange, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresTickersInstrumentLatestResponse,
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
      case "GET /market/futures/tickers/{instrument}/historical":
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
              payload: futuresTickersInstrumentHistoricalResponse,
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
      case "GET /market/futures/trades/information":
        try {
          const { exchange, includeInactive, fields, format, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && includeInactive && format && timeFormat) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: futuresTradersInformationResponse,
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
      case "GET /market/futures/trades/{instrument}/historical":
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
              payload: futuresTradersInstrumentHistoricalResponse,
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
