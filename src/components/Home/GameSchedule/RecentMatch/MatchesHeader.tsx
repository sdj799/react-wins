import { RecentGamesType } from "@customTypes/home";
import React, { useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import ControllBtn from "./ControllBtn";
import MatchesInfo from "./MatchesInfo";

interface MatchedHeaderProps {
  recentGames: (RecentGamesType | null | undefined)[];
  filteredData: RecentGamesType;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MatchesHeaderStyle = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #eceef2;

  & > strong {
    width: 100%;
  }
`;

const MatchesHeader = ({ recentGames, filteredData, currentIndex, setCurrentIndex }: MatchedHeaderProps) => {
  const movePrevHandler = useCallback(() => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  }, [currentIndex, setCurrentIndex]);

  const moveNextHandler = useCallback(() => {
    if (currentIndex < recentGames.length - 1) setCurrentIndex(currentIndex + 1);
  }, [currentIndex, recentGames.length, setCurrentIndex]);
  
  return (
    <MatchesHeaderStyle>
      <ControllBtn
        type="button"
        icon={<IoIosArrowBack />}
        onClickHandler={movePrevHandler}
        $disabled={currentIndex === 0}
      />
      <MatchesInfo
        date={`${filteredData.gyear}.${filteredData.gmonth}.${filteredData.gday}`}
        stadium={filteredData.stadium}
        time={filteredData.gtime}
      />
      <ControllBtn
        type="button"
        icon={<IoIosArrowForward />}
        onClickHandler={moveNextHandler}
        $disabled={currentIndex === recentGames.length - 1}
      />
    </MatchesHeaderStyle>
  );
};
export default React.memo(MatchesHeader);
