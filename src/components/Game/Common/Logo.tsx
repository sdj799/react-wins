import styled from "styled-components";

interface LogoProps {
  src: string | undefined;
  team: string | undefined;
  score?: string | undefined;
}

const LogoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > img {
    /* width: 100%; */
    width: 85px;
  }

  & > strong {
    font-size: 24px;
    font-weight: 400;
    margin: 10px 0;
  }

  & > span {
    font-weight: 300;
    font-size: 14px;
  }
`;

const Logo = ({ src, team, score }: LogoProps) => {
  return (
    <LogoStyle>
      <img src={src} alt="teamLogo" />
      {score && <strong>{score}</strong>}
      <span>{team}</span>
    </LogoStyle>
  );
};
export default Logo;
