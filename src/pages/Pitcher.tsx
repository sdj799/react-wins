import PlayerCard from "@components/Player/PlayerCard";
import SearchForm from "@components/SearchForm";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { usePlayerStore } from "store/actions/usePlayerStore";

const Pitcher = () => {
  const fetchPlayer = usePlayerStore((state) => state.fetchPlayerList);
  const playerList = usePlayerStore((state) => state.playerList);
  useEffect(() => {
    fetchPlayer("pitcherlist");
  }, []);

  return (
    <>
      <SearchForm />
      <PlayerContentsWrapper>
        <ul>
          {playerList &&
            playerList.map((data) => (
              <PlayerCard
                key={data.pcode}
                playerName={data.playerName}
                playerNum={data.backnum}
                imgSrc={data.playerPrvwImg}
                href={`/player/pitcher/detail?pcode=${data.pcode}`}
              />
            ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Pitcher;
