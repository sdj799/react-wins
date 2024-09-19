import Channel from "@components/Game/WatchPoint/Channel";
import Lineup from "@components/Game/WatchPoint/Lineup";
import Pitcher from "@components/Game/WatchPoint/Pitcher";
import Record from "@components/Game/WatchPoint/Record";
import Weather from "@components/Game/WatchPoint/Weather";

import { useEffect, useState } from "react";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
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
  const fetchData = useWatchPointStore((state) => state.fetchdata);

  const schedule = useWatchPointStore((state) => state.schedule);
  const scheduleArr = [schedule?.prev, schedule?.current, schedule?.next];
  const [currentIndex, setCurrentIndex] = useState(1);
  const filteredData = scheduleArr[currentIndex];

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentIndex(1);
  }, [schedule]);

  if (!filteredData) return null;

  return (
    <WatchPointStyle>
      <Record
        filteredData={filteredData}
        currentIndex={currentIndex}
        scheduleArr={scheduleArr}
        setCurrentIndex={setCurrentIndex}
      />
      <Pitcher />
      <Lineup />
      <div>
        <Channel filteredData={filteredData} />
        <Weather />
      </div>
    </WatchPointStyle>
  );
};
export default WatchPoint;
