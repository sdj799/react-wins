import styled from "styled-components";
import { TNews } from "@types/news";
import kakao from "../../assets/icons/kakao.png";
import facebook from "../../assets/icons/facebook.png";
import TitleInfo from "./TitleInfo";
import NavigationControls from "./NavigationControls";

//media카테고리 공통 컴포넌트(소식,보도자료)
const MediaDetail = ({ news }: { news: TNews | undefined }) => {
  return (
    <>
      <ArticleContainer>
        <ContentHeader>
          <h1>{news?.artcTitle}</h1>
          <TitleInfo date={news && news?.regDttm} view={news?.viewCnt} />
        </ContentHeader>
        <MainContent dangerouslySetInnerHTML={news && { __html: news?.artcContents }}></MainContent>
      </ArticleContainer>
      <ArticleFooter>
        <SnsList>
          <li>
            <SnsIcon src={kakao} />
          </li>
          <li>
            <SnsIcon src={facebook} />
          </li>
        </SnsList>
      </ArticleFooter>
      <NavigationControls />
    </>
  );
};
export default MediaDetail;

const ArticleContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f5f5f5;

  & > h1 {
    font-size: 22px;
    line-height: 28px;
    margin: 0;
  }
`;
const MainContent = styled.div`
  padding: 20px 10px;
`;

const ArticleFooter = styled.div`
  margin: 0 20px 15px;
`;

const SnsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  list-style: none;
`;
const SnsIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
