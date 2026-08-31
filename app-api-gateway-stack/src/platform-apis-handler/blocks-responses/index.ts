export const blocksResponse = [
  {
    baseFeePerGas: 15,
    burntFees: 12055890,
    difficulty: "2040681273327616",
    duration: 23000,
    extraData: "0x50505945206e616e6f706f6f6c2e6f7267",
    gasLimit: "8000029",
    gasUsed: "7907944",
    hash: "0x6d436014fea6f2e4c47e1d57a1eae46ae89ffeb2eec7afbc5e456d79a4b71d9f",
    logsBloom: "0x0a5024...",
    miner: {
      address: "0x52bc44d5378309ee2abf1539bf71de1b7d7be3b5",
    },
    mixHash:
      "0xe35ae7ca4932acba6f787aa9112d95b73398fa0be3533edf2f9d00a3aa288ebf",
    nonce: "14950604792474033885",
    numTransactions: 122,
    numUncles: 0,
    number: "7997770",
    parent: {
      hash: "0x4bc30451f1cd6db989505c184b4bc0a324892ebd19b9da6017e60c8b792be2a6",
      number: 7997769,
    },
    receiptsRoot:
      "0x3e80a185e55b24507295b3c7b948c3abbda3782154a0ee7a02e39219fe7a8563",
    reward: "2061984109629473573",
    rewardFee: "61984109629473573",
    rewardUncle: "0",
    sha3Uncles:
      "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    size: 25213,
    stateRoot:
      "0x7b3376cd82bc7a559bb5e503aeb7c403dffaf62f876b1952fb36ef6b668bb599",
    timestamp: "2019-06-20T22:33:20.000Z",
    totalDifficulty: "10686260623453898383232",
    transactionsRoot:
      "0x94b2b3e46d067d0df314d6dd83ae681feeb0fe444386c87858e47e2b7a35f276",
  },
];

export const blocksByIdResponse = {
  baseFeePerGas: 15,
  burntFees: 12055890,
  difficulty: "2957101900364072",
  duration: 23000,
  extraData: "0x76697231",
  gasLimit: "8000029",
  gasUsed: "7992790",
  hash: "0xeddb0590e1095fbe51205a51a297daef7259e229af0432214ae6cb2c1f750750",
  logsBloom: "0x007412...",
  miner: {
    address: "0xb2930b35844a230f00e51431acae96fe543a0347",
  },
  mixHash: "0x1f7cf01e11ff0a3c0dffe05f221943f03c38e48247996230edf435ec77c7a301",
  nonce: "3191105210499409716",
  numTransactions: 118,
  numUncles: "0",
  number: "7280000",
  parent: {
    hash: "0x21506036220aee9bcfd42db8219d75d8d2bb2e4a03cad73748cae26b2c4d282d",
    number: 7279999,
  },
  receiptsRoot:
    "0xbea5cd80cb9a2264ea6d48320cae033f863592771513ee1addcabb40327db129",
  sha3Uncles:
    "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 21618,
  stateRoot:
    "0x1e302241298f913b30f7a0df60272c9983d8d8726932f66582f182bd99ef42bc",
  timestamp: "2019-02-28T19:52:04.000Z",
  totalDifficulty: "9295093842767230183255",
  transactionsRoot:
    "0x4eb851a13c63ad37eb8e7ca618cc23987469fc347539689a28484c5d1ccd31d7",
  unclesReward: null,
};

export const blockFunctionsResponse = [
  {
    blockNumber: "7000000",
    contractCodeAddress: "",
    depth: 0,
    error: "",
    from: "0x1babc9d756951648217c8f0597e126eeeaff24ad",
    initialGas: "36744",
    input:
      "0xa9059cbb000000000000000000000000a93b5270d6bfb419f31b9d6ebc458fe8c494f3b00000000000000000000000000000000000000000000000056bc75e2d63100000",
    leftOverGas: "22946",
    messageIndex: 0,
    opcode: "CALL",
    returnValue:
      "0x0000000000000000000000000000000000000000000000000000000000000001",
    timestamp: "2019-01-02T22:09:12.000Z",
    to: ["0x07241118626a7bbb604be4b9ef8ef12e78fd0871"],
    transactionHash:
      "0x232e44551d0830f1462b039fb225894825d1582fce5ef9b38c13b7e413ba1f28",
    value: "0",
  },
];

export const blockLogsResponse = {
  records: [
    {
      address: {
        address: "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
        nameNormalized: "Enjin Coin",
      },
      data: "0x0000000000000000000000000000000000000000000000878678326eac900000",
      logIndex: 99,
      number: "7280000",
      removed: false,
      timestamp: "2019-02-28T19:52:04.000Z",
      topics: [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x00000000000000000000000067f30fc137a07629046b458b6ed87a4621c8e0a0",
        "0x0000000000000000000000005b7934cdbb5cd076bd486e0f017aeb777bf0d04c",
      ],
      transactionHash:
        "0x019a2991f9ebbce1566fde3b13e24c532be0df3ddf8f93f4a7565da0a92acb08",
    },
  ],
};

export const blocksMetricsLatestResponse = {
  timestamp: "2021-08-10T00:00:00.000Z",
  difficultyAverage: "7699414348610995.0000",
  difficultyMaximum: "7699414348610995",
  difficultyMinimum: "7699414348610995",
  durationAverage: "41000.000000000000",
  durationMaximum: "41000",
  durationMinimum: "41000",
  hashrateAverage: 187790593868561,
  baseFeeAverage: "30258142234.00000000",
  baseFeeMaximum: "30258142234",
  baseFeeMinimum: "30258142234",
  baseFeeTotal: "30258142234",
  burntFeeAverage: "351805579933266838",
  burntFeeMaximum: "351805579933266838",
  burntFeeMinimum: "351805579933266838",
  burntFeeTotal: "351805579933266838",
  issuanceAverage: "2000000000000000000",
  issuanceMaximum: "2000000000000000000",
  issuanceMinimum: "2000000000000000000",
  issuanceTotal: "2000000000000000000",
  issuanceUnit: "wei",
  sizeAverage: "42380.000000000000",
  sizeMaximum: 42380,
  sizeMinimum: 42380,
  sizeTotal: "42380",
  transactionFeeAverage: "8191431157883818.0000",
  transactionFeeMaximum: "8191431157883818",
  transactionFeeMinimum: "8191431157883818",
  transactionFeeTotal: "8191431157883818",
  transactionsAverage: "93.0000000000000000",
  transactionsMaximum: 93,
  transactionsMinimum: 93,
  transactionsTotal: "93",
};

export const blocksMetricsHistoricalResponse = {
  records: [
    {
      timestamp: "2021-08-10T00:00:00.000Z",
      difficultyAverage: "7699414348610995.0000",
      difficultyMaximum: "7699414348610995",
      difficultyMinimum: "7699414348610995",
      durationAverage: "41000.000000000000",
      durationMaximum: "41000",
      durationMinimum: "41000",
      hashrateAverage: 187790593868561,
      baseFeeAverage: "30258142234.00000000",
      baseFeeMaximum: "30258142234",
      baseFeeMinimum: "30258142234",
      baseFeeTotal: "30258142234",
      burntFeeAverage: "351805579933266838",
      burntFeeMaximum: "351805579933266838",
      burntFeeMinimum: "351805579933266838",
      burntFeeTotal: "351805579933266838",
      issuanceAverage: "2000000000000000000",
      issuanceMaximum: "2000000000000000000",
      issuanceMinimum: "2000000000000000000",
      issuanceTotal: "2000000000000000000",
      issuanceUnit: "wei",
      sizeAverage: "42380.000000000000",
      sizeMaximum: 42380,
      sizeMinimum: 42380,
      sizeTotal: "42380",
      transactionFeeAverage: "8191431157883818.0000",
      transactionFeeMaximum: "8191431157883818",
      transactionFeeMinimum: "8191431157883818",
      transactionFeeTotal: "8191431157883818",
      transactionsAverage: "93.0000000000000000",
      transactionsMaximum: 93,
      transactionsMinimum: 93,
      transactionsTotal: "93",
    },
  ],
  totalRecords: 365,
};

export const blocksTokenTransferResponse = {
  data: [
    [
      1546466952000,
      "0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195",
      "0xf20b9e713a33f61fa38792d2afaf1cd30339126a",
      "0x8c2036ce61648fcddffb06d6d11fe0b479ed63fe",
      "2119838342946",
      "7000000",
      "0xe1bf7bfba295c6685920741a913aa7323b6557fb10e1c211e2c465117c25885c",
    ],
    [
      1546466952000,
      "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
      "0xf20b9e713a33f61fa38792d2afaf1cd30339126a",
      "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
      "166642970609439260800",
      "7000000",
      "0xe1bf7bfba295c6685920741a913aa7323b6557fb10e1c211e2c465117c25885c",
    ],
    [
      1546466952000,
      "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315",
      "0xf20b9e713a33f61fa38792d2afaf1cd30339126a",
      "0xc0829421c1d260bd3cb3e0f06cfe2d52db2ce315",
      "753758517816662159",
      "7000000",
      "0xe1bf7bfba295c6685920741a913aa7323b6557fb10e1c211e2c465117c25885c",
    ],
  ],
  metadata: {
    columns: [
      "timestamp",
      "tokenAddress",
      "from",
      "to",
      "amount",
      "blockNumber",
      "transactionHash",
    ],
    endDate: 1546466952000,
    startDate: 1546466952000,
  },
};

export const blocksTransactionsResponse = [
  {
    blockNumber: "7280000",
    confirmations: "717638",
    contractAddress: "null",
    cumulativeGasUsed: "21000",
    fee: "840000000000000",
    from: {
      address: "0xf35074bbd0a9aee46f4ea137971feec024ab704e",
    },
    gasLimit: "50000",
    gasPrice: "40000000000",
    gasUsed: "21000",
    hash: "0x84683c7adbabe359e83c2e8debdcc183cfde347ea93d08aa2b0c4eafe56fa27e",
    index: 0,
    input: "0x",
    logsBloom: "0x00000...",
    maxFeePerGas: 1000000028,
    maxPriorityFeePerGas: 1000000000,
    nonce: "1687",
    publicKey: "",
    r: "0xde65988d4a3f8c009a7e621d50de0232b3c30cbaa39b2f56153fb6438573584a",
    raw: "",
    root: "",
    s: "0x50624dcd0a0b498bb9065e766f7383232063105095275fdee78f97df2ca389f0",
    status: "0x1",
    timestamp: "2019-02-28T19:52:04.000Z",
    to: [
      {
        address: "0x762c51861d03dc7c367086bbe46d3da8f6f41309",
      },
    ],
    type: 2,
    v: "38",
    value: "6083426500000000000",
    statusResult: {
      code: "0x1",
      confirmed: true,
      success: true,
      name: "successful",
    },
  },
];
