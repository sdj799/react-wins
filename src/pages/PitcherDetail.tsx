import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePlayerStore } from "store/actions/usePlayerStore";

const PitcherDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pcode = searchParams.get("pcode");

  const fetchPlayerDetail = usePlayerStore((state) => state.fetchPlayerDetail);
  useEffect(() => {
    pcode && fetchPlayerDetail("pitcher", pcode);
  }, [pcode]);

  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo isPitcher={true} />
        <PlayerDetail isPitcher={true} />
        <TopButton />
      </PlayerContentsWrapper>
    </>
  );
};
export default PitcherDetail;
