import logo from "./logo.svg";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { Biconomy } from "@biconomy/mexa";

function App() {
  const biconomy = new Biconomy(window.ethereum, {
    apiKey: "q9oEztJM8.e8ed08a7-5b38-48e3-b4c0-f66e6b66f407",
    debug: true,
  });

  const web3 = new Web3(biconomy);

  const abi = [
    {
      inputs: [
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
  const caddress = "0xBFeFFB821DbA87dff2f3E018Ab2C6d1cF5F60aD5";
  var contract;
  const usraddress = "0xCAa931a56cCbF30B82CED72604DdC7182964bB71";
  const recadd = "0x905040585A59C5B0E83Be2b247fC15a81FF4E533";
  let accounts;

  biconomy
    .onEvent(biconomy.READY, () => {
      // Initialize your dapp here like getting user accounts etc
    })
    .onEvent(biconomy.ERROR, (error, message) => {
      // Handle error while initializing mexa
      console.log(error);
    });

  window.ethereum.request({ method: "eth_requestAccounts" });
  accounts = web3.eth.getAccounts();

  contract = new web3.eth.Contract(abi, caddress);

  console.log("signing txn");
  let tx = contract.methods.transfertip(recadd, 10).send({
    from: usraddress,
    signatureType: biconomy.EIP712_SIGN,
    //optionally you can add other options like gasLimit
  });

  console.log("tx signed");
  tx.on("transactionHash", function (hash) {
    console.log(`Transaction hash is ${hash}`);
  }).once("confirmation", function (confirmationNumber, receipt) {
    console.log(receipt);
    console.log(receipt.transactionHash);
    //do something with transaction hash
  });

  return (
    <div className="App">
      NFT Gallery
      {/*       
            <div className ="gallery">
               {
                 imgdata.map((item,index) =>{
                   return(
                     <div className="pics" key={index}>
                      <a href = {item.link}>
                      <img src = {item.img} />
                      </a>
                     </div>
                   )
                 })
               } 
            </div> */}
    </div>
  );
}

export default App;
