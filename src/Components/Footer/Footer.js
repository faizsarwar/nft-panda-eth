import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { BsTwitter } from "react-icons/bs";
// import { FaTelegramPlane } from "react-icons/fa";
const Wrapper = styled.div`
  padding: 70px 15px;
  padding-bottom: 20px;
  background: #000;
  .title {
    font-size: 80px;
    font-weight: 700;
    background: linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    background: -webkit-linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .icon {
    font-size: 50px;
    margin: 10px;
  }
  .copyRight {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 60px;
    }
  }
  @media only screen and (max-width: 575px) {
    .title {
      font-size: 40px;
    }
    .icon {
      font-size: 40px;
    }
    .copyRight {
      font-size: 16px;
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <Col md={10} className="mx-auto">
        <h3 className="title text-center">Mafia Panda Club</h3>
        <div className="d-flex justify-content-center align-items-center pt-4 pb-2">
          <a
            href="https://twitter.com/MafiaPandaNFT"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter color="#fff" className="icon" />
          </a>
        </div>
        <p className="copyRight">Copyright © 2022, All rights reserved.</p>
      </Col>
    </Wrapper>
  );
};
export default Footer;
