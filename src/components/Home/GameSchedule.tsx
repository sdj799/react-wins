import styled from "styled-components";
import RecentMatchList from "./GameSchedule/RecentMatchList";
import TeamRanking from "./GameSchedule/TeamRanking";
import Video from "./GameSchedule/Video";
import Information from "./Information";

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
        <Information
          link="#"
          title="수원 케이티 위즈 파크"
          desc="사전 주차 예약제"
          shortcut="사전주차 예약하기"
          bgImage="https://cdn.pixabay.com/photo/2016/08/02/15/47/baseball-1563851_1280.jpg"
        />
      </GameScheduleOuterStyle>
    </GameScheduleStyle>
  );
};
export default GameSchedule;
