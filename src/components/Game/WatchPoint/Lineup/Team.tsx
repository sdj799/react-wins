import styled from "styled-components";
import PlayerList from "./PlayerList";

export interface TeamProps {
  src?: string | undefined;
  visit?: string;
  home?: string;
}

const TeamStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;

  & > img {
    width: 100%;
    max-width: 100px;
  }
`;

const Team = ({ src, visit, home }: TeamProps) => {
  return (
    <TeamStyle>
      <img src={src} alt="teamLogo" />
      <PlayerList visit={visit} home={home} />
    </TeamStyle>
  );
};
export default Team;
