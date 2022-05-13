import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 90px 0;
  .title {
    font-size: 52px;
    font-weight: 700;
    color: #ffff;
    ${"" /* font-family: "Rowdies", cursive; */}
  }
  .text {
    font-size: 22px;
    color: #ffff;
  }
  .image {
    width: 100%;
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 40px;
      text-align: center;
    }
    .text {
      font-size: 16px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 50px 0;
    .image {
      width: 70%;
      margin: 0 auto;
      display: block;
    }
  }
  @media only screen and (max-width: 520px) {
    .image {
      width: 100%;
    }
  }
`;
const About = () => {
  return (
    <Wrapper className="" id="about">
      <Col md={10} className="mx-auto">
        <Row className="align-items-center">
          <Col lg={5} xl={4}>
            <img src="./images/100.png" alt="#" className="image" />
          </Col>
          <Col md={1} className="d-none d-xl-block"></Col>
          <Col lg={7} xl={7} className="mt-5 mt-lg-0">
            <h3 className="title">ABOUT US</h3>
            <p className="text pt-2">
              8888 HIGH-CULTURE Pandas. From the streets, for Pandas everywhere.
              This collection was created to be an extension of the PANDA
              universe – paying homage to the most hyped up beasts in the Panda
              circuit.
            </p>
            <p className="text pt-2 pt-xl-5">
              We are the untold story of Mafia Panda left-behind.. Tribes –
              scattered and lost in the wild after that fateful night that
              fractured everything. Illuminating, like a thousand suns, the
              monolith projected blinding beams in a myriad of directions. Night
              turned to day. Many were struck where they stood and for that
              moment time stood still.
            </p>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default About;
