export const metricsSymbolLatestResponse = {
  nvt: {
    signal: 18.9654508964007,
  },
  sharpe: {
    historicalVolatility: 3.4682699493683877,
    ratio: 0.15009752606172203,
  },
  stockToFlow: {
    blockNumber: 634274,
    circulation: 18401718.75,
    lastYearCirculation: 17769637.5,
    ratio: 29.1129008335558,
    price: 10261.748846554,
  },
};

export const metricsSymbolHistoricalNvtResponse = {
  data: [
    [
      "2020-06-01T00:00:00.000Z",
      9425.018,
      20.24505675359475,
      18.214890497339766,
    ],
    [
      "2020-06-02T00:00:00.000Z",
      10195.738,
      19.568868084767857,
      18.106646065087002,
    ],
  ],
  metadata: {
    columns: ["timestamp", "price_usd", "nvt_ratio", "nvt_signal"],
  },
};

export const metricsSymbolHistoricalSharpeResponse = {
  data: [
    ["2019-07-29T00:00:00.000Z", 0.533128100455041, 0.17367362185965035],
    ["2019-07-30T00:00:00.000Z", 0.533128100455041, 0.17367362185965035],
  ],
  metadata: {
    columns: ["timestamp", "historical_volatility", "sharpe_ratio"],
  },
};

export const metricsSymbolHistoricalStockResponse = {
  data: [
    [
      "2010-06-14T00:00:00.000Z",
      60917,
      304590000000000,
      85885000000000,
      1.39269792643058,
      0.268401295646387,
    ],
    [
      "2010-06-15T00:00:00.000Z",
      60949,
      304750000000000,
      85945000000000,
      1.39279266927173,
      0.268464676479661,
    ],
  ],
  metadata: {
    columns: [
      "timestamp",
      "blockNumber",
      "circulation",
      "lastYearCirculation",
      "ratio",
      "price",
    ],
  },
};

export const metricsAssetImpliedyieldLatestResponse = [
  {
    instrument: "BTC210430",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "49737.31",
    spot: "49737.6",
    basis: "-0.29",
    apr: -0.0003040240898521156,
    daysToExpiration: 7,
  },
  {
    instrument: "BTC210625",
    settlement: "2021-06-25T00:00:00.000Z",
    price: "51438.06",
    spot: "49737.6",
    basis: "1700.46",
    apr: 0.1980769363333059,
    daysToExpiration: 63,
  },
  {
    instrument: "BTC210924",
    settlement: "2021-09-24T00:00:00.000Z",
    price: "54444.99",
    spot: "49737.6",
    basis: "4707.39",
    apr: 0.2243197429982679,
    daysToExpiration: 154,
  },
];

export const metricsInstrumentImpliedyieldHistoricalResponse = [
  {
    timestamp: "2021-04-17T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "62265.29",
    spot: "61455",
    basis: "810.29",
    apr: 0.37019689203482226,
  },
  {
    timestamp: "2021-04-18T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "60784.13",
    spot: "60085.2",
    basis: "698.93",
    apr: 0.3538162614642763,
  },
  {
    timestamp: "2021-04-19T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "56367.04",
    spot: "56239.8",
    basis: "127.24",
    apr: 0.07507236059613558,
  },
  {
    timestamp: "2021-04-20T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "55964.85",
    spot: "55722.4",
    basis: "242.45",
    apr: 0.15881270368828335,
  },
  {
    timestamp: "2021-04-21T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "56743",
    spot: "56500",
    basis: "243",
    apr: 0.17442477876106194,
  },
  {
    timestamp: "2021-04-22T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "53986.14",
    spot: "53815.2",
    basis: "170.94",
    apr: 0.14492443584712125,
  },
  {
    timestamp: "2021-04-23T00:00:00.000Z",
    settlement: "2021-04-30T00:00:00.000Z",
    price: "51813.87",
    spot: "51730",
    basis: "83.87",
    apr: 0.08453936649084533,
  },
];

export const rankingsResponse = {
  data: [
    {
      blockchain: {
        blockchainId: "408fa195a34b533de9ad9889f076045e",
        name: "Bitcoin",
        slug: "bitcoin",
        symbol: "BTC",
      },
      changeInPriceDaily: "3.66796",
      changeInPriceHourly: "0.361801",
      changeInPriceWeekly: "10.2701",
      currentPrice: "6398.45745521",
      decimals: null,
      marketCap: "113209904073.75656",
      name: "Bitcoin",
      rank: "3",
      specifications: [],
      symbol: "BTC",
      tokenVelocity: null,
      tradeVolume: "19404167524.101",
      transactionVolume: null,
      uniqueAddresses: null,
    },
  ],
  metadata: {
    totalRecords: "2143",
  },
};

export const metricsAssetSupplyLatestResponse = {
  timestamp: "2021-01-26T16:25:49.000Z",
  issuance: "6.25",
  totalSupply: "18611089.79497096",
  circulatingSupply: "18611056",
  maxSupply: "21000000",
};

export const metricsAssetSupplyHistoricalResponse = {
  metadata: {
    startDate: "2021-01-22T00:00:00.000Z",
    endDate: "2021-01-26T16:42:50.026Z",
  },
  data: [
    {
      timestamp: "2021-01-22T00:00:00.000Z",
      issuance: "6.25",
      totalSupply: "18607677.29497096",
      circulatingSupply: "18607618",
      maxSupply: "21000000",
    },
    {
      timestamp: "2021-01-23T00:00:00.000Z",
      issuance: "6.25",
      totalSupply: "18608652.29497096",
      circulatingSupply: "18608487",
      maxSupply: "21000000",
    },
    {
      timestamp: "2021-01-24T00:00:00.000Z",
      issuance: "6.25",
      totalSupply: "18609521.04497096",
      circulatingSupply: "18609437",
      maxSupply: "21000000",
    },
    {
      timestamp: "2021-01-25T00:00:00.000Z",
      issuance: "6.25",
      totalSupply: "18610396.04497096",
      circulatingSupply: "18610293",
      maxSupply: "21000000",
    },
  ],
};

export const tokensPricesHashLatestResponse = [
  {
    address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    circulatingSupply: 1000000,
    dailyPercentChangeUSD: -1.0245,
    dailyVolumeUSD: 3954194.30424895,
    hourlyPercentChangeUSD: 1.53884,
    marketCapUSD: 504322007.06200004,
    name: "Maker",
    priceUSD: 504.322007062,
    symbol: "MKR",
    totalSupply: 1000000,
    weeklyPercentChangeUSD: -7.69287,
  },
];

export const tokensPricesHashHistoricalResponse = {
  metadata: {
    columns: [
      "timestamp",
      "priceUSD",
      "priceETH",
      "hourlyPercentChangeETH",
      "hourlyPercentChangeUSD",
      "dailyPercentChangeETH",
      "dailyPercentChangeUSD",
      "dailyVolumeETH",
      "dailyVolumeUSD",
      "weeklyPercentChangeETH",
      "weeklyPercentChangeUSD",
      "circulatingSupply",
      "totalSupply",
      "marketCapETH",
      "marketCapUSD",
      "isCrossRates",
    ],
    startDate: 1573257600000,
    endDate: 1575849600000,
    decimals: "18",
  },
  data: [
    [
      1573257600000,
      664.99,
      3.62,
      0.4160887656033287,
      -0.49156410160487823,
      1.971830985915493,
      -0.06386991576685226,
      211.5851187808,
      2838.994792207,
      25.694444444444443,
      26.020258298037653,
      "999999.9999999000000000",
      "1000000.0000000000000000",
      "3619999.99999963800000000000000000000000",
      "664990000.00000000000000000000000000000000",
      false,
    ],
    [
      1573344000000,
      664.99,
      3.52,
      0,
      1.3271774242701286,
      -2.7624309392265194,
      -0.42973078190039826,
      74.3948162144,
      2123.3865779946,
      22.0103986135182,
      25.263009182952672,
      "999999.9999999000000000",
      "1000000.0000000000000000",
      "3519999.99999964800000000000000000000000",
      "664990000.00000000000000000000000000000000",
      false,
    ],
  ],
};
