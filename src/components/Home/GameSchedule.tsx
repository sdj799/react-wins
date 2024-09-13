import styled from "styled-components";
import Parking from "./GameSchedule/Parking";
import RecentMatchList from "./GameSchedule/RecentMatch/RecentMatchList";
import TeamRanking from "./GameSchedule/TeamRanking";
import Video from "./GameSchedule/Video";

const GameScheduleStyle = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 826px;
  }
`;

const GameScheduleInnerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 30px 50px;
  margin: 100px 0;
  background-color: #fff;
  box-shadow: 0 30px 30px rgba(245, 50, 50, 0.3);
  z-index: 1;
  border-radius: 20px;
`;

const GameScheduleOuterStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const GameSchedule = () => {
  return (
    <GameScheduleStyle>
      <img src="https://www.ktwiz.co.kr/v2/imgs/img-title-schedule@2x.png" alt="game schedule" />
      <GameScheduleInnerStyle>
        <RecentMatchList />
        <Video />
      </GameScheduleInnerStyle>
      <GameScheduleOuterStyle>
        <TeamRanking />
        <Parking />
      </GameScheduleOuterStyle>
    </GameScheduleStyle>
  );
};
export default GameSchedule;
