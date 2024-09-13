import PlayerCard from "@components/Player/PlayerCard";
import SearchForm from "@components/SearchForm";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { usePlayerStore } from "store/actions/usePlayerStore";

const Coach = () => {
  // const [playerList, setPlayerList] = useState(coachList.data.list);

  const fetchCoachList = usePlayerStore((state) => state.fetchCoachList);
  const playerList = usePlayerStore((state) => state.playerList);
  useEffect(() => {
    fetchCoachList();
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
                href={`/player/coach/detail?pcode=${data.pcode}`}
              />
            ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Coach;
