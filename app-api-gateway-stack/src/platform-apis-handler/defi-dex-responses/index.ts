export const lendingExchangesInformationResponse = [
  {
    protocolId: "aave_v2",
    address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
    decimals: "18",
    protocolChainId: "ethereum",
    protocolName: "aave",
    protocolVersion: "v2",
    symbol: "zrx",
    startDate: "2021-02-26T06:00:00.000Z",
    endDate: "2021-03-22T23:00:00.000Z",
  },
];

export const lendingExchangesLatestResponse = [
  {
    protocolId: "cream_v1",
    protocolName: "c.r.e.a.m. finance",
    symbol: "bond",
    address: "0x0391d2021f89dc339f60fff84546ea23e337750f",
    lend: "3.923599664131272",
    borrow: "11.99269313381408",
    borrowStable: null,
    debtTotal: null,
    supply: "958.114471688707718403",
    tvl: "99664131272.9723482309",
  },
];

export const lendingExchangesHistoricalResponse = {
  metadata: {
    columns: [
      "protocolId",
      "address",
      "timestamp",
      "lend",
      "borrow",
      "borrowStable",
      "debtTotal",
      "supply",
      "tvl",
    ],
    startDate: 1626307200000,
    endDate: 1628812800000,
  },
  data: {
    "cream_v1,0x0391d2021f89dc339f60fff84546ea23e337750f,1628805600000,4.326982866856066,12.617551105974112,,,1004.405882401497546928,99664131272.9723482309":
      null,
  },
};

export const liquidityInformationResponse = {
  curvev1: {
    RC_bBADGER_5_DAI_2021_6_30_3Crv: {},
    RC_WETH_1400_DAI_2021_7_31_3Crv: {},
    RC_BDI_150_DAI_2021_6_30_3Crv: {},
    ycDAI_ycUSDC_ycUSDT_PAX: {},
    MBTC_crvRenWSBTC: {},
    BBTC_crvRenWSBTC: {},
    RC_DEFI5_60_DAI_2021_5_31_3Crv: {},
    xCOVER_3Crv: {},
    EURS_sEUR: {},
    USDN_3Crv: {},
  },
};

export const liquidityPoolLatestResponse = [
  {
    exchange: "Miniswap",
    exchangeId: "0x2294577031f113df4782b881cf0b140e94209a6f",
    pairAddress: "0x2da3c570eb567db1945ac119103978f28f6ea803",
    pair: "MINI_USDT",
    startDate: null,
    endDate: null,
    baseAddress: "0x4d953cf077c0c95ba090226e59a18fcf97db44ec",
    baseName: "MINISWAP",
    baseSymbol: "MINI",
    baseDecimals: "18",
    quoteAddress: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    quoteName: "Tether USD",
    quoteSymbol: "USDT",
    quoteDecimals: "6",
    blockchainNetworkId: "1",
    blockchainId: "1c9c969065fcd1cf",
    poolAddresses: [],
    pairName: null,
    poolNames: ["MINISWAP", "Tether USD"],
    poolSymbols: ["MINI", "USDT"],
    poolDecimals: [18, 6],
    poolUnderlyingAddresses: null,
    poolUnderlyingNames: null,
    poolUnderlyingSymbols: null,
    poolUnderlyingDecimals: null,
  },
];

export const liquidityPoolHistoricalResponse = {
  metadata: {
    dexPairs: {
      exchangeId: "0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d",
      exchangeName: "",
      pairAddress: "0x60a26d69263ef43e9a68964ba141263f19d71d51",
      pair: "DAI_WETH",
      pairNormalized: "dai_weth",
      baseAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
      quoteAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    },
    startDate: "2019-12-10T23:42:25.997Z",
    endDate: "2020-12-10T23:42:25.997Z",
  },
  data: [
    {
      exchangeId: "0x9deb29c9a4c7a88a3c0257393b7f3335338d9a9d",
      pairAddress: "0x60a26d69263ef43e9a68964ba141263f19d71d51",
      address: "0x6b175474e89094c44da98b954eedeac495271d0f",
      timestamp: 1629912617000,
      transactionHash:
        "0x6484f3e97fc01910ab717e1c7f6fcaaf59b8032feff95c099338ff6f59ce1be7",
      transactionIndex: 87,
      logIndex: 120,
      amount: "1411611.324297957739394798",
      liquidityPrice: "0.00031220437746571611",
    },
  ],
};

export const ohlcvInformationResponse = {
  uniswapv2: {
    "...": null,
  },
  "0x7a31c8fd5ced2bd6157b9c2dc345ffd680004e9b": {
    "...": null,
  },
  curvev1: {
    BBTC_crvRenWSBTC: {
      pairSymbol: "BBTC+crvRenWSBTC",
      address: "0x071c661b4deefb59e2a3ddb20db036821eee8f4b",
      baseAddress: "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
      baseName: "Binance Wrapped BTC",
      baseSymbol: "BBTC",
      baseDecimals: "8",
      quoteAddress: "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3",
      quoteName: "Curve.fi renBTC/wBTC/sBTC",
      quoteSymbol: "crvRenWSBTC",
      quoteDecimals: "18",
      blockchainNetworkId: "1",
      blockchainId: "1c9c969065fcd1cf",
      poolAddresses: [
        "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
        "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3",
      ],
      pairName: "bbtc",
      poolNames: ["Binance Wrapped BTC", "Curve.fi renBTC/wBTC/sBTC"],
      poolSymbols: ["BBTC", "crvRenWSBTC"],
      poolDecimals: [8, 18],
      poolUnderlyingAddresses: [
        "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
        "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
      ],
      poolUnderlyingNames: [
        "Binance Wrapped BTC",
        "renBTC",
        "Wrapped BTC",
        "Synth sBTC",
      ],
      poolUnderlyingSymbols: ["BBTC", "renBTC", "WBTC", "sBTC"],
      poolUnderlyingDecimals: [8, 8, 8, 18],
    },
  },
};

export const ohlcvPoolLatestResponse = {
  "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7": {
    exchangeName: "curvev1",
    exchangeId: "0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5",
    pair: "DAI+USDC+USDT",
    pairAddress: "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
    baseAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    baseCurrencyAddress: null,
    baseName: "Dai Stablecoin",
    baseSymbol: "DAI",
    baseDecimals: "18",
    quoteAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    quoteCurrencyAddress: null,
    quoteName: "USD Coin",
    quoteSymbol: "USDC",
    quoteDecimals: "6",
    blockchainNetworkId: "1",
    blockchainId: "1c9c969065fcd1cf",
    timestamp: 1629309840000,
    index: null,
    poolAddresses: [
      "0x6b175474e89094c44da98b954eedeac495271d0f",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
    ],
    pairName: "3pool",
    poolNames: ["Dai Stablecoin", "USD Coin", "Tether USD"],
    poolSymbols: ["DAI", "USDC", "USDT"],
    poolDecimals: [18, 6, 6],
    poolUnderlyingAddresses: [
      "0x6b175474e89094c44da98b954eedeac495271d0f",
      "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "0xdac17f958d2ee523a2206206994597c13d831ec7",
    ],
    poolUnderlyingNames: ["Dai Stablecoin", "USD Coin", "Tether USD"],
    poolUnderlyingSymbols: ["DAI", "USDC", "USDT"],
    poolUnderlyingDecimals: [18, 6, 6],
    pairNormalized: "dai_usdc_usdt",
    milliseconds: 1629309840000,
    open: "9.99160704695092935265e+23",
    high: "9.99160704695092935265e+23",
    low: "9.99160704695092935265e+23",
    close: "9.99160704695092935265e+23",
    volume: "24979017617377323.381625",
    trades: 1,
  },
};

export const ohlcvPoolHistoricalResponse = {
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
    "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7": [
      [
        1628899200000,
        "0.999997282875",
        "9.9938614483120546973564257535254528938990082e+23",
        "0.999997282875",
        "0.999997282875",
        "14737935834390532424.797914",
        "187",
        "0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5",
        "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
        "0x6b175474e89094c44da98b954eedeac495271d0f",
        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      ],
    ],
  },
};

export const defiMetricLastestResponse = [
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T07:00:00.000Z",
    liquidityTotalWETH: "696597.309479738872001810",
    liquidityTotalUSD: "493048636.201664275395561830",
    pairsTradedTotal: 52,
    pairsCumulativeTotal: 27293,
    tradesTotal: 85,
  },
];

export const defiMetricHistoricalResponse = [
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T06:00:00.000Z",
    liquidityTotalWETH: "696597.309479738872001810",
    liquidityTotalUSD: "493048636.201664275395561830",
    pairsTradedTotal: 52,
    pairsCumulativeTotal: 27293,
    tradesTotal: 85,
  },
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T07:00:00.000Z",
    liquidityTotalWETH: "696597.309479738872001810",
    liquidityTotalUSD: "493048636.201664275395561830",
    pairsTradedTotal: 52,
    pairsCumulativeTotal: 27293,
    tradesTotal: 85,
  },
];

export const defiMetricsExchangesExchangeAssetsAssetLatestResponse = [
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T07:00:00.000Z",
    liquidityTotalNative: "493048636.201664275395561830",
    liquidityTotalUSD: "121952471.481071009865993322",
  },
];

export const defiMetricsExchangesExchangeAssetsAssetHistoricalResponse = [
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T06:00:00.000Z",
    liquidityTotalNative: "493048636.201664275395561830",
    liquidityTotalUSD: "335.274877053807418927",
  },
  {
    exchangeId: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    timestamp: "2020-12-29T07:00:00.000Z",
    liquidityTotalNative: "493048636.201664275395561830",
    liquidityTotalUSD: "335.274877053807418927",
  },
];

export const defiPricesAssetInformationResponse = [
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    startDate: "2020-05-05T00:00:00.000Z",
    endDate: "2021-10-05T18:55:00.000Z",
  },
];

export const defiPricesAssetsAssetLatestResponse = {
  timestamp: 1633462380000,
  asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
  price: "0.00029274",
  volume: "0.70990788",
};

export const defiPricesAssetsAssetHistoricalResponse = {
  metadata: {
    startDate: 1633374914078,
    endDate: 1633461314078,
  },
  data: [
    {
      timestamp: 1633462380000,
      asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
      price: "0.00029319",
      volume: "0.46585033",
    },
  ],
};

export const defiPairsInformationResponse = [
  {
    baseAddress: "0x0000000000004946c0e9f43f4dee607b0ef1fa1c",
    quoteAddress: "0x0000000000b3f879cb30fe243b4dfee438691c04",
    startDate: 1595462400000,
    endDate: 1614556800000,
  },
];

export const defiPairsBasesBaseQuotesQuoteLatestResponse = {
  timestamp: 1615227480000,
  pair: "DAI_WETH",
  price: "0.00057554433329796909",
};

export const defiTradesInformationResponse = {
  curvev1: {
    BBTC_crvRenWSBTC: {
      pairSymbol: "BBTC+crvRenWSBTC",
      address: "0x071c661b4deefb59e2a3ddb20db036821eee8f4b",
      baseAddress: "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
      baseName: "Binance Wrapped BTC",
      baseSymbol: "BBTC",
      baseDecimals: "8",
      quoteAddress: "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3",
      quoteName: "Curve.fi renBTC/wBTC/sBTC",
      quoteSymbol: "crvRenWSBTC",
      quoteDecimals: "18",
      blockchainNetworkId: "1",
      blockchainId: "1c9c969065fcd1cf",
      poolAddresses: [
        "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
        "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3",
      ],
      pairName: "bbtc",
      poolNames: ["Binance Wrapped BTC", "Curve.fi renBTC/wBTC/sBTC"],
      poolSymbols: ["BBTC", "crvRenWSBTC"],
      poolDecimals: [8, 18],
      poolUnderlyingAddresses: [
        "0x9be89d2a4cd102d8fecc6bf9da793be995c22541",
        "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        "0xfe18be6b3bd88a2d2a7f928d00292e7a9963cfc6",
      ],
      poolUnderlyingNames: [
        "Binance Wrapped BTC",
        "renBTC",
        "Wrapped BTC",
        "Synth sBTC",
      ],
      poolUnderlyingSymbols: ["BBTC", "renBTC", "WBTC", "sBTC"],
      poolUnderlyingDecimals: [8, 8, 8, 18],
    },
  },
};

export const defiTradesPoolHistoricalResponse = {
  data: [
    [
      "0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5",
      "2021-08-01T05:07:10.000Z",
      0,
      false,
      9.992128254385849e23,
      20790717587013860,
      "0x28a7a996a01a6928cd806dbc0b6df7947a9d5e59f8b6f3a823e32e99fb530c9b",
      68,
      "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
      "0.000000020807096404",
      "0",
      "0",
      "20790717587013859.65421",
      "0xea3b329ffd533073e83df0d931ba159719d8bf7c",
      "0x0000000000f4def5f3572c846b1483daf4588d8f",
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
      "tradeId",
      "logIndex",
      "pairAddress",
      "amountInBase",
      "amountInQuote",
      "amountOutBase",
      "amountOutQuote",
      "fromAddress",
      "toAddress",
    ],
    startDate: "2020-12-10T22:38:27.789Z",
    endDate: "2020-12-10T23:38:27.789Z",
    dexPairs: {
      "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7": {
        exchangeId: "0x90e00ace148ca3b23ac1bc8c240c2a7dd9c2d7f5",
        pairAddress: "0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7",
        timestamp: "2021-04-07T23:54:41.000Z",
        timestampNanoseconds: 0,
        transactionIndex: 16,
        updatedAt: "2021-08-01T05:13:08.507Z",
        pair: "DAI+USDC+USDT",
        baseAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
        baseCurrencyAddress: null,
        baseName: "Dai Stablecoin",
        baseSymbol: "DAI",
        baseDecimals: "18",
        quoteAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        quoteCurrencyAddress: null,
        quoteName: "USD Coin",
        quoteSymbol: "USDC",
        quoteDecimals: "6",
        blockchainNetworkId: "1",
        blockchainId: "1c9c969065fcd1cf",
        index: null,
        poolAddresses: [
          "0x6b175474e89094c44da98b954eedeac495271d0f",
          "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
        ],
        pairName: "3pool",
        poolNames: ["Dai Stablecoin", "USD Coin", "Tether USD"],
        poolSymbols: ["DAI", "USDC", "USDT"],
        poolDecimals: [18, 6, 6],
        poolUnderlyingAddresses: [
          "0x6b175474e89094c44da98b954eedeac495271d0f",
          "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "0xdac17f958d2ee523a2206206994597c13d831ec7",
        ],
        poolUnderlyingNames: ["Dai Stablecoin", "USD Coin", "Tether USD"],
        poolUnderlyingSymbols: ["DAI", "USDC", "USDT"],
        poolUnderlyingDecimals: [18, 6, 6],
        pairNormalized: "dai_usdc_usdt",
      },
    },
  },
};

export const defiTwapAssetInformationResponse = [
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    startDate: "2020-05-05T00:00:00.000Z",
    endDate: "2021-10-05T18:55:00.000Z",
  },
];

export const defiTwapAssetsAssetLatestResponse = {
  timestamp: 1633462380000,
  asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
  price: "0.00029435",
  volume: "3.52360483",
  twap: "0.00029435",
};

export const defiTwapAssetsAssetHistoricalResponse = {
  metadata: {
    startDate: 1633374914078,
    endDate: 1633461314078,
  },
  data: [
    {
      timestamp: 1633462380000,
      asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
      price: "0.00028842",
      volume: "15991.83836580",
      twap: "834458306374501235.99692312",
    },
  ],
};

export const defiTwapPairsInformationResponse = [
  {
    baseAddress: "0x00000000000045166c45af0fc6e4cf31d9e14b9a",
    quoteAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    startDate: "2021-04-18T00:00:00.000Z",
    endDate: "2021-09-27T00:00:00.000Z",
  },
];

export const defiTwapPairsBasesBaseQuotesQuoteLatestResponse = {
  timestamp: 1633138800000,
  pair: "DAI_WETH",
  price: "0.00030085",
  volume: "53.92542645",
  twap: "0.00030085",
};

export const defiTwapPairsBasesBaseQuotesQuoteHistoricalResponse = {
  metadata: {
    startDate: 1617739560000,
    endDate: 1617739560000,
  },
  data: [
    {
      timestamp: 1617739560000,
      pair: "DAI_WETH",
      price: "0.00047200434465900475",
      twap: "0.00047200434465900475",
      volume: "5.510246761054205304",
      baseAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
      baseSymbol: "DAI",
      quoteAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      quoteSymbol: "WETH",
    },
  ],
};

export const defiVwapAssetInformationResponse = [
  {
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    startDate: "2020-05-05T00:00:00.000Z",
    endDate: "2021-10-05T18:55:00.000Z",
  },
];

export const defiVwapAssetsAssetLatestResponse = {
  timestamp: 1633462380000,
  asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
  price: "0.00029435",
  volume: "3.52360483",
  vwap: "0.00029435",
};

export const defiVwapAssetsAssetHistoricalResponse = {
  metadata: {
    startDate: 1633374914078,
    endDate: 1633461314078,
  },
  data: [
    {
      timestamp: 1633462380000,
      asset: "0x6b175474e89094c44da98b954eedeac495271d0f",
      price: "0.00028842",
      volume: "15991.83836580",
      vwap: "834458306374501235.99692312",
    },
  ],
};

export const defiVwapPairsInformationResponse = [
  {
    baseAddress: "0x00000000000045166c45af0fc6e4cf31d9e14b9a",
    quoteAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    startDate: "2021-04-18T00:00:00.000Z",
    endDate: "2021-09-27T00:00:00.000Z",
  },
];

export const defiVwapPairsBasesBaseQuotesQuoteLatestResponse = {
  timestamp: 1633138800000,
  pair: "DAI_WETH",
  price: "0.00030085",
  volume: "53.92542645",
  vwap: "0.00030085",
};

export const defiVwapPairsBasesBaseQuotesQuoteHistoricalResponse = {
  metadata: {
    startDate: 1617739560000,
    endDate: 1617739560000,
  },
  data: [
    {
      timestamp: 1617739560000,
      pair: "DAI_WETH",
      price: "0.00047200434465900475",
      vwap: "0.00047200434465900475",
      volume: "5.510246761054205304",
      baseAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
      baseSymbol: "DAI",
      quoteAddress: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      quoteSymbol: "WETH",
    },
  ],
};
