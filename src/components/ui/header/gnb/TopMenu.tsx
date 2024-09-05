import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavEventType } from "@customTypes/layout";

const TopMenu = ({ $isShowNav }: NavEventType) => {
  return (
    <TopMenuStyle $isShowNav={$isShowNav}>
      <li>
        <Link to="/ktwiz">kt wiz</Link>
      </li>
      <li>
        <Link to="/wizpark">wiz park</Link>
      </li>
      <li>
        <Link to="/game">Game</Link>
      </li>
      <li>
        <Link to="/player">Player</Link>
      </li>
      <li>
        <Link to="/media">Media</Link>
      </li>
      <li>
        <Link to="#">Shop</Link>
      </li>
      <li>
        <Link to="#">스폰서</Link>
      </li>
      <li className="redText">
        <Link to="#">티켓구매</Link>
      </li>
    </TopMenuStyle>
  );
};
export default TopMenu;

const TopMenuStyle = styled.ul<{ $isShowNav: boolean }>`
  display: ${(props) => (props.$isShowNav ? "contents" : "grid")};
  grid-template-columns: ${(props) => !props.$isShowNav && "repeat(8, 1fr)"};
  width: 795px;

  & > li {
    color: ${(props) => (props.$isShowNav ? "#000" : "#fff")};
    font-size: 17px;
    font-weight: 400;
    cursor: pointer;

    & > a {
      display: inline-block;
      padding: 30px 0;
      border-bottom: 3px solid transparent;
      transition: border-bottom 0.1s;
    }
  }

  .redText {
    color: #d60c0c;
    font-weight: 700;
  }

  & > li {
    & > a:hover {
      border-bottom: 3px solid #ea0101;
      transition: border-bottom 0.1s;
    }
  }
`;
