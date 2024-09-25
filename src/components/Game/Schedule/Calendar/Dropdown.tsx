import { format, setMonth } from "date-fns";
import { useState } from "react";
import styled from "styled-components";

interface DropdownProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const DropdownStyle = styled.div<{ $isOpen: boolean }>`
  position: relative;

  & > div {
    width: 90px;
    position: relative;
    display: inline-block;
    padding: 10px;
    border: 1px solid #a6a6a6;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #222;
    cursor: pointer;
  }

  & > ul {
    width: 90px;
    height: 110px;
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border: 1px solid #d2d2d2;
    border-top: 0;
    overflow: scroll;

    & > li {
      text-align: center;
      padding: 10px;
      cursor: pointer;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }
`;

const Dropdown = ({ currentMonth, setCurrentMonth }: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const months = Array.from({ length: 12 }, (_, index) => index);

  const toggleDropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const monthSelectHandler = (month: number) => {
    setCurrentMonth(setMonth(currentMonth, month));
    setIsDropdownOpen(false);
  };

  return (
    <DropdownStyle $isOpen={isDropdownOpen}>
      <div onClick={toggleDropdownHandler}>{format(currentMonth, "MM")}월</div>
      <ul>
        {months.map((month) => (
          <li key={month} onClick={() => monthSelectHandler(month)}>
            {month + 1}월
          </li>
        ))}
      </ul>
    </DropdownStyle>
  );
};
export default Dropdown;
