import styled from "styled-components";
import PlayerList from "./PlayerList";

const TeamStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0;

  & > img {
    width: 100%;
    max-width: 72px;
  }
`;

const Team = () => {
  return (
    <TeamStyle>
      <img src="" alt="teamLogo" />
      <PlayerList />
    </TeamStyle>
  );
};
export default Team;
