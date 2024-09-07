import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "./Coach";

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
