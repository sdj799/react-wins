import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePlayerStore } from "store/actions/usePlayerStore";

const InfielderDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pcode = searchParams.get("pcode");
  const fetchPlayerDetail = usePlayerStore((state) => state.fetchPlayerDetail);
  useEffect(() => {
    pcode && fetchPlayerDetail("infielder", pcode);
  }, [pcode]);

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
export default InfielderDetail;
