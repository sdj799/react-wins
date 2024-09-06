import PlayerInfo from "@components/PlayerInfo";
import { PlayerContentsWrapper } from "./Coach";
import TopButton from "@components/TopButton";

const Detail = () => {
  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo />
        <TopButton />
      </PlayerContentsWrapper>
    </>
  );
};
export default Detail;
