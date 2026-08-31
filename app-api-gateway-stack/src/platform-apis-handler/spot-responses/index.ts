export const marketExchangesResponse = {
  bitfinex: {
    btc_eur: {
      ticker: {
        startDate: 1551052800000,
        endDate: 1554854400000,
      },
      ohlc: {
        startDate: 1495152000000,
        endDate: 1554854400000,
      },
      trade: {
        startDate: 1548979200000,
        endDate: 1554854400000,
      },
    },
  },
};

export const marketPairsResponse = {
  btc_eur: {
    bitfinex: {
      ticker: {
        startDate: 1551052800000,
        endDate: 1554854400000,
      },
      ohlc: {
        startDate: 1495152000000,
        endDate: 1554854400000,
      },
      trade: {
        startDate: 1548979200000,
        endDate: 1554854400000,
      },
    },
  },
};

export const marketSpotExchangesReferenceResponse = {
  binance: {
    "1INCHUSDT": {
      limits: {
        price: {
          max: "100000",
          min: "0.0001",
        },
        amount: {
          max: "100000",
          min: "0.0001",
        },
        market: {
          max: "100000",
          min: "0.0001",
        },
      },
      precision: {
        base: "8",
        quote: "8",
      },
      expiration: null,
      underlying: "1INCH",
    },
  },
};

export const marketSpotVwapAssetsInformationResponse = [
  {
    asset: "18c",
    startDate: "2019-04-24T12:01:00.000Z",
    endDate: "2020-09-23T21:49:00.000Z",
  },
];

export const marketSpotVwapAssetsAssetLatestResponse = {
  timestamp: "2020-09-11T22:49:00.000Z",
  asset: "btc",
  price: "10377.8883",
  volume: "3.7839",
  wvap: "10379.5833",
};

export const marketSpotVwapAssetsAssetHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:17:00.000Z",
    asset: "btc",
    price: "10334.1579",
    volume: "3.7839",
    vwap: "10332.5029",
  },
];

export const marketSpotVwapPairsInformationResponse = [
  {
    pair: "18c_btc",
    startDate: "2019-04-24T12:00:00.000Z",
    endDate: "2020-09-23T21:00:00.000Z",
  },
];

export const marketSpotVwapPairsPairLatestResponse = {
  timestamp: "2020-09-11T20:41:00.000Z",
  pair: "btc_usd",
  price: "10311.5",
  volume: "0.1212",
  vwap: "10314.8",
};

export const marketSpotVwapPairsPairHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:41:00.000Z",
    pair: "btc_usd",
    price: "10311.5",
    volume: "0.1212",
    vwap: "10315.9",
  },
];

export const marketSpotTwapAssetsInformationResponse = [
  {
    asset: "18c",
    startDate: "2019-04-24T12:01:00.000Z",
    endDate: "2020-09-23T21:49:00.000Z",
  },
];

export const marketSpotTwapAssetsAssetLatestResponse = {
  timestamp: "2020-09-11T22:49:00.000Z",
  asset: "btc",
  price: "10377.8883",
  volume: "3.7839",
  twap: "10379.5833",
};

export const marketSpotTwapAssetsAssetHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:17:00.000Z",
    asset: "btc",
    price: "10334.1579",
    volume: "3.7839",
    twap: "10332.5029",
  },
];

export const marketSpotTwapPairsInformationResponse = [
  {
    pair: "18c_btc",
    startDate: "2019-04-24T12:00:00.000Z",
    endDate: "2020-09-23T21:00:00.000Z",
  },
];

export const marketSpotTwapPairsPairLatestResponse = {
  timestamp: "2020-09-11T20:41:00.000Z",
  pair: "btc_usd",
  price: "10311.5",
  volume: "0.1212",
  twap: "10314.8",
};

export const marketSpotTwapPairsPairHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:41:00.000Z",
    pair: "btc_usd",
    price: "10311.5",
    volume: "0.1212",
    twap: "10315.9",
  },
];

export const marketSpotOhlcvInformationResponse = {
  binance: {
    btc_usdt: {
      address: "0x11111111111123456789abcdefghjkl",
      startDate: 1502928000000,
      endDate: 1552003200000,
    },
    eth_usdt: {
      address: "0x11111111111123456789abcdefghjkl",
      startDate: 1502928000000,
      endDate: 1552003200000,
    },
    ltc_usdt: {
      startDate: 1513123200000,
      endDate: 1552003200000,
    },
    xrp_usdt: {
      startDate: 1525392000000,
      endDate: 1552003200000,
    },
  },
  kraken: {
    "...": null,
  },
};

export const marketSpotOhlcvPairLatestResponse = {
  kraken: {
    timestamp: "2020-12-10T23:42:00.000Z",
    open: 1.00366,
    high: 1.00366,
    low: 1.00366,
    close: 1.00366,
    volume: 67.44801735,
  },
};

export const marketSpotOhlcvPairHistoricalResponse = {
  metadata: {
    columns: [
      "timestamp",
      "open",
      "high",
      "low",
      "close",
      "volume",
      "trades",
      "exchangeId",
      "pairAddress",
      "baseAddress",
      "quoteAddress",
    ],
    startDate: "2019-12-10T23:42:25.997Z",
    endDate: "2020-12-10T23:42:25.997Z",
  },
  data: {
    kraken: [
      ["2019-12-10T00:00:00.000Z", 0.99968, 0.99968, 0.99968, 0.99968, 0],
    ],
  },
};

export const marketSpotOrderBookEventsPairHistoricalResponse = {
  data: [
    [
      "gdax",
      1583773830061,
      505127,
      false,
      [[7782.67, 0.01, "null // numOrders"]],
      "1123662827 //sequence",
    ],
  ],
  metadata: {
    columns: [
      "exchange",
      "timestamp",
      "timestampNanoseconds",
      "isBid",
      "price",
      "volume",
      "numOrders",
      "sequence",
    ],
    startDate: 1583773200000,
    endDate: 1583776800000,
  },
};

export const marketSpotOrderBookSnapshotsPairHistoricalResponse = {
  metadata: {
    columns: ["price", "volume", "numOrders", "timestamp"],
    requestedTimestamp: "2019-03-01T00:00:00.000Z",
    returnedTimestamp: "2019-03-01T00:00:00.000Z",
    sequence: 1124096170,
  },
  data: {
    ask: [[3793.81, 54.99472861, 9, "2019-03-01T00:00:00.000Z"]],
    bid: ["..."],
  },
};

export const marketSpotPricesAssetsInformationResponse = [
  {
    asset: "18c",
    startDate: "2019-04-24T12:01:00.000Z",
    endDate: "2020-09-23T21:49:00.000Z",
  },
];

export const marketSpotPricesAssetsAssetLatestResponse = {
  timestamp: "2020-09-11T22:49:00.000Z",
  asset: "btc",
  price: "10377.8883",
  volume: "389.1346",
};

export const marketSpotPricesAssetsAssetHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:17:00.000Z",
    asset: "btc",
    price: "10334.1579",
    volume: "3.7839",
  },
];

export const marketSpotPricesPairsInformationResponse = [
  {
    pair: "18c_btc",
    startDate: "2019-04-24T12:00:00.000Z",
    endDate: "2020-09-23T21:00:00.000Z",
  },
];

export const marketSpotPricesPairsPairLatestResponse = {
  timestamp: "2020-09-11T20:41:00.000Z",
  pair: "btc_usd",
  price: "10311.5",
  volume: "0.1212",
};

export const marketSpotPricesPairsPairHistoricalResponse = [
  {
    timestamp: "2020-09-11T20:41:00.000Z",
    pair: "btc_usd",
    price: "10311.5",
    volume: "0.1212",
  },
];

export const marketSpotTickersInformationResponse = {
  bitfinex: {
    btc_eur: {
      startDate: 1551052800000,
      endDate: 1551312000000,
    },
    btc_usd: {
      "...": null,
    },
    eth_btc: {
      "...": null,
    },
    eth_eur: {
      "...": null,
    },
    eth_usd: {
      "...": null,
    },
    ltc_btc: {
      "...": null,
    },
    ltc_usd: {
      "...": null,
    },
    xrp_btc: {
      "...": null,
    },
    xrp_usd: {
      "...": null,
    },
  },
  bitstamp: {
    "...": null,
  },
  gdax: {
    "...": null,
  },
  gemini: {
    "...": null,
  },
  kraken: {
    "...": null,
  },
};

export const marketSpotTickersPairsLatestResponse = {
  bitfinex: {
    timestamp: 1551398220000,
    bid: 0.035516,
    ask: 0.035517,
    mid: 0.0355165,
    last: 0.035516,
  },
};

export const marketSpotTickersPairsHistoricalResponse = {
  data: {
    bitfinex: [
      [1551398400000, 3893, 3893.6, 3893.3, 3893],
      [1551398460000, 3893.1, 3893.2, 3893.15, 3893.1],
    ],
  },
  metadata: {
    columns: ["timestamp", "bid", "ask", "mid", "last"],
    endDate: "1551398700000",
    startDate: "1551398400000",
  },
};

export const marketSpotTradersPairsHistoricalResponse = {
  data: [
    [
      "kraken",
      "2020-12-10T22:47:16.000Z",
      470500,
      false,
      1.0034,
      67.48077314,
      1607640436470500,
    ],
  ],
  metadata: {
    columns: [
      "exchange",
      "timestamp",
      "timestampNanoseconds",
      "isBuy",
      "price",
      "volume",
      "tradeId",
    ],
    startDate: "2020-12-10T22:38:27.789Z",
    endDate: "2020-12-10T23:38:27.789Z",
  },
};

export const marketSpotTradersInformationResponse = {
  binance: {
    adx_bnb: {
      address: "0x4470bb87d77b963a013db939be332f927f2b992e",
      endDate: 1560988800000,
      startDate: 1607558400000,
    },
  },
};
