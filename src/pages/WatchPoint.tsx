import Channel from "@components/Game/WatchPoint/Channel";
import Lineup from "@components/Game/WatchPoint/Lineup";
import Pitcher from "@components/Game/WatchPoint/Pitcher";
import Record from "@components/Game/WatchPoint/Record";
import Weather from "@components/Game/WatchPoint/Weather";
// import { useEffect } from "react";
// import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

const WatchPointStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const WatchPoint = () => {
  // const fetchData = useWatchPointStore((state) => state.fetchdata);
  // const data = useWatchPointStore((store) => store.gameScore);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <WatchPointStyle>
      <Record />
      <Pitcher />
      <Lineup />
      <div>
        <Channel />
        <Weather />
      </div>
    </WatchPointStyle>
  );
};
export default WatchPoint;
