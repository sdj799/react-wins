import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useScheduleStore } from "store/actions/useScheduleStore";
import styled from "styled-components";

interface CellsProps {
  currentMonth: Date;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  formattedDate: string;
  isKtwizData?: boolean;
}

const CellsStyle = styled.div`
  width: 100%;

  & > ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;

    & > li {
      width: calc(100% / 7);
      min-height: 180px;
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-right: 1px solid #d2d2d2;
      text-align: right;
      cursor: pointer;

      &.notCurrentMonth {
        cursor: auto;
      }

      & > span {
        font-size: 14px;
        font-weight: 300;
      }

      &.home {
        background-color: #fff5f7;
      }

      &.whole {
        gap: 13px;
      }
    }
  }
`;

const CellsInnerStyle = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
      font-size: 14px;
      font-weight: 300;
    }
  }

  & > span {
    font-size: 14px;
    font-weight: 300;
  }

  & > strong {
    position: absolute;
    top: -15px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    color: #fff;
    font-weight: 400;

    &.victory {
      background-color: #ec090b;
    }

    &.defeat {
      background-color: #343434;
    }

    &.draw {
      background-color: #9d9d9d;
    }
  }

  & > div:last-child {
    flex-direction: column;
    gap: 8px;
    margin-top: 8px;

    & > span {
      font-size: 14px;
      font-weight: 300;
    }

    & > img {
      width: 100%;
      max-width: 80px;
    }
  }

  & > p {
    font-size: 14px;
    font-weight: 300;
    color: #222;
    text-align: left;

    &.red {
      color: #ec0a0b;
    }
  }
`;

const Cells = ({ isKtwizData, currentMonth, setSelectedDate }: CellsProps) => {
  const navigate = useNavigate();
  const dataList = useScheduleStore((state) => state.list);
  const wholeDataList = useScheduleStore((state) => state.wholeList);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let day = startDate;

  while (day <= endDate) {
    const days = Array.from({ length: 7 }, (_, index) => {
      const currentDay = addDays(day, index);
      const isCurrentMonth = format(currentMonth, "M") === format(currentDay, "M");
      const currentDayData = dataList.find((data) => data.displayDate === format(currentDay, "yyyyMMdd"));
      const isHome = currentDayData?.homeKey === "KT";
      const currentDayWholeData = wholeDataList.find((data) => data.displayDate === format(currentDay, "yyyyMMdd"));

      return (
        <li
          key={format(currentDay, "yyyyMMdd")}
          onClick={() => isCurrentMonth && isKtwizData && currentDayData && onDateClickHandler(currentDay)}
          className={
            !isCurrentMonth || (isKtwizData && !currentDayData) || !isKtwizData
              ? "notCurrentMonth"
              : isKtwizData && isHome
                ? "home"
                : !isKtwizData && currentDayWholeData
                  ? "whole"
                  : ""
          }>
          {isCurrentMonth && (
            <>
              <span>{format(currentDay, "d")}</span>
              {isKtwizData && currentDayData && (
                <CellsInnerStyle>
                  <strong
                    className={
                      currentDayData.outcome === "승"
                        ? "victory"
                        : currentDayData.outcome === "패"
                          ? "defeat"
                          : currentDayData.outcome === "무"
                            ? "draw"
                            : ""
                    }>
                    {currentDayData.outcome}
                  </strong>
                  <div>
                    <img src={isHome ? currentDayData.visitLogo : currentDayData.homeLogo} alt="logo" />
                    <span>{`${currentDayData.gtime} ${currentDayData.stadium}`}</span>
                    <span>{currentDayData.broadcast}</span>
                  </div>
                </CellsInnerStyle>
              )}
              {!isKtwizData && currentDayWholeData && (
                <CellsInnerStyle>
                  {wholeDataList
                    .filter((data) => data.displayDate === format(currentDay, "yyyyMMdd"))
                    .map((data, index) => (
                      <p key={index} className={data.visit.includes("KT") || data.home.includes("KT") ? "red" : ""}>
                        {`${data.visit}${data.visitScore ? data.visitScore : ""}:${data.home}${data.homeScore ? data.homeScore : ""} [${data.stadium}]`}
                      </p>
                    ))}
                </CellsInnerStyle>
              )}
            </>
          )}
        </li>
      );
    });

    rows.push(<ul key={format(day, "yyyyMMdd")}>{days}</ul>);
    day = addDays(day, 7);
  }

  const onDateClickHandler = (day: Date) => {
    setSelectedDate(format(day, "yyyyMMdd"));
    navigate("/game/boxscore");
  };

  return <CellsStyle>{rows}</CellsStyle>;
};

export default Cells;
