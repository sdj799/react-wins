import versus from "@assets/images/watchPointImg2.png";

import styled from "styled-components";
import Team from "./Lineup/Team";
import Title from "./Title";

const LineupStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
  }
`;

const Lineup = () => {
  return (
    <LineupStyle>
      <Title title="라인업" />
      <div>
        <Team />
        <img src={versus} alt="versus" />
        <Team />
      </div>
    </LineupStyle>
  );
};
export default Lineup;
