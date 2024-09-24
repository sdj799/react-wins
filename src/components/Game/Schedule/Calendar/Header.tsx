import ControllBtn from "@components/Game/Common/ControllButton";
import { addMonths, format, subMonths } from "date-fns";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Dropdown from "./Dropdown";

interface HeaderProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
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

const Header = ({ currentMonth, setCurrentMonth }: HeaderProps) => {
  const movePrevMonthHandler = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const moveNextMonthHandler = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <HeaderStyle>
      <ControllBtn type="button" icon={<IoIosArrowBack />} onClickHandler={movePrevMonthHandler} />
      <span>{format(currentMonth, "yyyy")}년</span>
      <Dropdown currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <ControllBtn type="button" icon={<IoIosArrowForward />} onClickHandler={moveNextMonthHandler} />
    </HeaderStyle>
  );
};
export default Header;
