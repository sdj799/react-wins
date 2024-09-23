import footerLogo from "@assets/footerLogo.svg";
import React from "react";
import styled from "styled-components";

const FooterLogoStyle = styled.h2`
  & > img {
    width: 125px;
  }
`;

const Logo = () => {
  return (
    <FooterLogoStyle>
      <img src={footerLogo} alt="footerLogo" />
    </FooterLogoStyle>
  );
};
export default React.memo(Logo);
