import { TMedia } from "@customTypes/media";
import styled from "styled-components";
import TitleInfo from "./TitleInfo";

const ArticleContainer = styled.article`
  height: 130px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 13px 0px;
  border-bottom: 1px solid #c3c3c3;
`;

const Thumbnail = styled.img`
  width: 250px;
  height: 100%;
  max-height: 130px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: cover;
`;

const ArticleBox = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 23px 15px;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MediaTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4rem;

  margin: 0;
`;

const ContentBox = styled.div`
  width: 100%;
  height: calc(100% - 23px);
  margin-top: 10px;
  overflow: hidden;
`;

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
