import styled from "styled-components";
import PlayerItem from "./PlayerItem";

const PlayerListStyle = styled.ul`
  position: relative;
  width: 100%;
  height: 309px;
  margin-top: 15px;
  background-image: url("https://www.ktwiz.co.kr/static/media/lineup_back.6325751b.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 20px;
`;

const PlayerList = () => {
  return (
    <PlayerListStyle>
      <PlayerItem />
    </PlayerListStyle>
  );
};
export default PlayerList;
