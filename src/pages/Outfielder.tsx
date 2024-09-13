import PlayerCard from "@components/Player/PlayerCard";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { usePlayerStore } from "store/actions/usePlayerStore";

const Outfielder = () => {
  const fetchPlayer = usePlayerStore((state) => state.fetchPlayerList);
  const playerList = usePlayerStore((state) => state.playerList);
  useEffect(() => {
    fetchPlayer("outfielderlist");
  }, []);

  return (
    <>
      <PlayerContentsWrapper>
        <ul>
          {playerList &&
            playerList.map((data) => (
              <PlayerCard
                key={data.pcode}
                playerName={data.playerName}
                playerNum={data.backnum}
                imgSrc={data.playerPrvwImg}
                href={`/player/outfileder/detail?pcode=${data.pcode}`}
              />
            ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Outfielder;
