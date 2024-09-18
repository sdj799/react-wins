import MainTable from "@components/BoxScore/MainTable";
import styled from "styled-components";
import LocationTitle from "../components/Location/LocationTitle";

const BoxScoreWrapper = styled.div`
  width: 100%;
`;

const ArticleWrapper = styled.article`
  margin-top: 40px;
`;

const BoxScore = () => {
  return (
    <>
      <BoxScoreWrapper>
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
