import ControllBtn from "@components/Game/Common/ControllButton";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

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
        <ControllBtn
          type="button"
          onClickHandler={movePrevHandler}
          $disabled={!schedule?.prev}
          icon={<IoIosArrowBack />}
        />
        <span>{`${gameScore?.displayDate}`}</span>
        <ControllBtn
          type="button"
          onClickHandler={moveNextHandler}
          $disabled={!schedule?.next}
          icon={<IoIosArrowForward />}
        />
      </div>
      <span>{`${gameScore?.gtime} ${gameScore?.stadium}`}</span>
    </HeaderStyle>
  );
};
export default Header;
