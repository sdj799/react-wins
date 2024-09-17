import styled from "styled-components";

interface LogoProps {
  src: string;
  team: string;
}

const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100%;
    max-width: 82px;
    margin-bottom: 8px;
  }

  & > span {
    font-weight: 300;
    font-size: 14px;
  }
`;

const Logo = ({ src, team }: LogoProps) => {
  return (
    <LogoStyle>
      <img src={src} alt="teamLogo" />
      <span>{team}</span>
    </LogoStyle>
  );
};
export default Logo;
