import styled from "styled-components";
import Button from "./Common/Button";
import Date from "./Common/Date";
import Score from "./Common/Score";
import Text from "./Common/Text";
import HomeTeam from "./HomeTeam";
import VisitTeam from "./VisitTeam";

const ScheduleItemStyle = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #d2d2d2;
  gap: 10px;

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
  }

  &:nth-child(2) {
    z-index: 1;
    width: 100%;
    min-width: 400px;
    min-height: 226px;
    height: 100%;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.24);
  }
`;

const ScheduleItem = () => {
  return (
    <ScheduleItemStyle>
      <Date date="2024.9.21" />
      <div>
        <VisitTeam />
        <div>
          <Score visitScore={4} homeScore={1} />
          <Text text="패" $color="#ec0a0b" />
          <Button to="#" />
        </div>
        <HomeTeam />
      </div>
    </ScheduleItemStyle>
  );
};
export default ScheduleItem;
