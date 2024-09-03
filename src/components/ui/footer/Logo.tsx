import styled from "styled-components";
import footerLogo from "@assets/footerLogo.svg";

const Logo = () => {
  return (
    <FooterLogoStyle>
      <img src={footerLogo} alt="footerLogo" />
    </FooterLogoStyle>
  );
};
export default Logo;

const FooterLogoStyle = styled.h2`
  & > img {
    width: 125px;
  }
`;
