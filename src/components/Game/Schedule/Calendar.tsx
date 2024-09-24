import { useState } from "react";
import styled from "styled-components";
import Cells from "./Calendar/Cells";
import Days from "./Calendar/Days";
import Header from "./Calendar/Header";
import Result from "./Calendar/Result";
import Tab from "./Calendar/Tab";

const CalendarStyle = styled.div`
  width: 100%;

  & > div:first-child {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 15px 0;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
  }

  & > span {
    display: block;
    font-size: 14px;
    color: #222;
    font-weight: 300;
    text-align: right;
  }
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [activeTab, setActiveTab] = useState("kt wiz 경기");

  return (
    <CalendarStyle>
      <div>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
        <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
        <Result />
      </div>
      <div>
        <Days />
        {activeTab === "kt wiz 경기" ? (
          <Cells currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        ) : (
          <>
            <div>탭 test</div>
            <Cells currentMonth={currentMonth} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          </>
        )}
      </div>
      <span>* 경기 일정은 사정에 따라 변동될 수있습니다.</span>
    </CalendarStyle>
  );
};
export default Calendar;
