import styled from "styled-components";
import headerBtn from "@assets/headerBtn.svg";
import { NavEventType } from "@customTypes/layout";

const Utils = ({ $isShowNav }: NavEventType) => {
  return (
    <UtilsStyle $isShowNav={$isShowNav}>
      <li>로그인</li>
      <li>회원가입</li>
      <li>
        <img src={headerBtn} alt="ktSports" />
      </li>
    </UtilsStyle>
  );
};
export default Utils;

const UtilsStyle = styled.ul<{ $isShowNav: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 0;

  & > li {
    color: ${(props) => (props.$isShowNav ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.8)")};
    font-size: 13px;
    cursor: pointer;
  }

  & > li:first-child {
    border-right: ${(props) =>
      props.$isShowNav ? "1px solid rgba(0, 0, 0, 0.8)" : "1px solid rgba(255, 255, 255, 0.8)"};
    padding-right: 10px;
  }

  & > li:last-child {
    background-color: ${(props) => (props.$isShowNav ? "rgba(0, 0, 0, 0.1)" : "#fff")};
    border-radius: 3px;
    padding: 10px 15px;
    margin-left: 10px;

    & > img {
      width: 66px;
    }
  }
`;
