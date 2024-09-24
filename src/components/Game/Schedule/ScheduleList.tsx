import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";

const ScheduleListStyle = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px 0;
`;

const ScheduleList = () => {
  return (
    <ScheduleListStyle>
      <ScheduleItem />
      <ScheduleItem />
      <ScheduleItem />
    </ScheduleListStyle>
  );
};
export default ScheduleList;
