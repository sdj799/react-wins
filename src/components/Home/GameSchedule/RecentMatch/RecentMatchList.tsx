import { useEffect, useState } from "react";
import { useHomeStore } from "store/actions/useHomeStore";
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
  const fetchRecentGames = useHomeStore((state) => state.fetchRecentGames);
  const data = useHomeStore((state) => state.data);

  const recentGames = [data?.prev, data?.current, data?.next];
  const [currentIndex, setCurrentIndex] = useState(1);
  const filteredData = recentGames[currentIndex];

  useEffect(() => {
    fetchRecentGames();
  }, []);

  useEffect(() => {
    setCurrentIndex(1);
  }, [data]);

  if (!filteredData) return null;

  return (
    <RecentMatchListStyle>
      <MatchesHeader
        recentGames={recentGames}
        filteredData={filteredData}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <RecentMatchItem filteredData={filteredData} />
    </RecentMatchListStyle>
  );
};
export default RecentMatchList;
