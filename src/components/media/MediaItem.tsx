import styled from "styled-components";
import { TMedia } from "@types/media";
import TitleInfo from "./TitleInfo";

//media카테고리 공통 컴포넌트(소식,보도자료)
const MediaItem = ({ media }: { media: TMedia }) => {
  return (
    <ArticleContainer>
      {media.imgFilePath && <Thumbnail src={media.imgFilePath}></Thumbnail>}
      <ArticleBox>
        <MainContent>
          <MediaTitle>{media.artcTitle}</MediaTitle>
          <ContentBox dangerouslySetInnerHTML={{ __html: media.artcContents }}></ContentBox>
        </MainContent>
        <TitleInfo date={media.regDttm} view={media.viewCnt} />
      </ArticleBox>
    </ArticleContainer>
  );
};
export default MediaItem;

const ArticleContainer = styled.article`
  height: 180px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 13px 0px;
`;
const Thumbnail = styled.img`
  width: 250px;
  height: 100%;
  margin: 13px 0;
  max-height: 130px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;
const ArticleBox = styled.div`
  height: calc(100% - 46px);
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  padding: 23px 15px;
`;
const MainContent = styled.div`
  width: calc(100% - 140px);
`;
const MediaTitle = styled.h1`
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
