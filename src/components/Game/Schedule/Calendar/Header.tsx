import ControllBtn from "@components/Game/Common/ControllButton";
import { addMonths, format, subMonths } from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useScheduleStore } from "store/actions/useScheduleStore";
import styled from "styled-components";
import Dropdown from "./Dropdown";

interface HeaderProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
  formattedDate: string;
}

const HeaderStyle = styled.div`
  width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 30px;

  & > span {
    font-size: 24px;
    font-weight: 400;
  }
`;

const Header = ({ currentMonth, setCurrentMonth, formattedDate }: HeaderProps) => {
  const fetchMonthSchedule = useScheduleStore((state) => state.fetchMonthSchedule);

  const movePrevMonthHandler = () => {
    const newFormattedDate = subMonths(currentMonth, 1);
    setCurrentMonth(newFormattedDate);
    fetchMonthSchedule(format(newFormattedDate, "yyyyMM"));
  };

  const moveNextMonthHandler = () => {
    const newFormattedDate = addMonths(currentMonth, 1);
    setCurrentMonth(newFormattedDate);
    fetchMonthSchedule(format(newFormattedDate, "yyyyMM"));
  };

  return (
    <HeaderStyle>
      <ControllBtn type="button" icon={<IoIosArrowBack />} onClickHandler={movePrevMonthHandler} />
      <span>{format(currentMonth, "yyyy")}년</span>
      <Dropdown currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} formattedDate={formattedDate} />
      <ControllBtn type="button" icon={<IoIosArrowForward />} onClickHandler={moveNextMonthHandler} />
    </HeaderStyle>
  );
};
export default Header;
