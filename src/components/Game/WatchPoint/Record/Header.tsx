import { ScheduleElType } from "@customTypes/watchPoint";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Button from "./Button";

interface HeaderProps {
  currentIndex: number;
  filteredData: ScheduleElType | null;
  scheduleArr: (ScheduleElType | undefined)[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > span {
      font-size: 26px;
      font-weight: 400;
      color: #222;
    }
  }

  & > span {
    font-size: 14px;
    font-weight: 300;
  }
`;

const Header = ({ filteredData, currentIndex, scheduleArr, setCurrentIndex }: HeaderProps) => {
  const movePrevHandler = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const moveNextHandler = () => {
    if (currentIndex < scheduleArr.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <HeaderStyle>
      <div>
        <Button
          $color="#fff"
          $fontSize="20px"
          $bgColor={`${currentIndex === 0 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)"}`}
          $rounded="50%"
          onClick={movePrevHandler}
          $disabled={currentIndex === 0}>
          <IoIosArrowBack />
        </Button>
        <span>{`0${filteredData?.gmonth}.${filteredData?.gday} (토) ${filteredData?.gtime}`}</span>
        <Button
          $color="#fff"
          $fontSize="20px"
          $bgColor={`${currentIndex === 2 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)"}`}
          $rounded="50%"
          onClick={moveNextHandler}
          $disabled={currentIndex === scheduleArr.length - 1}>
          <IoIosArrowForward />
        </Button>
      </div>
      <span>{`${filteredData?.gtime} ${filteredData?.stadium}`}</span>
    </HeaderStyle>
  );
};
export default Header;
