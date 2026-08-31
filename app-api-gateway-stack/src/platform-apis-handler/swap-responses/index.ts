export const swapExchangesInformationResponse = {
  binance: {
    BCHUSDT: {
      funding_rate: {
        startDate: "2020-08-02T00:00:00.000Z",
        endDate: "2020-12-29T08:00:00.003Z",
      },
      liquidation_order: {
        startDate: "2020-07-18T08:58:12.286Z",
        endDate: "2020-12-29T09:10:48.543Z",
      },
      long_short_ratio: {
        startDate: "2020-10-06T00:00:00.000Z",
        endDate: "2020-12-29T09:25:00.000Z",
      },
      ohlcv: {
        startDate: "2019-12-19T08:57:00.000Z",
        endDate: "2020-12-29T09:28:00.000Z",
      },
      order_book_event: {
        startDate: "2020-07-23T06:02:00.000Z",
        endDate: "2020-12-29T09:29:00.000Z",
      },
      order_book_snapshot: {
        startDate: "2020-10-23T06:46:00.000Z",
        endDate: "2020-12-29T09:29:00.000Z",
      },
      ticker: {
        startDate: "2020-11-03T11:21:00.000Z",
        endDate: "2020-12-29T09:29:00.000Z",
      },
      trade: {
        startDate: "2020-10-19T08:30:16.000Z",
        endDate: "2020-12-29T09:29:23.000Z",
      },
    },
  },
};

export const swapExchangesReferenceResponse = {
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

export const swapFundingRatesInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapFundingRatesInstrumentLatestResponse = {
  bitmex: {
    timestamp: 1598500800000,
    insertionTimestamp: "2020-08-27T05:00:00.000Z",
    fundingInterval: "2000-01-01T01:00:00.000Z",
    fundingRate: 0.0001,
    fundingRateDaily: 0.0003000000000003,
  },
};

export const swapFundingRatesInstrumentHistoricalResponse = {
  metadata: {
    columns: [
      "timestamp",
      "insertionTimestamp",
      "fundingInterval",
      "fundingRate",
      "fundingRateDaily",
    ],
    startDate: 1598499778860,
    endDate: 1598521378860,
  },
  data: {
    binance: [
      [
        1598500800000,
        "2020-08-27T05:00:00.000Z",
        "2000-01-01T01:00:00.000Z",
        0,
        1,
        0.00030000000000003,
      ],
    ],
  },
};

export const swapInsuranceFundInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapInsuranceFundInstrumentLatestResponse = [
  {
    exchange: "huobi",
    timestamp: 1609660800000,
    fund: 4721.219613658744,
  },
];

export const swapInsuranceFundInstrumentHistoricalResponse = {
  metadata: {
    startDate: 1609660800000,
    endDate: 1609660800000,
  },
  data: [
    {
      exchange: "huobi",
      timestamp: 1609660800000,
      fund: 4721.219613658744,
    },
  ],
};

export const swapLiquidationsInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapLiquidationsInstrumentHistoricalResponse = {
  metadata: {
    startDate: "2020-07-20T00:00:00.000Z",
    endDate: "2020-07-21T00:00:00.000Z",
  },
  data: [
    {
      exchange: "binance",
      timestamp: "2020-07-20T01:42:26.177Z",
      originalQuantity: 283.2,
      price: 2.939,
      side: "SELL",
      status: "FILLED",
      type: "LIMIT",
      timeInForce: "IOC",
    },
  ],
};

export const swapOhlcvInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapOhlcvInstrumentLatestResponse = [
  {
    exchange: "binance",
    timestamp: "2020-09-04T22:43:00.000Z",
    open: 2.8395,
    high: 2.8456,
    low: 2.8265,
    close: 2.8387,
    volume: 22136.31,
  },
];

export const swapOhlcvInstrumentHistoricalResponse = {
  metadata: {
    startDate: "2020-07-25T00:00:00.000Z",
    endDate: "2020-07-26T00:00:00.000Z",
  },
  data: [
    {
      exchange: "binance",
      timestamp: "2020-07-25T00:00:00.000Z",
      open: 3.0294,
      high: 3.0331,
      low: 3.0271,
      close: 3.0331,
      volume: 600.27,
    },
  ],
};

export const swapOpenInterestInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapOpenInterestInstrumentLatestResponse = [
  {
    exchange: "binance",
    timestamp: "2020-09-04T20:00:00.000Z",
    value: 4010015.1,
  },
];

export const swapOpenInterestInstrumentHistoricalResponse = {
  metadata: {
    startDate: "2020-07-25T00:00:00.000Z",
    endDate: "2020-07-26T00:00:00.000Z",
  },
  data: [
    {
      exchange: "binance",
      timestamp: "2020-07-25T00:00:00.000Z",
      open: 3.0294,
      high: 3.0331,
      low: 3.0271,
      close: 3.0331,
      volume: 600.27,
    },
  ],
};

export const swapOrderBookEventsInformationResponse = [
  {
    exchange: "bitmex",
    instrument: "ADAU20",
    startDate: "2020-08-10T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapOrderBookEventsInstrumentHistoricalResponse = {
  metadata: {
    columns: ["exchange", "timestamp", "timestampNanoseconds", "isBid", "data"],
    startDate: "2020-08-17 06:00:00",
    endDate: "2020-08-17 07:00:00",
  },
  data: [
    [
      "binance",
      "2020-08-17 06:03:00",
      null,
      false,
      [
        [11800.76, 1.011, 0],
        [11800.96, 1.013, 0],
        [11801, 0.3, 0],
        [11854.61, 0, 0],
      ],
    ],
    [
      "binance",
      "2020-08-17 06:05:00",
      null,
      true,
      [
        [11821.2, 0, 0],
        [11821.21, 1.006, 0],
      ],
    ],
  ],
};

export const swapOrderBookSnapshotsInformationResponse = [
  {
    exchange: "bitmex",
    instrument: "ADAU20",
    startDate: "2020-08-10T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapOrderBookSnapshotsInstrumentHistoricalResponse = {
  metadata: {
    columns: ["exchange", "timestamp", "timestampNanoseconds", "isBid", "data"],
    startDate: "2020-08-17 06:00:00",
    endDate: "2020-08-17 07:00:00",
  },
  data: [
    [
      "binance",
      "2020-08-17 06:03:00",
      null,
      false,
      [
        [11800.76, 1.011, 0],
        [11800.96, 1.013, 0],
        [11801, 0.3, 0],
        [11854.61, 0, 0],
      ],
    ],
    [
      "binance",
      "2020-08-17 06:05:00",
      null,
      true,
      [
        [11821.2, 0, 0],
        [11821.21, 1.006, 0],
      ],
    ],
  ],
};

export const swapTickersInformationResponse = [
  {
    exchange: "binance",
    instrument: "AAVEUSDT",
    startDate: "2020-11-03T00:00:00.000Z",
    endDate: "2020-11-10T00:00:00.000Z",
  },
];

export const swapTickersInstrumentLatestResponse = [
  {
    exchange: "binance",
    timestamp: 1604994181218,
    bid: 0.2565,
    ask: 0.2566,
    mid: 0.25655,
    last: 0,
  },
];

export const swapTickersInstrumentHistoricalResponse = {
  metadata: {
    startDate: 1604401200000,
    endDate: 1604404740000,
  },
  data: [
    {
      exchange: "binance",
      timestamp: 1604402460964,
      bid: 28.525,
      ask: 28.558,
      mid: 28.5415,
      last: 0,
    },
    {
      exchange: "binance",
      timestamp: 1604402520833,
      bid: 28.548,
      ask: 28.582,
      mid: 28.565,
      last: 0,
    },
    {
      exchange: "binance",
      timestamp: 1604402580830,
      bid: 28.544,
      ask: 28.584,
      mid: 28.564,
      last: 0,
    },
  ],
};

export const swapTradersInformationResponse = [
  {
    exchange: "binance",
    instrument: "ADAUSDT",
    startDate: "2018-04-17T00:00:00.000Z",
    endDate: "2020-09-04T00:00:00.000Z",
  },
];

export const swapTradersInstrumentHistoricalResponse = {
  data: [["bitmex", "2020-09-23T14:42:15.004Z", 0, false, 10476.5, 13, 0]],
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
    startDate: "2020-09-23T14:42:15.702Z",
    endDate: "2020-09-23T15:42:15.702Z",
  },
};
