import styled from "styled-components";

interface LogoProps {
  homeLogo?: string;
  visitLogo?: string;
}

const LogoStyle = styled.img`
  width: 100%;
  max-width: 70px;
`;

const Logo = ({ homeLogo, visitLogo }: LogoProps) => {
  return <LogoStyle src={homeLogo || visitLogo} alt="logo" />;
};
export default Logo;
