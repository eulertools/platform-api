import { getHeaders } from "../utils/headers-helper";
import {
  futuresExchangesInformationResponse,
  futuresExchangesReferenceResponse,
  futuresLiquidationsInformationResponse,
  futuresLiquidationsInstrumentHistoricalResponse,
  futuresLiquidationsInstrumentLatestResponse,
  futuresOhlcvInformationResponse,
  futuresOhlcvInstrumentHistoricalResponse,
  futuresOhlcvInstrumentLatestResponse,
  futuresOpenInterestInformationResponse,
  futuresOpenInterestInstrumentHistoricalResponse,
  futuresOpenInterestInstrumentLatestResponse,
  futuresOrderBookEventsInformationResponse,
  futuresOrderBookEventsInstrumentHistoricalResponse,
  futuresOrderBookSnapshotsInformationResponse,
  futuresOrderBookSnapshotsInstrumentHistoricalResponse,
  futuresTickersInformationResponse,
  futuresTickersInstrumentHistoricalResponse,
  futuresTickersInstrumentLatestResponse,
  futuresTradersInformationResponse,
  futuresTradersInstrumentHistoricalResponse,
} from "./options-responses";

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
      case "GET /market/options/exchanges/information":
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
      case "GET /market/options/exchanges/reference":
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
      case "GET /market/options/liquidations/information":
        try {
          const {
            exchange,
            includeInactive,
            includeDates,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            fields &&
            includeInactive &&
            includeDates &&
            format &&
            timeFormat
          ) {
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
      case "GET /market/options/liquidations/{instrument}/latest":
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
      case "GET /market/options/liquidations/{instrument}/historical":
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
      case "GET /market/options/ohlcv/information":
        try {
          const {
            exchange,
            includeInactive,
            timeInterval,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            fields &&
            includeInactive &&
            timeInterval &&
            format &&
            timeFormat
          ) {
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
      case "GET /market/options/ohlcv/{instrument}/latest":
        try {
          const { exchange, fields, format, timeInterval, timeFormat } =
            event.queryStringParameters;

          if (exchange && fields && format && timeInterval && timeFormat) {
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
      case "GET /market/options/ohlcv/{instrument}/historical":
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
            timeInterval &&
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
      case "GET /market/options/open-interest/information":
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
      case "GET /market/options/open-interest/{instrument}/latest":
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
      case "GET /market/options/open-interest/{instrument}/historical":
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
      case "GET /market/options/order-book-events/information":
        try {
          const {
            exchange,
            includeInactive,
            includeDates,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            includeInactive &&
            includeDates &&
            format &&
            fields &&
            timeFormat
          ) {
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
      case "GET /market/options/order-book-events/{instrument}/historical":
        try {
          const { exchange, startDate, endDate, format, fields, timeFormat } =
            event.queryStringParameters;

          if (
            exchange &&
            startDate &&
            endDate &&
            format &&
            fields &&
            timeFormat
          ) {
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
      case "GET /market/options/order-book-snapshots/information":
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
      case "GET /market/options/order-book-snapshots/{instrument}/historical":
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
      case "GET /market/options/tickers/information":
        try {
          const {
            exchange,
            includeDates,
            includeInactive,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            fields &&
            includeDates &&
            includeInactive &&
            format &&
            timeFormat
          ) {
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
      case "GET /market/options/tickers/{instrument}/latest":
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
      case "GET /market/options/tickers/{instrument}/historical":
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
      case "GET /market/options/trades/information":
        try {
          const {
            exchange,
            includeInactive,
            includeDates,
            fields,
            format,
            timeFormat,
          } = event.queryStringParameters;

          if (
            exchange &&
            fields &&
            includeDates &&
            includeInactive &&
            format &&
            timeFormat
          ) {
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
      case "GET /market/options/trades/{instrument}/historical":
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
