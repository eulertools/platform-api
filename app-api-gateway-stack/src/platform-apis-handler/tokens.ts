import { getHeaders } from "../utils/headers-helper";
import {
  holdersLatestResponse,
  holdersHistoricalResponse,
  metricLastestResponse,
  metricHistoricalResponse,
  metricVelocityResponse,
  metricVolumeRespone,
  rankingsResponse,
  rankingsHistoricalResponse,
  transfersResponse,
  suppliesLastestResponse,
  suppliesHistoricalResponse,
} from "./tokens-responses";

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
      case "GET /tokens/{hash}/holders/latest":
        try {
          const {
            currency,
            fields,
            format,
            includePrice,
            numTokens,
            numTokensGt,
            numTokensGte,
            numTokensLt,
            numTokensLte,
            page,
            size,
            timestampGt,
            timestampGte,
            timestampLt,
            timestampLte,
            tokenAddress,
          } = event.queryStringParameters;

          if (
            currency &&
            fields &&
            format &&
            includePrice &&
            numTokens &&
            numTokensGt &&
            numTokensGte &&
            numTokensLt &&
            numTokensLte &&
            page &&
            size &&
            timestampGt &&
            timestampGte &&
            timestampLt &&
            timestampLte &&
            tokenAddress &&
            event.queryStringParameters["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: {
                records: holdersLatestResponse,
              },
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
      case "GET /tokens/{hash}/holders/historical":
        try {
          const {
            holderAddresses,
            timeFrame,
            includePrice,
            currency,
            format,
            fields,
            timeFormat,
          } = event.queryStringParameters;

          if (
            holderAddresses &&
            timeFrame &&
            includePrice &&
            currency &&
            format &&
            fields &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: holdersHistoricalResponse,
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
      case "GET /tokens/metrics/{symbol}/latest":
        try {
          const { timeFrame, format, fields } = event.queryStringParameters;
          if (
            timeFrame &&
            format &&
            fields &&
            event.queryStringParameters["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricLastestResponse,
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
      case "GET /tokens/metrics/{symbol}/historical":
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
            timeFormat &&
            event.queryStringParameters["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: {
                records: metricHistoricalResponse,
                totalRecords: 365,
              },
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
      case "GET /tokens/{hash}/velocity":
        try {
          const { timeFrame, format, fields, timeFormat } =
            event.queryStringParameters;
          if (
            timeFrame &&
            format &&
            fields &&
            timeFormat &&
            event.queryStringParameters["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricVelocityResponse,
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
      case "GET /tokens/{hash}/volume":
        try {
          const { timeFrame, format, fields, timeFormat } =
            event.queryStringParameters;
          if (
            timeFrame &&
            format &&
            fields &&
            timeFormat
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: metricVolumeRespone,
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
      case "GET /tokens/rankings":
        try {
          const {
            direction,
            sortType,
            type,
            timeInterval,
            page,
            size,
            format,
            fields,
          } = event.queryStringParameters;
          if (
            direction &&
            sortType &&
            type &&
            timeInterval &&
            page &&
            size &&
            format &&
            fields &&
            event.headers["blockchain-id"]
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
      case "GET /tokens/rankings/historical":
        try {
          const { direction, sortType, topN, startDate, endDate } =
            event.queryStringParameters;
          if (
            direction &&
            sortType &&
            topN &&
            startDate &&
            endDate &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: rankingsHistoricalResponse,
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
      case "GET /tokens/{hash}/transfers":
        try {
          const {
            currency,
            fields,
            format,
            includePrice,
            amount,
            amountGt,
            amountGte,
            amountLt,
            amountLte,
            page,
            size,
            blockNumber,
            recipientAddress,
            senderAddress,
            startDate,
            endDate,
            tokenAddress,
            transactionHash,
            validationMethod,
          } = event.queryStringParameters;

          if (
            currency &&
            fields &&
            format &&
            includePrice &&
            amount &&
            amountGt &&
            amountGte &&
            amountLt &&
            amountLte &&
            page &&
            size &&
            blockNumber &&
            recipientAddress &&
            senderAddress &&
            startDate &&
            endDate &&
            tokenAddress &&
            transactionHash &&
            validationMethod &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: {
                records: transfersResponse,
              },
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
      case "GET /tokens/{hash}/supplies/latest":
        try {
          const { format, fields } = event.queryStringParameters;
          if (format && fields && event.headers["blockchain-id"]) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: suppliesLastestResponse,
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
      case "GET /tokens/{hash}/supplies/historical":
        try {
          const {
            format,
            fields,
            startDate,
            endDate,
            timeInterval,
            timeFormat,
          } = event.queryStringParameters;
          if (
            format &&
            fields &&
            startDate &&
            endDate &&
            timeInterval &&
            timeFormat &&
            event.headers["blockchain-id"]
          ) {
            body = {
              status: 200,
              title: "ok",
              description: "Successful request",
              payload: suppliesHistoricalResponse,
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
