import facebook from "@assets/icons/facebook.png";
import kakao from "@assets/icons/kakao.png";
import { TMedia } from "@customTypes/media";
import styled from "styled-components";
import MediaLayout from "./MediaLayout";
import NavigationControls from "./NavigationControls";
import TitleInfo from "./TitleInfo";

const MediaDetail = ({ media }: { media: TMedia | undefined }) => {
  return (
    <>
      <MediaLayout>
        <ArticleContainer>
          <ContentHeader>
            <h1>{media?.artcTitle}</h1>
            <TitleInfo date={media && media?.regDttm} view={media?.viewCnt} />
          </ContentHeader>
          <MainContent dangerouslySetInnerHTML={media && { __html: media?.artcContents }}></MainContent>
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
      </MediaLayout>
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
`;
const SnsIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5px;
`;
