import styled from "styled-components";
import Body from "./Calendar/Body";
import Header from "./Calendar/Header";
import Tab from "./Calendar/Tab";

const CalendarStyle = styled.div`
  width: 100%;

  & > div:first-child {
    width: 100%;
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > span {
      font-size: 14px;
      color: #222;
      font-weight: 300;
      align-self: flex-end;
    }
  }
`;

const Calendar = () => {
  return (
    <CalendarStyle>
      <div>
        <Tab />
        <Header />
      </div>
      <div>
        <Body />
        <span>* 경기 일정은 사정에 따라 변동될 수있습니다.</span>
      </div>
    </CalendarStyle>
  );
};
export default Calendar;
