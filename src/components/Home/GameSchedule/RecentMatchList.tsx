import { MatchesType } from "@customTypes/recentMatch";
import recentMatchesData from "@data/recentMatches.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MatchesHeader from "./MatchesHeader";
import RecentMatchItem from "./RecentMatchItem";

const RecentMatchListStyle = styled.div`
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
  }
`;

const RecentMatchList = () => {
  const [data, setData] = useState<MatchesType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const today = new Date();
  const formattedToday = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;

  const prevBtnHandler = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextBtnHandler = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setData(recentMatchesData);

    const matchingIndex = recentMatchesData.findIndex((match) => match.displayDate === formattedToday);

    if (matchingIndex !== -1) {
      setCurrentIndex(matchingIndex);
    }
  }, [formattedToday]);

  return (
    <RecentMatchListStyle>
      <MatchesHeader
        currentIndex={currentIndex}
        prevBtnHandler={prevBtnHandler}
        nextBtnHandler={nextBtnHandler}
        data={data}
      />
      <RecentMatchItem currentIndex={currentIndex} data={data} />
    </RecentMatchListStyle>
  );
};
export default RecentMatchList;
