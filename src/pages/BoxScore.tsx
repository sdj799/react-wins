import BoxScoreInfo from "@components/BoxScore/BoxScoreInfo";
import MainTable from "@components/BoxScore/MainTable";
import PlayerTable from "@components/Player/PlayerTable";
import { FilterGameBatterType, FilterGamePitcherType } from "@customTypes/boxScore";
import { gameBatterHeaders, gamePitcherHeaders } from "@data/gameHeaders";
import { filterGameBatterData, filterGamePitcherData } from "@utils/filterBoxScoreData";
import { useEffect } from "react";
import { useGameStore } from "store/actions/useGameStore";
import styled from "styled-components";
import LocationTitle from "../components/Location/LocationTitle";

const BoxScoreWrapper = styled.div`
  width: 100%;
`;

const ArticleWrapper = styled.article`
  margin-top: 40px;
`;

const BoxScore = () => {
  const fetchDaySchedule = useGameStore((state) => state.fetchDaySchedule);
  const hBatters = useGameStore((state) => state.hBatters);
  const hPitchers = useGameStore((state) => state.hPitchers);
  const vBatters = useGameStore((state) => state.vBatters);
  const vPitchers = useGameStore((state) => state.vPitchers);
  const schedule = useGameStore((state) => state.schedule);

  // 처음 페이지 방문시
  useEffect(() => {
    if (!schedule) {
      fetchDaySchedule();
    }
  }, []);
  if (!schedule) return <></>;

  const filteredHBatters: FilterGameBatterType[] | undefined = hBatters?.map(filterGameBatterData);
  const filteredHPitchers: FilterGamePitcherType[] | undefined = hPitchers?.map(filterGamePitcherData);
  const filteredVBatters: FilterGameBatterType[] | undefined = vBatters?.map(filterGameBatterData);
  const filteredVPitchers: FilterGamePitcherType[] | undefined = vPitchers?.map(filterGamePitcherData);

  return (
    <>
      <BoxScoreWrapper>
        <BoxScoreInfo />
        <ArticleWrapper>
          <LocationTitle title="주요 기록" />
          <MainTable />
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${schedule?.current.visit} 타자 기록`} />
          {filteredVBatters && (
            <PlayerTable<FilterGameBatterType> resData={filteredVBatters} headers={gameBatterHeaders} />
          )}
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${schedule?.current.home} 타자 기록`} />
          {filteredHBatters && (
            <PlayerTable<FilterGameBatterType> resData={filteredHBatters} headers={gameBatterHeaders} />
          )}
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${schedule?.current.visit} 투수 기록`} />
          {filteredVPitchers && (
            <PlayerTable<FilterGamePitcherType> resData={filteredVPitchers} headers={gamePitcherHeaders} />
          )}
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${schedule?.current.home} 투수 기록`} />
          {filteredHPitchers && (
            <PlayerTable<FilterGamePitcherType> resData={filteredHPitchers} headers={gamePitcherHeaders} />
          )}
        </ArticleWrapper>
      </BoxScoreWrapper>
    </>
  );
};
export default BoxScore;
