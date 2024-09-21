import { TMedia } from "@customTypes/media";
import { ArticleBox, MediaItemContainer, ThumbnailCss } from "@styles/Media.style";
import { htmlToString } from "@utils/stringParsing";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TitleInfo from "./TitleInfo";

const Thumbnail = styled.img`
  ${ThumbnailCss}
  object-fit: cover;
`;

const MediaItemBox = styled(ArticleBox)`
  cursor: pointer;
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
    <MediaItemContainer>
      {media.imgFilePath && <Thumbnail src={media.imgFilePath}></Thumbnail>}
      <MediaItemBox
        onClick={() => {
          navigate(`${media.artcSeq}`);
        }}>
        <div>
          <MediaTitle>{media.artcTitle}</MediaTitle>
          <ContentBox>{htmlToString(media.artcContents)}</ContentBox>
        </div>
        <TitleInfo date={media.regDttm} view={media.viewCnt} />
      </MediaItemBox>
    </MediaItemContainer>
  );
};
export default MediaItem;
