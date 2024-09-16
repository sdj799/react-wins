import { TMedia } from "@customTypes/media";
import { htmlToString } from "@utils/stringParsing";
import { useNavigate } from "react-router-dom";
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
  cursor: pointer;
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
`;

const MediaTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.4rem;
`;

const ContentBox = styled.p`
  font-size: 16px;
  line-height: 1.4em;
  height: 2.8em;
  color: #666;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const MediaItem = ({ media }: { media: TMedia }) => {
  const navigate = useNavigate();
  return (
    <ArticleContainer>
      {media.imgFilePath && <Thumbnail src={media.imgFilePath}></Thumbnail>}
      <ArticleBox
        onClick={() => {
          navigate(`${media.artcSeq}`);
        }}>
        <MainContent>
          <MediaTitle>{media.artcTitle}</MediaTitle>
          <ContentBox>{htmlToString(media.artcContents)}</ContentBox>
        </MainContent>
        <TitleInfo date={media.regDttm} view={media.viewCnt} />
      </ArticleBox>
    </ArticleContainer>
  );
};
export default MediaItem;
