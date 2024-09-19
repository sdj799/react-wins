import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import PlayerItem from "./PlayerItem";
import { TeamProps } from "./Team";

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

const PlayerList = ({ visit, home }: TeamProps) => {
  const visitLineup = useWatchPointStore((state) => state.visitLineup);
  const homeLineup = useWatchPointStore((state) => state.homeLineup);

  return (
    <PlayerListStyle>
      {visitLineup?.map(
        (player) =>
          player.teamName === visit && <PlayerItem key={player.seq} pos={player.pos} name={player.playerName} />
      )}
      {homeLineup?.map(
        (player) =>
          player.teamName === home && <PlayerItem key={player.seq} pos={player.pos} name={player.playerName} />
      )}
    </PlayerListStyle>
  );
};
export default PlayerList;
