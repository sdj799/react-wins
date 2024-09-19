import BoxScoreInfo from "@components/BoxScore/BoxScoreInfo";
import MainTable from "@components/BoxScore/MainTable";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const daySchedule = useGameStore((state) => state.daySchedule);
  const fetchBoxScore = useGameStore((state) => state.fetchBoxScore);

  const { gameDate, gmkey } = useParams<{ gameDate: string; gmkey: string }>();

  // 처음 페이지 방문시
  useEffect(() => {
    if (!gameDate || !gmkey) {
      fetchDaySchedule();
    }
  }, []);

  useEffect(() => {
    if (gameDate && gmkey) fetchBoxScore(gameDate, gmkey);
  }, [gameDate, gmkey]);

  return (
    <>
      <BoxScoreWrapper>
        <BoxScoreInfo />
        <ArticleWrapper>
          <LocationTitle title="주요 기록" />
          <MainTable />
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${"KIA"} 타자 기록`} />
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${"KT"} 타자 기록`} />
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${"KIA"} 투수 기록`} />
        </ArticleWrapper>
        <ArticleWrapper>
          <LocationTitle title={`${"KT"} 투수 기록`} />
        </ArticleWrapper>
      </BoxScoreWrapper>
    </>
  );
};
export default BoxScore;
