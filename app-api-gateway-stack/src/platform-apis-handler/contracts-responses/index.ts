export const contractsHashResponse = {
  abi: [
    {
      constant: true,
      inputs: [
        {
          name: "_interfaceID",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  bytecode: "...",
  contractName: "CryptoKitties",
  source: "pragma solidity ^0.4.11;\n\n\n...",
};

export const contractsHashFunctionsResponse = [
  {
    inputs: [
      {
        name: "function_selector",
        type: "uint256",
      },
    ],
    name: "__function_selector__",
    textSignature: "__function_selector__(uint256)",
    type: "function",
  },
  {
    hexadecimalSignature: "0x19e44e32",
    inputs: [],
    name: "0x19e44e32",
    textSignature: "0x19e44e32()",
    type: "function",
  },
  {
    hexadecimalSignature: "0x1d972d41",
    inputs: [
      {
        name: "varg0",
        type: "uint256",
      },
    ],
    name: "0x1d972d41",
    textSignature: "0x1d972d41(uint256)",
    type: "function",
  },
  {
    fullHexadecimalSignature:
      "0xb00606a57d6de576f6553f2e6ff6889ed47c7ae6a1fd8ca906ce58619ee74c37",
    hexadecimalSignature: "0xb00606a5",
    inputs: [
      {
        name: "varg0",
        type: "bytes32",
      },
      {
        name: "varg1",
        type: "uint8",
      },
      {
        name: "varg2",
        type: "bytes32",
      },
      {
        name: "varg3",
        type: "bytes32",
      },
    ],
    name: "confirm",
    textSignature: "confirm(bytes32,uint8,bytes32,bytes32)",
    type: "function",
  },
  {
    hexadecimalSignature: "0xba3ae0ce",
    inputs: [
      {
        name: "varg0",
        type: "uint256",
      },
    ],
    name: "0xba3ae0ce",
    textSignature: "0xba3ae0ce(uint256)",
    type: "function",
  },
  {
    fullHexadecimalSignature:
      "0xda95ebf77fb86bf02e9d4d3bf7c2c0b3b9d55d6cbf46fc5e8b50bc49d4e46c78",
    hexadecimalSignature: "0xda95ebf7",
    inputs: [
      {
        name: "varg0",
        type: "address",
      },
      {
        name: "varg1",
        type: "uint256",
      },
    ],
    name: "requestWithdrawal",
    textSignature: "requestWithdrawal(address,uint256)",
    type: "function",
  },
];

export const signaturesHashResponse = [
  {
    textSignature: "createSaleAuction(uint256,uint256,uint256,uint256)",
    hexadecimalSignature: "0x3d7d3f5a",
    numParameters: 4,
    fullHexadecimalSignature:
      "0x3d7d3f5ab1b3b4946cf6ce26758c354d9eb67adf6a0432ce7ec60ddc563202e4",
  },
];
