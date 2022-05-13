import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import About from "./About/About";
import Collection from "./Collection/Collection";
import HeroSection from "./HeroSection/HeroSection";

import AllRoadMap from "./RoadMap/AllRoadMap";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Wrapper = styled.div``;
const Home = () => {
  return (
    <Wrapper>
      <Header /> <HeroSection />
      <Col xs={11} xxl={10} className="mx-auto">
        {" "}
        <About />
        <Collection />
        <AllRoadMap />
        <Team />
      </Col>{" "}
      <Footer />
    </Wrapper>
  );
};
export default Home;
