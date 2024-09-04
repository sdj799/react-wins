import styled from "styled-components";
import { formatDate } from "@utils/date";
import { TNews } from "@types/news";
import calendar from "../../assets/icons/calendar.png";
import check from "../../assets/icons/check.png";

const MediaItem = ({ news }: { news: TNews }) => {
  return (
    <ArticleContainer>
      <ArticleBox>
        <MainContent>
          <NewsTitle>{news.artcTitle}</NewsTitle>
          <ContentBox dangerouslySetInnerHTML={{ __html: news.artcContents }}></ContentBox>
        </MainContent>
        <InfoDisplayList>
          <li>
            <span>{formatDate(new Date(news.regDttm))}</span>
            <Icon src={calendar}></Icon>
          </li>
          <li>
            <span>{news.viewCnt}</span>
            <Icon src={check}></Icon>
          </li>
        </InfoDisplayList>
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
const InfoDisplayList = styled.ul`
  width: 110px;
  display: flex;
  flex-direction: column;
  padding: 0;

  & > li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  list-style: none;
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
`;
