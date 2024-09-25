import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from "date-fns";
import styled from "styled-components";

interface CellsProps {
  currentMonth: Date;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
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
      text-align: right;
      padding: 10px;
      border-right: 1px solid #d2d2d2;
      cursor: pointer;

      &.notCurrentMonth {
        cursor: auto;
      }

      & > span {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
`;

const Cells = ({ currentMonth, setSelectedDate }: CellsProps) => {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const rows = [];
  let days = [];
  let day = startDate;
  let num = 0;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;
      num++;

      const isCurrentMonth = format(currentMonth, "M") === format(day, "M");

      days.push(
        <li
          onClick={() => isCurrentMonth && onDateClickHandler(cloneDay)}
          key={num}
          className={!isCurrentMonth ? "notCurrentMonth" : ""}>
          {isCurrentMonth && <span>{format(day, "d")}</span>}
        </li>
      );
      day = addDays(day, 1);
    }
    rows.push(<ul key={num}>{days}</ul>);
    days = [];
  }

  const onDateClickHandler = (day: Date) => {
    setSelectedDate(format(day, "yyyyMMdd"));
  };

  return <CellsStyle>{rows}</CellsStyle>;
};
export default Cells;
