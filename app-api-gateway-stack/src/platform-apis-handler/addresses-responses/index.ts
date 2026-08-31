export const addressesResponse = {
  totalRecords: 50721693,
  records: [
    {
      firstBlockNumber: "5703544",
      creator: null,
      type: "EOA",
      firstTransactionHash:
        "0x457089d994dc565666226758557dc35c9fb05bf89038bb894de86da2a7d35d77",
      hash: "0xce9af648a831ddf0cd6d05e3fe5787b3c7987246",
      timestamp: 1527697819000000,
      blockchainId: "1c9c969065fcd1cf",
    },
    {
      firstBlockNumber: "5703544",
      creator: null,
      type: "EOA",
      firstTransactionHash:
        "0xf4311c1fed2e01a6e1c75ba251353a1e61590513a32fe4da524bc43a9024a326",
      hash: "0x8382a98b7566d6e4139fa9ffd3a9f1fa826c5093",
      timestamp: 1527697819000000,
      blockchainId: "1c9c969065fcd1cf",
    },
  ],
};

export const addressesHashAccountBalLatestResponse = {
  address: {
    address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
  },
  blockchainId: "1c9c969065fcd1cf",
  blockNumber: "7817499",
  timestamp: 1558635166000,
  timestampNanoseconds: 0,
  value: "59717752721124107170",
};

export const addressesHashAccountBalHistoricalResponse = {
  data: [
    [
      "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      "7446815",
      1553638828000,
      0,
      "65183168478133965282",
    ],
    [
      "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      "7446812",
      1553638801000,
      0,
      "65191168478133965282",
    ],
  ],
  metadata: {
    columns: [
      "address",
      "blockNumber",
      "timestamp",
      "timestampNanoseconds",
      "value",
    ],
    totalRecords: 1118325,
  },
};

export const addressesHashBalancesResponse = {
  "0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be": {
    balance: "5.4777658867801856271744e+22",
    balanceIn: "5.5265160095722306803399618e+25",
    balanceOut: "5.5210382436854504947127874e+25",
    tokens: [
      {
        address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        decimals: 18,
        milliseconds: 1559665587000,
        name: "Maker",
        symbol: "MKR",
        amount: "187720361680000000000",
        timestamp: 1559665587000,
        price: {
          amount: {
            currency: "usd",
            quote: "680.815866247",
            total: "127803.0006493693442149600000000",
          },
        },
      },
    ],
  },
};

export const addressesBalancesResponse = {
  "1MUz4VMYui5qY1mxUiG8BQ1Luv6tqkvaiL": {
    balance: "22855627272",
    price: {
      balance: {
        currency: "usd",
        quote: "57218.13564119",
        total: "13077563.81413740",
      },
    },
  },
  "1Kr6QSydW9bFQG1mXiPNNu6WpJGmUa9i1g": {
    balance: "150140633787",
    price: {
      balance: {
        currency: "usd",
        quote: "57218.13564119",
        total: "85907671.49278540",
      },
    },
  },
};

export const addressesHahsFunctionsResponse = {
  totalRecords: 14674321,
  records: [
    {
      blockNumber: "7280444",
      depth: 0,
      error: "",
      from: "0x09191d18729da57a83a9afc8ace0c8d7d104e118",
      initialGas: "578408",
      input:
        "0x88c2a0bf0000000000000000000000000000000000000000000000000000000000156aba",
      messageIndex: 2,
      opcode: "CALL",
      returnValue:
        "0x000000000000000000000000000000000000000000000000000000000015b35e",
      timestamp: 1551391491000,
      timestampNanoseconds: null,
      to: ["0x06012c8cf97bead5deae237070f9587f8e7a266d"],
      transactionHash:
        "0x63e10d5ce03fce3116a19a4d8c1869fd53630f8ff9d8fb16790200af965ba0c2",
      value: "0",
      optionalProperties: null,
      blockchainId: "1c9c969065fcd1cf",
    },
  ],
};

export const addressesHahsLogsResponse = {
  totalRecords: 6448870,
  records: [
    {
      removed: false,
      logIndex: "230",
      transactionIndex: "62",
      transactionHash:
        "0x3c0abea77f9324b565696e51a6e7109a10fe320e985963b869105ce6e8db20f7",
      blockHash:
        "0xa3f99da4a3871dbc8778a1fcb3a715ddbee89bfe3762eb6d1b624d4312e37757",
      blockNumber: "7280571",
      address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      data: [
        "00000000000000000000000012b353d1a2842d2272ab5a18c6814d69f4296873",
        "0000000000000000000000000000000000000000000000000000000000159353",
        "000000000000000000000000000000000000000000000000000000000015ab30",
        "00000000000000000000000000000000000000000000000000000000006f18ab",
      ],
      dataSize: 258,
      timestamp: 1551393570000,
      timestampNanoseconds: 0,
      topics: [
        "0x241ea03ca20251805084d27d4440371c34a0b85ff108f6bb5611248f73818b80",
      ],
      blockchainId: "1c9c969065fcd1cf",
    },
  ],
};

export const addressesHashConverterResponse = {
  isCashAddress: false,
  isLegacyAddress: true,
  cashAddress: "bitcoincash:pp8xkgfvyjhkdkta0awjx7ud7qmnwd0rvy5vdtxqnv",
  legacyAddress: "38qexzy1jDZ49RgPAeaDqVdys6xhyZk1N2",
};

export const addressesHashInformationResponse = {
  balance: "69498477186533922505",
  balanceIn: "2.7938614849190848921864e+22",
  balanceOut: "2.7869116372004314999359e+22",
  addressType: "contract",
  contractTypes: ["ERC721"],
  decimals: "0",
  name: "CryptoKitties",
  numHolders: "73880",
  numTokens: "1512179",
  numTransfers: "1557375",
  symbol: "CK",
  totalSupply: "1512179.0000000000000000",
  totalValueUSD: null,
  unitValueUSD: null,
};

export const addressesHashMetadataResponse = [
  {
    firstSeen: "2017-11-23T05:41:19.000Z",
    type: "contract",
    contractTypes: ["ERC721"],
    probability: 1,
    network: {
      blockchainId: "1c9c969065fcd1cf",
    },
  },
  {
    firstSeen: "2017-12-05T06:56:08.000Z",
    type: "address",
    contractTypes: ["Unknown"],
    probability: 0,
    network: {
      blockchainId: "1b3f7a72b3e99c13",
    },
  },
];

export const addressesExtendedAddressResponse = {
  metadata: {
    type: "ypub",
    rootPath: "m/0/0/0",
    start: 0,
    end: 100,
  },
  data: [
    {
      path: "m/0/0/0",
      address: "39At1aD71SRwr9FbdUMYDdTXyaxAh2vemG",
    },
    {
      path: "m/0/0/1",
      address: "35HcnGKMqs1MQBdaJbs6h8XypzNFS8f6i9",
    },
    {
      path: "m/0/0/2",
      address: "3BN8amutYVRo3F6EvrPjERDB8zZGsuEzBL",
    },
    "...",
  ],
};

export const addressesAddressPendingTrxnsResponse = {
  records: [
    {
      from: {
        address: "1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY",
      },
      gas: null,
      hash: "6cb3aae7132f535f7d8aaec9a224aa3a97b241bcf4d8160fb33830619b68a909",
      timestamp: "2020-01-09T10:29:43.151Z",
      to: [
        {
          address:
            "1KGG9kvV5zXiqyQAMfY32sGt9eFLMmgpgX,1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY",
        },
      ],
      value: "1249996359",
      inputs: [
        {
          addresses: ["1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY"],
          index: 0,
          meta: "{}",
          requiredSignatures: 1,
          scriptAsm:
            "3045022100f1aeb3c344f6d3b1fb9f4b48ad6efab20a2330931c5457efc217e814d005ee0202205063945dbe620b2e6e2bf82606af0fe35f8e34281cdf46295b8338f9119cd420[ALL] 04e7e8eeb1d060e2ae611e2e6253b7948d7c02b7ea7c2dce09d939225a5c39d86553b07acf5073b1dc1e432cdf574d587b2800e0c3d4e43fcb3a1f84bfdf602a1e",
          scriptHex:
            "483045022100f1aeb3c344f6d3b1fb9f4b48ad6efab20a2330931c5457efc217e814d005ee0202205063945dbe620b2e6e2bf82606af0fe35f8e34281cdf46295b8338f9119cd420014104e7e8eeb1d060e2ae611e2e6253b7948d7c02b7ea7c2dce09d939225a5c39d86553b07acf5073b1dc1e432cdf574d587b2800e0c3d4e43fcb3a1f84bfdf602a1e",
          sequence: 4294967294,
          spentOutputIndex: 0,
          spentTransactionHash:
            "41b11259c1f78d0b8528ccae9878fe1f596b70ecdacdeb3e4ba143510fd7dae9",
          timestamp: "2020-01-09T10:29:43.16",
          timestampNanoseconds: 0,
          transactionHash:
            "6cb3aae7132f535f7d8aaec9a224aa3a97b241bcf4d8160fb33830619b68a909",
          type: "pubkeyhash",
          value: 1250000000,
        },
      ],
      outputs: [
        {
          addresses: ["1KGG9kvV5zXiqyQAMfY32sGt9eFLMmgpgX"],
          index: 0,
          meta: null,
          requiredSignatures: 1,
          scriptAsm:
            "OP_DUP OP_HASH160 c85526a428126c00ad071b56341a5a553a5e96a3 OP_EQUALVERIFY OP_CHECKSIG",
          scriptHex: "76a914c85526a428126c00ad071b56341a5a553a5e96a388ac",
          timestamp: "2020-01-09T10:29:43.162",
          timestampNanoseconds: 0,
          transactionHash:
            "6cb3aae7132f535f7d8aaec9a224aa3a97b241bcf4d8160fb33830619b68a909",
          type: "pubkeyhash",
          value: 1000000000,
        },
        {
          addresses: ["1KFHE7w8BhaENAswwryaoccDb6qcT6DbYY"],
          index: 1,
          meta: null,
          requiredSignatures: 1,
          scriptAsm:
            "OP_DUP OP_HASH160 c825a1ecf2a6830c4401620c3a16f1995057c2ab OP_EQUALVERIFY OP_CHECKSIG",
          scriptHex: "76a914c825a1ecf2a6830c4401620c3a16f1995057c2ab88ac",
          timestamp: "2020-01-09T10:29:43.162",
          timestampNanoseconds: 0,
          transactionHash:
            "6cb3aae7132f535f7d8aaec9a224aa3a97b241bcf4d8160fb33830619b68a909",
          type: "pubkeyhash",
          value: 249996359,
        },
      ],
      price: {
        value: {
          currency: "usd",
          quote: "7917.3490000000000000",
          total: "98966.5742293229",
        },
      },
    },
    "...",
  ],
};

export const addressesMetricsLatestResponse = {
  activeTotal: "281181",
  activeAverage: "11715.875000000000",
};

export const addressesHashAdoptionResponse = {
  metadata: {
    columns: ["timestamp", "adoption"],
    startDate: 1551139200000,
    endDate: 1552003200000,
  },
  data: [[1551139200000, "30"]],
};

export const addressesHashUsageResponse = {
  metadata: {
    columns: ["timestamp", "usage"],
    startDate: 1552083600000,
    endDate: 1552087200000,
  },
  data: [[1552083600000, "28"]],
};

export const addressesHashTokenBalLatestResponse = {
  records: [
    {
      address: "0xfa6f7881e52fdf912c4a285d78a3141b089ce859",
      holder: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      amount: "100000100000000000000000000",
      decimals: "18",
      name: "Avocado",
      symbol: "AVO",
      isERC20: true,
      isERC721: false,
      isERC777: false,
      isERC884: false,
      isERC998: false,
    },
    {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      holder: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      amount: "0",
      decimals: "18",
      name: "Wrapped Ether",
      symbol: "WETH",
      isERC20: true,
      isERC721: false,
      isERC777: false,
      isERC884: false,
      isERC998: false,
      price: {
        amount: {
          currency: "usd",
          quote: "233.901383764",
          total: "0.000000000000000000000000000000000000000000000",
        },
      },
    },
  ],
  totalRecords: "82",
};

export const addressesHashTokenBalHistoricalResponse = {
  totalRecords: 804219,
  records: [
    {
      blockchainId: "1c9c969065fcd1cf",
      amount: "1341",
      address: "0x06012c8cf97bead5deae237070f9587f8e7a266d",
      holder: "0xbae25a69a6eb7341ee834be7635e247e22a1e57a",
      decimals: "0",
      name: "CryptoKitties",
      symbol: "CK",
      isERC20: false,
      isERC721: true,
      isERC777: false,
      isERC884: false,
      isERC998: false,
    },
  ],
};

export const addressesHashTokenTransferResponse = {
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

export const addressesHashTransactionsResponse = {
  records: [
    {
      blockchainId: "1c9c969065fcd1cf",
      blockNumber: "5703560",
      confirmations: "2280417",
      contractAddress: "null",
      cumulativeGasUsed: "6348961",
      fee: "563675000000000",
      from: {
        address: "0xce9af648a831ddf0cd6d05e3fe5787b3c7987246",
      },
      gasLimit: "53000",
      gasPrice: "25000000000",
      gasUsed: "22547",
      hash: "0xd0c6d02f93f77996823d76a5e012d0108192b1d9f9bce7f4297c3247dc5e753b",
      index: 121,
      input: "0xa9059cbb0...",
      logsBloom: "0x000000...",
      maxFeePerGas: 1000000028,
      maxPriorityFeePerGas: 1000000000,
      nonce: "504404",
      publicKey: "null",
      r: "0x7dd79c36a2c7b488d055222d07eff80d9e0fd6983e21a19d9e0770142e5d8350",
      raw: "null",
      root: "null",
      s: "0x426e3fcd93bf5bd20878a9f6ffca9f0f8875e988f3ad0fa6caf95493f592a617",
      status: "0x1",
      timestamp: "2018-05-30T16:35:27.000Z",
      to: [
        {
          address: "0xf85feea2fdd81d51177f6b8f35f0e6734ce45f5f",
        },
      ],
      type: 2,
      v: "27",
      value: "0",
      statusResult: {
        code: "0x1",
        confirmed: true,
        success: true,
        name: "successful",
      },
    },
  ],
};
