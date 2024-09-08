import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import styled from "styled-components";
import { PlayerContentsWrapper } from "./Coach";

const TopBtnWrapper = styled.div`
  height: 100px;
  position: relative;
`;

const CoachDetail = () => {
  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo />
        <TopBtnWrapper>
          <TopButton />
        </TopBtnWrapper>
      </PlayerContentsWrapper>
    </>
  );
};
export default CoachDetail;
