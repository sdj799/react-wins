import styled from "styled-components";

interface LogoProps {
  src: string;
}

const LogoStyle = styled.img`
  width: 100%;
  max-width: 56px;
`;

const Logo = ({ src }: LogoProps) => {
  return <LogoStyle src={src} alt="logo" />;
};
export default Logo;
