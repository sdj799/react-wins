import styled from "styled-components";
import { TNews } from "@types/news";
import TitleInfo from "./TitleInfo";

//media카테고리 공통 컴포넌트(소식,보도자료)
const MediaItem = ({ news }: { news: TNews }) => {
  return (
    <ArticleContainer>
      <ArticleBox>
        <MainContent>
          <NewsTitle>{news.artcTitle}</NewsTitle>
          <ContentBox dangerouslySetInnerHTML={{ __html: news.artcContents }}></ContentBox>
        </MainContent>
        <TitleInfo date={news.regDttm} view={news.viewCnt} />
      </ArticleBox>
    </ArticleContainer>
  );
};
export default MediaItem;

const ArticleContainer = styled.article`
  height: 180px;
  position: relative;
  overflow: hidden;
  padding: 13px 0px;
`;
const ArticleBox = styled.div`
  height: calc(100% - 46px);
  display: flex;
  flex-direction: row;
  padding: 23px 15px;
`;
const MainContent = styled.div`
  width: calc(100% - 140px);
`;
const NewsTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4rem;

  margin: 0;
`;
const ContentBox = styled.div`
  height: calc(100% - 23px);
  margin-top: 10px;
  overflow: hidden;
`;
