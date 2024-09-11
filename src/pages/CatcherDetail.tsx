import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable";

const CatcherDetail = () => {
  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo isCatcher={true} />
        <PlayerDetail isPitcher={false} />
        <TopButton />
      </PlayerContentsWrapper>
    </>
  );
};
export default CatcherDetail;
