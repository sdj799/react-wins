import { NavEventType } from "@customTypes/layout";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopMenuStyle = styled.ul<{ $isShowNav: boolean }>`
  display: ${(props) => (props.$isShowNav ? "contents" : "grid")};
  grid-template-columns: ${(props) => !props.$isShowNav && "repeat(8, 1fr)"};

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

const TopMenu = ({ $isShowNav }: NavEventType) => {
  const topMenuList = [
    {
      link: "/ktwiz/about",
      title: "kt wiz",
      target: "_self",
    },
    {
      link: "/wizpark/intro",
      title: "wiz park",
      target: "_self",
    },
    {
      link: "/game/schedule",
      title: "Game",
      target: "_self",
    },
    {
      link: "/player/coach",
      title: "Player",
      target: "_self",
    },
    {
      link: "/media/wiznews",
      title: "Media",
      target: "_self",
    },
    {
      link: "https://www.ktwizstore.co.kr/",
      title: "Shop",
      target: "_blank",
    },
    {
      link: "https://b2b.ktwiz.co.kr/",
      title: "스폰서",
      target: "_blank",
    },
    {
      link: "/ticket/reservation",
      title: "티켓구매",
      target: "_self",
    },
  ];
  return (
    <TopMenuStyle $isShowNav={$isShowNav}>
      {topMenuList.map((menu) => (
        <li>
          <Link to={menu.link} target={menu.target}>
            {menu.title}
          </Link>
        </li>
      ))}
    </TopMenuStyle>
  );
};
export default React.memo(TopMenu);
