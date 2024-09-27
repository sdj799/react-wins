import blackLogo from "@assets/images/blackLogo.svg";
import whiteLogo from "@assets/images/whiteLogo.svg";
import { NavEventType } from "@customTypes/layout";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLogoStyle = styled.h1`
  align-self: flex-start;
  padding: 15px 0;

  & > a {
    width: 100%;

    & > img {
      width: 89px;
    }
  }
`;

const Logo = ({ $isShowNav }: NavEventType) => {
  return (
    <HeaderLogoStyle>
      <Link to="/">
        <img src={$isShowNav ? blackLogo : whiteLogo} alt="logo" />
      </Link>
    </HeaderLogoStyle>
  );
};
export default React.memo(Logo);
