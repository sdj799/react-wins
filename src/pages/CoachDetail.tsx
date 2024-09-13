import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable.style";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePlayerStore } from "store/actions/usePlayerStore";

const CoachDetail = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pcode = searchParams.get("pcode");

  const fetchCoachDetail = usePlayerStore((state) => state.fetchCoachDetail);
  useEffect(() => {
    pcode && fetchCoachDetail(pcode);
  }, [pcode]);

  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo />
        <TopButton />
      </PlayerContentsWrapper>
    </>
  );
};
export default CoachDetail;
