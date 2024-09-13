import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useLocation } from "react-router-dom";

const CatcherDetail = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const pcode = searchParams.get("pcode");

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
