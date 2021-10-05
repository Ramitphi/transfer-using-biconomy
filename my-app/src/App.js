import logo from "./logo.svg";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";
const BigNumber = require("bignumber.js");

function App() {
  const tokenabi = [
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
  ];

  const abi = [
    {
      inputs: [
        {
          internalType: "address",
          name: "to_",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount_",
          type: "uint256",
        },
      ],
      name: "transfertip",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "token",
          type: "address",
        },
        {
          internalType: "address",
          name: "_trustedForwarder",
          type: "address",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "forwarder",
          type: "address",
        },
      ],
      name: "isTrustedForwarder",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "trustedForwarder",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "versionRecipient",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const [amt, setamt] = useState(null);

  const biconomy = new Biconomy(window.ethereum, {
    apiKey: "api -key",
    debug: true,
  });

  const BigNumber = require("bignumber.js");
  const caddress = "0x2C6a4a676CA7E6e9bC70BD6530968599645e17B7";
  const laddress = "0xa36085F69e2889c224210F603D836748e7dC0088";
  var contract;
  var linkcontract;
  const usraddress = "0xCAa931a56cCbF30B82CED72604DdC7182964bB71";
  const recadd = "0x905040585A59C5B0E83Be2b247fC15a81FF4E533";

  const web3 = new Web3(biconomy);

  let accounts;
  async function connect() {
    window.ethereum.enable();
    accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
  }

  // useEffect => {

  // }

  biconomy
    .onEvent(biconomy.READY, () => {
      contract = new web3.eth.Contract(abi, caddress);
      console.log(contract);
      linkcontract = new web3.eth.Contract(tokenabi, laddress);
      console.log(linkcontract);
      console.log(biconomy);
    })
    .onEvent(biconomy.ERROR, (error, message) => {
      // Handle error while initializing mexa
      console.log(error);
    });

  function samt(event) {
    setamt(event.target.value);
    console.log(event.target.value);
  }

  let oneEther = new BigNumber(1);
  oneEther = oneEther.shiftedBy(18);
  console.log(oneEther);

  async function apptxn() {
    console.log("signing txn");

    let txn = linkcontract.methods.approve(caddress, oneEther).send({
      from: accounts[0],
      signatureType: biconomy.EIP712_SIGN,
      //optionally you can add other options like gasLimit
    });

    txn
      .on("transactionHash", function (hash) {
        console.log(`Transaction hash is ${hash}`);
        //showInfoMessage(`Transaction sent. Waiting for confirmation ..`);
      })
      .once("confirmation", function (confirmationNumber, receipt) {
        console.log(receipt);
        console.log(receipt.transactionHash);
        //do something with transaction hash
      });
  }

  async function sendtxn() {
    let tx = contract.methods.transfertip(recadd, oneEther).send({
      from: accounts[0],
      signatureType: biconomy.EIP712_SIGN,
      //optionally you can add other options like gasLimit
    });

    tx.on("transactionHash", function (hash) {
      console.log(`Transaction hash is ${hash}`);
      //showInfoMessage(`Transaction sent. Waiting for confirmation ..`);
    }).once("confirmation", function (confirmationNumber, receipt) {
      console.log(receipt);
      console.log(receipt.transactionHash);
      //do something with transaction hash
    });
  }
  return (
    <div className="App">
      NFT Gallery
      {/* <button onClick={load}>load contract</button> */}
      <br></br> <br></br>
      <button onClick={connect}>connect</button>
      {/* <br></br> <br></br>
        <input type="text" onClick={samt} />
        <br></br>
        {/* <button onClick={submitaddress}>Submit Address</button>
        <br></br> */}
      <button onClick={apptxn}>Approve Txn</button>
      <br></br>
      <br></br>
      <button onClick={sendtxn}>send Txn</button>
    </div>
  );
}

export default App;
