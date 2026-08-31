export const holdersLatestResponse = [
  {
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    holderAddress: "0xb1690c08e213a35ed9bab7b318de14420fb57d8c",
    timestamp: 1575920861000,
    holderFirstTimestamp: "2017-11-23T18:44:21.000Z",
    numTokens: "209736",
    decimals: "0",
  },
  {
    tokenAddress: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
    holderAddress: "0x68b42e44079d1d0a4a037e8c6ecd62c48967e69f",
    timestamp: 1575893956000,
    holderFirstTimestamp: "2018-03-06T19:03:17.000Z",
    numTokens: "202121",
    decimals: "0",
  },
];

export const holdersHistoricalResponse = {
  data: [
    {
      timestamp: 1574985600000,
      "0xb1690c08e213a35ed9bab7b318de14420fb57d8c": 209760,
      "0xc7af99fe5513eb6710e6d5f44f9989da40f27f26": 71430,
    },
    {
      timestamp: 1575072000000,
      "0xb1690c08e213a35ed9bab7b318de14420fb57d8c": 210006,
      "0xc7af99fe5513eb6710e6d5f44f9989da40f27f26": 71516,
    },
    {
      timestamp: 1575158400000,
      "0xb1690c08e213a35ed9bab7b318de14420fb57d8c": 209913,
      "0xc7af99fe5513eb6710e6d5f44f9989da40f27f26": 71044,
    },
  ],
  metadata: {
    columns: ["holder*", "timestamp"],
    decimals: "0",
  },
};

export const metricLastestResponse = {
  priceUSD: "418.9650",
  transfersTotal: "126",
  transferedValueTotal: "1107.33716042075807677",
  transferedValueAverage: "8.788390162069508546",
  transferedValueTotalUSD: "463935.5134",
  transferedValueAverageUSD: "3682.0279",
};

export const metricHistoricalResponse = [
  {
    timestamp: "2020-05-31T00:00:00.000Z",
    priceUSD: "1.5779",
    transfersTotal: "1708",
    transferedValueTotal: "3776546.97171975838093617",
    transferedValueAverage: "2211.093074777376101251",
    transferedValueTotalUSD: "5959161.3814",
    transferedValueAverageUSD: "3488.9704",
  },
  {
    timestamp: "2020-06-01T00:00:00.000Z",
    priceUSD: "1.5078",
    transfersTotal: "4111",
    transferedValueTotal: "12660492.298071148108400581",
    transferedValueAverage: "3079.662441758975458137",
    transferedValueTotalUSD: "19089361.5720",
    transferedValueAverageUSD: "4643.4837",
  },
];

export const metricVelocityResponse = {
  data: [
    [1549504680000, "0.000002905148358663806064"],
    [1549504740000, "0.000002178861268997854548"],
    [1549504800000, "0"],
    [1549504860000, "0.000001452574179331903032"],
    [1549504920000, "0"],
  ],
  metadata: {
    columns: ["timestamp", "velocity"],
    endDate: 1549504920000,
    startDate: 1549504680000,
  },
};

export const metricVolumeRespone = {
  data: [
    [1548892800000, "2791"],
    [1548979200000, "3094"],
    [1549065600000, "3886"],
    [1549152000000, "3495"],
    [1549238400000, "2363"],
  ],
  metadata: {
    columns: ["timestamp", "volume"],
    endDate: 1549238400000,
    startDate: 1548892800000,
  },
};

export const rankingsResponse = {
  data: [
    {
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      changeInPrice: "-0.00074688",
      changeInPriceHourly: "0.00000000",
      changeInPriceDaily: "-0.00074688",
      changeInPriceWeekly: "0.00130082",
      currentPrice: "1.00076667",
      decimals: "6",
      isERC20: true,
      isERC721: false,
      isERC777: false,
      isERC884: false,
      isERC998: false,
      marketCap: "17716572000.04991444",
      liquidMarketCap: "17716572000.04991444",
      name: "Tether USD",
      rank: "1",
      symbol: "USDT",
      circulatingSupply: "17702999700.27970000",
      totalSupply: "10166574840.00000000",
      maxSupply: "0.00000000",
      tokenVelocity: "0.000023795919845901611442",
      transactionVolume: "18386",
      uniqueAddresses: "92070",
      tradeVolume: "40404622.93326587",
    },
  ],
};

export const rankingsHistoricalResponse = {
  metadata: {
    startDate: 1567371953898,
    endDate: 1569963953898,
  },
  data: [
    {
      timestamp: 1567296000000,
      snapshot: [
        {
          timestamp: 1567296000000,
          address: "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
          changeInPrice: 6.141841602673805,
          changeInPriceHourly: 6.792411896430253,
          changeInPriceDaily: 6.141841602673805,
          changeInPriceWeekly: -14.556832887253165,
          currentPrice: 4.1209589196,
          decimals: 18,
          isERC20: true,
          isERC721: false,
          isERC777: false,
          isERC884: false,
          isERC998: false,
          marketCap: 2060479459.8,
          liquidMarketCap: 1970175964.1730235,
          name: "HuobiToken",
          platform: "ethereum",
          rank: 1,
          ranking: 1,
          symbol: "HT",
          tradeVolume: 2985965.4700927003,
          circulatingSupply: 478086776.0662507,
          totalSupply: 500000000,
          maxSupply: null,
          tokenVelocity: 0.00002384,
          transactionVolume: 9798,
          uniqueAddresses: 2757,
        },
      ],
    },
  ],
};

export const transfersResponse = {
  totalRecords: 69918,
  records: [
    {
      transactionHash:
        "0x281d6478dee6d20da7e9293991cc68085532a915760f23d77ffa9923edb523de",
      blockHash:
        "0x5b24ad74b3b6b7adb83e0ba4996726db5b91392a925bb54462c1d9833e921a4f",
      blockNumber: "7252428",
      tokenAddress: "0x26fb86579e371c7aedc461b2ddef0a8628c93d3b",
      amount: "20000000000000000000",
      timestamp: 1550825454000,
      timestampNanoseconds: 0,
      logIndex: 163,
      blockchainId: "1c9c969065fcd1cf",
      to: ["0x06012c8cf97bead5deae237070f9587f8e7a266d"],
      from: "0x41efb7f2fa8e27a5c089082e8a61f15f748f7e0b",
      decimals: "18",
      name: "BORA",
      symbol: "BORA",
      isERC20: true,
      isERC721: false,
      isERC777: false,
      isERC884: false,
      isERC998: false,
    },
  ],
};

export const suppliesLastestResponse = {
  decimals: "18",
  circulatingSupply: "1000001.0000081356704131",
  totalBurned: "1000000",
  totalMinted: "2000000",
  totalSupply: "1000000",
  totalTransfers: "577586",
};

export const suppliesHistoricalResponse = {
  metadata: {
    columns: ["timestamp", "numHolders", "circulatingSupply", "totalSupply"],
    startDate: 1573257600000,
    endDate: 1575849600000,
    decimals: "18",
  },
  data: [
    [
      1573257600000,
      15460,
      "1000000000000000000000000",
      "1000000000000000000000000",
    ],
    [
      1573344000000,
      15484,
      "1000000000000000000000000",
      "1000000000000000000000000",
    ],
  ],
};
