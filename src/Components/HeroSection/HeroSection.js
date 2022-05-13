import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Web3 from "web3";
import { contractABI, contractAddress } from "../../contractData";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  .text1 {
    font-size: 30px;
    font-weight: bold;
    color: #ffff;
    padding: 8px 0;
    line-height: 100%;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    background: linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    background: -webkit-linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text {
    padding: 0;
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    color: #ffff;
    padding: 8px 0;
    line-height: 100%;
    font-weight: 700;

    text-align: center;
  }
  .image {
    width: 100%;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #fff;
    text-align: center;
    font-size: 22px;
    line-height: 1.5;
    border-radius: 8px;
    margin: 0 12px;
    background: linear-gradient(94.11deg, #ff4949 0%, #ad1010 109.94%);
    box-shadow: 0 8.00838px 8.00838px #00000040;
    border-color: transparent;
    padding: 15px 35px;
  }

  @media only screen and (max-width: 1199px) {
    .text {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 991px) {
    .button {
      font-size: 18px;
      min-height: 60px;
    }
  }
  @media only screen and (max-width: 767px) {
    .text {
      text-align: center;
    }
  }
  @media only screen and (max-width: 575px) {
    .socialContainer {
      flex-direction: column;
    }
    .tele {
      margin-bottom: 20px;
    }
  }
`;
const HeroSection = () => {
  const [account, setAccount] = useState("");
  const [mintCount, setMintCount] = useState(3);
  const [contract, setContract] = useState({});
  const [cost, setCost] = useState("");
  // const [loading, setLoading] = useState(false);
  // console.log("Initial loading status: ", loading);

  // window.ethereum.on('accountsChanged', (accounts) => {
  //   setAccount(accounts[0])
  // });

  // const changeNetwork = async () => {
  //   if (window.ethereum) {
  //     // let web3 = new Web3(Web3.givenProvider);
  //     try {
  //       await window.ethereum.request({
  //         method: 'wallet_switchEthereumChain',
  //         params: [{ chainId: "0x1" }]
  //       });
  //     } catch (err) {
  //     }
  //   }
  // };
  const handleConnect = async() => {
    
    //  alert("Connected!");
    if(Web3.givenProvider){
      let web3 = new Web3(Web3.givenProvider);
      console.log("web3: ", web3);
      try {
        await Web3.givenProvider.enable();
        let chainId = await web3.eth.getChainId();
        console.log("chainId: ", chainId);

        let accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        let contract = new web3.eth.Contract(contractABI,contractAddress);
        console.log("contract: ", contract);
        setContract(contract);

        let cost = await contract.methods.cost().call();
        setCost(cost);

        // console.log("connect account: ", accounts[0]);
      }catch(e){
        console.log(e.message)
      }
    }
   }

   const handleMint = async(count) => {
    //  setLoading(true);
    //  console.log("loading on true: ", loading);
    //  setTimeout(()=>{
    //   alert(`minted ${count} NFT's`);
    //   setLoading(false);
    //  },5000);
    //  console.log("loading: on false", loading);

    if(contract && account){
      try {
        let trx = await contract.methods.mint(mintCount).send({from: account, value: cost * mintCount, gas: "171348"});
        console.log("transaction result: ", trx);
      }catch(e){console.log(e.message)}
    }

     
   }
   console.log(parseInt(Web3.utils.fromWei(cost, "ether"))+mintCount,"qsqazqzq")
  return (
    <Wrapper>
      <Col xs={11} className="mx-auto">
        <Row className="align-items-center">
          <Col md={6}>
            {" "}
            <img src="./images/mafia.gif" alt="#" className="image" />
          </Col>
          <Col md={6}>
            <div className="socialContainer mt-5">
              <p className="text1 pb-2"> Mint 3 Pandas and Get 1 Free</p>
              <p className="text ">Your Pandas Can't wait to meet you!</p>{" "}
              <div className="d-flex justify-content-center pt-5">
              {
              account ? 
              <center><div>
                <h3 style={{color: "green"}}>{`Connected: ${(account).substring(0, 5).concat("...",(account).substring(38,42))}`}</h3><br/>
                <h4 style={{color: "whitesmoke"}}><u>{`Cost ${parseInt(Web3.utils.fromWei(cost, "ether"))*mintCount} ETH`}</u></h4><br/>
                <div className="">
                  <div className="row ">
                      <div className="col-4 ">
                        <button disabled={mintCount === 25} onClick={()=> setMintCount(mintCount + 1)} className="button">+</button><br/>                  
                      </div>
                      <div className="col-4 text-center ">
                        <h1 style={{color: "white"}} className="pt-3 pl-5">{mintCount}</h1>                
                      </div>
                      <div className="col-4">
                        <button disabled={mintCount === 1} onClick={()=> setMintCount(mintCount - 1)} className="button">-</button><br/>
                      </div>
                    </div>
                </div>
                <button className="button" onClick={()=> handleMint(mintCount)} >Mint</button>
              </div></center>
              : 
              <button className="button" onClick={handleConnect}>Connect Wallet</button>
            }
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default HeroSection;
