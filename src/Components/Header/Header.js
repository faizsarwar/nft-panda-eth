import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
const Wrapper = styled.div`
  padding: 20px 0px;
  .logo {
    font-size: 60px;
    font-weight: 900;
    background: linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    background: -webkit-linear-gradient(to bottom, #ff4949 0%, #ad1010 109.94%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .navItem {
    font-size: 20px;
    color: #fff;
    font-weight: 400;
    padding-right: 25px;
    font-family: Poppins, sans-serif;
    cursor: pointer;
  }

  .sidebar {
    background: #070326;
    width: 100%;
    position: absolute;
    top: 80px;
    left: 0;
    height: 100vh;
  }
  .icon {
    width: 30px;
    margin-right: 25px;
  }

  @media only screen and (max-width: 1600px) {
    .logo {
      font-size: 43px;
    }
    .navItem {
      font-size: 18px;
    }

    .hamburger {
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1199px) {
    .icon {
      margin: 0;
      margin: 0 12px;
    }
  }
  @media only screen and (max-width: 520px) {
    .icon {
      width: 30px;
    }
  }
  @media only screen and (max-width: 430px) {
    .logo {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 350px) {
    .logo {
      font-size: 26px;
    }
  }
`;
const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const navArray = [
    { navItem: "Home", to: "home" },
    { navItem: "About", to: "about" },

    { navItem: "Collection", to: "collection" },
    { navItem: "RoadMap", to: "roadmap" },
    { navItem: "Team", to: "team" },
  ];
  const socialArray = [
    { icon: "./images/twitter.png", to: "https://twitter.com/MafiaPandaNFT" },
    { icon: "./images/opensea.png", to: "https://opensea.io/" },
    { icon: "./images/discord.png", to: "https://discord.com" },
  ];
  return (
    <Wrapper>
      <Col
        xs={11}
        className="mx-auto d-flex justify-content-between align-items-center"
      >
        <h1 className="logo">Mafia Panda Club</h1>
        <div className="d-flex align-items-center d-none d-xl-flex">
          {navArray.map((el, i) => (
            <Link
              to={el.to}
              key={i}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <p className="navItem">{el.navItem}</p>
            </Link>
          ))}{" "}
          {socialArray.map((el, i) => (
            <a href={el.to} key={i} target="_blank" rel="noreferrer">
              <img src={el.icon} alt="#" className="icon" />
            </a>
          ))}
        </div>{" "}
        {sidebar ? (
          <MdClose
            color="#fff"
            fontSize={30}
            className="hamburger d-xl-none"
            onClick={() => setSidebar((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            color="#fff"
            fontSize={30}
            className="hamburger d-xl-none"
            onClick={() => setSidebar((prev) => !prev)}
          />
        )}
        {sidebar && (
          <div className="sidebar">
            <div className="d-flex flex-column align-items-center ">
              {navArray.map((el, i) => (
                <Link
                  to={el.to}
                  key={i}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  onClick={() => setSidebar(false)}
                >
                  <p className="navItem py-2 p-0">{el.navItem}</p>
                </Link>
              ))}
            </div>{" "}
            <div className="d-flex justify-content-center pt-3">
              {" "}
              {socialArray.map((el, i) => (
                <a href={el.to} key={i} target="_blank" rel="noreferrer">
                  <img src={el.icon} alt="#" className="icon" />
                </a>
              ))}
            </div>
          </div>
        )}
      </Col>
    </Wrapper>
  );
};
export default Header;
