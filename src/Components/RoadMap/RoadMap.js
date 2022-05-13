import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding-top: 90px;

  .title {
    font-size: 52px;
    font-weight: 700;
    color: #ffff;
    text-transform: uppercase;
    ${"" /* font-family: "Rowdies", cursive; */}
  }
  .text-container {
    margin-left: 30px;
    padding: 0;
  }
  .text {
    font-size: 24px;
    color: #fff;
  }
  .dash {
    font-size: 24px;
    color: #fff;
    padding-right: 5px;
  }
  .image {
    width: 100%;
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 40px;
    }
    .text {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 30px;
    }
    .text {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 767px) {
    .title {
      text-align: center;
    }
    .text {
      padding: 0;
    }
    .image {
      width: 70%;
      display: block;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 767px) {
  }
  .image {
    width: 90%;
  }
`;
const RoadMap = ({ reverse, steps, title, img }) => {
  return (
    <Wrapper id="roadmap">
      <Row
        className={`align-items-center ${
          reverse ? "flex-row-reverse justify-content-between" : ""
        }`}
      >
        <Col md={5}>
          <img src={img} alt="#" className="image" />
        </Col>{" "}
        <Col md={7} lg={6} className="mt-5 mt-md-0">
          <h3 className="title">{title}</h3>
          <div className="pt-4">
            {steps.map((el, i) => (
              <ul className="d-flex text-container " key={i}>
                <li className={`text py-1 ${reverse && "p-0"}`} key={i}>
                  {el}
                </li>
              </ul>
            ))}
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};
export default RoadMap;
