import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Button from "./Button";

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

const Header = () => {
  const fetchData = useWatchPointStore((state) => state.fetchData);
  const gameScore = useWatchPointStore((state) => state.gameScore);
  const schedule = useWatchPointStore((state) => state.schedule);

  const movePrevHandler = () => {
    fetchData(schedule?.prev.gameDate.toString()!, schedule?.prev.gmkey!);
  };

  const moveNextHandler = () => {
    fetchData(schedule?.next.gameDate.toString()!, schedule?.next.gmkey!);
  };

  return (
    <HeaderStyle>
      <div>
        <Button
          $color="#fff"
          $fontSize="20px"
          $bgColor={`${!schedule?.prev ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)"}`}
          $rounded="50%"
          onClick={movePrevHandler}
          $disabled={!schedule?.prev}>
          <IoIosArrowBack />
        </Button>
        <span>{`${gameScore?.displayDate}`}</span>
        <Button
          $color="#fff"
          $fontSize="20px"
          $bgColor={`${!schedule?.next ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)"}`}
          $rounded="50%"
          onClick={moveNextHandler}
          $disabled={!schedule?.next}>
          <IoIosArrowForward />
        </Button>
      </div>
      <span>{`${gameScore?.gtime} ${gameScore?.stadium}`}</span>
    </HeaderStyle>
  );
};
export default Header;
