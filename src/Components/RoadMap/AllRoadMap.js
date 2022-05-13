import React from "react";

import styled from "styled-components";
import RoadMap from "./RoadMap";
const Wrapper = styled.div`
  .title {
    font-size: 52px;
    font-weight: 700;
    color: #ffff;
    text-transform: uppercase;
    ${"" /* font-family: "Rowdies", cursive; */}
  }
  @media only screen and (max-width: 1199px) {
    .title {
      font-size: 40px;
    }
  }
`;
const AllRoadMap = () => {
  const roadMap = [
    {
      img: "./images/100.png",
      title: "Phase 1",
      steps: [
        " Pre-approval by Opensea",
        "Collaborations with Established Communities & DAOs",
      ],
    },
    {
      img: "./images/101.png",
      title: "Phase 2",
      steps: [
        " Implementation of Matrica Verification for Exclusivity",
        " DAO Voting System Implemented",
        " 50% of funds raised from auctions will be Allocated to DAO",
      ],
    },
    {
      img: "./images/102.png",
      title: "Phase 3",
      steps: [
        " $Panda Token Introduced. Each Staked Mafia Panda will earn 5 $Panda Daily.",
        " 15% of Mint Funds & 30% Royalties used to fuel LP for $Panda Token",
        " Weekly Lottery (5 Staked Mafia Panda will be airdropped a raffle ticket weekly)",
        " You will need to acquire 200 $Panda to Enhance your Mafia Panda into a Golden Mafia Panda when staked will have a multiplier to earn more $Panda",
      ],
    },
    {
      img: "./images/B1.png",
      title: "Phase 4",
      steps: [
        " Mafia Panda DAO will purchase into established projects (Increase DAO Portfolio Value).",
        " 20% Secondary Sales Allocated to DAO Community Wallet",
      ],
    },
  ];
  return (
    <Wrapper id="roadmap ">
      {" "}
      <h2 className="title text-center pt-4 ">ROADMAP</h2>
      {roadMap.map((el, i) => (
        <RoadMap
          steps={el.steps}
          title={el.title}
          key={i}
          reverse={i % 2}
          img={el.img}
        />
      ))}
    </Wrapper>
  );
};
export default AllRoadMap;
