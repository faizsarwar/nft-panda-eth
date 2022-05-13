import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 90px 0;
  display: flex;
  jusitify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    text-align: center;
    font-size: 52px;
    font-weight: 700;
    color: #ffff;
    text-transform: uppercase;
    ${"" /* font-family: "Rowdies", cursive; */}
  }

  .image {
    width: 100%;
  }
  .myCardContainer {
    padding: 3px;
    position: relative;
    background: #681e87;
    background: linear-gradient(180deg, #681e87 0%, #db1223 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#681e87",endColorstr="#db1223",GradientType=1);
    border-radius: 19.58px;
    z-index: 1;
    height: 100%;
  }
  .myCardContainer::before {
    content: "";
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: -2px;
    right: -2px;

    border-radius: 0.8rem;
  }
  .myCard {
    background: #050215;
    border-radius: 19.58px;
    padding: 12px;
    height: 100%;
  }

  .name {
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    padding-top: 15px;
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 40px;
      text-align: center;
    }

    .name {
      font-size: 18px;
    }
  }
`;
const Collection2 = () => {
  const dataArray = [
    { img: "./images/B1.png", name: "Rekt Mafia Panda Club" },
    { img: "./images/B2.png", name: "Pamp  Mafia Panda Club" },
    { img: "./images/B3.png", name: "King  Mafia Panda Club" },
    { img: "./images/B4.png", name: "Sniper  Mafia Panda Club" },
  ];
  return (
    <Wrapper id="collection">
      {" "}
      <h2 className="title">Mafia Panda Club NFT Collection</h2>
      <Row className="pt-5 mt-5">
        {dataArray.map((el, i) => (
          <Col
            sm={10}
            md={6}
            lg={4}
            xl={3}
            className="mx-auto mt-4 mt-xl-0 "
            key={i}
          >
            <div className="myCardContainer">
              <div className="myCard">
                <img src={el.img} alt="#" className="image" />
                <p className="name">{el.name}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
export default Collection2;
