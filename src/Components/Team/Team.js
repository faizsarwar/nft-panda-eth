import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 90px 0;
  padding-bottom: 0px;
  .teamContainer {
    border: 2px solid #fff;
    padding: 18px;
    border-radius: 12px;
    height: 100%;
  }
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
  .name {
    font-weight: 700;
    font-size: 24px;
    color: #fff;
    padding-top: 18px;
    text-align: center;
  }
  .position {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .info {
    height: 115px;
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 40px;
    }
    .name {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .teamContainer {
      padding: 12px;
      border-radius: 12px;
    }
  }
`;
const Team = () => {
  const teamArray = [
    {
      image: "./images/100.png",
      name: "Thomas",
      position: "Marketing + Community Panda",
    },
    {
      image: "./images/101.png",
      name: "Ceon",
      position: "Creative Direction + Art Panda",
    },
    {
      image: "./images/102.png",
      name: "Dennis",
      position: "Web3 Advisory + Developer Panda",
    },
    {
      image: "./images/B1.png",
      name: "Ron",
      position: "Community Panda",
    },
    {
      image: "./images/B2.png",
      name: "Wanye",
      position: "Community Panda",
    },
    {
      image: "./images/B3.png",
      name: "Vans",
      position: "Developer Panda",
    },
  ];
  return (
    <Wrapper id="team">
      <h2 className="title">TEAM</h2>
      <Row className="justify-content-center py-5">
        {teamArray.map((el, i) => (
          <Col sm={6} md={4} lg={4} xl={3} className="my-4" key={i}>
            <div className="d-flex flex-column justify-content-center align-items-center teamContainer">
              <img src={el.image} alt="" className="image" />
              <div className="info">
                <h6 className="name">{el.name}</h6>
                <p className="position pt-2">{el.position}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};
export default Team;
