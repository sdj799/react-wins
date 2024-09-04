import styled from "styled-components";
import { TNews } from "@types/news";
import { formatDate } from "@utils/date";
import calendar from "../../assets/icons/calendar.png";
import check from "../../assets/icons/check.png";
import kakao from "../../assets/icons/kakao.png";
import facebook from "../../assets/icons/facebook.png";

const MediaDetail = ({ news }: { news: TNews | undefined }) => {
  return (
    <>
      <ArticleContainer>
        <ContentHeader>
          <h1>{news?.artcTitle}</h1>
          <InfoDisplayList>
            <li>
              <span>{news && formatDate(new Date(news.regDttm))}</span>
              <Icon src={calendar}></Icon>
            </li>
            <li>
              <span>{news?.viewCnt}</span>
              <Icon src={check}></Icon>
            </li>
          </InfoDisplayList>
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

const InfoDisplayList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  & > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    color: #5b5a5a;
    &:last-child {
      margin-left: 20px;
    }
  }

  list-style: none;
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 5px;
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
  & > li {
    color: #5b5a5a;
    margin-left: 10px;
  }

  list-style: none;
`;
const SnsIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
