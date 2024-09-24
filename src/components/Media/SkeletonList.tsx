import { ArticleBox, MediaItemContainer, ThumbnailCss } from "@styles/Media.style";
import { skeletonAnimation } from "@styles/Skeleton.style";
import styled from "styled-components";

const SkeletonThumbnail = styled.div`
  ${ThumbnailCss}
  ${skeletonAnimation}
`;

const SkeletonTitle = styled.div`
  width: 60%;
  height: 20px;
  margin-bottom: 8px;
  ${skeletonAnimation}
`;

const SkeletonContentBox = styled.div`
  width: 100%;
  height: 2.8em;
  ${skeletonAnimation}
`;

const SkeletonList = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <MediaItemContainer key={index}>
          <SkeletonThumbnail />
          <ArticleBox>
            <div>
              <SkeletonTitle />
              <SkeletonContentBox />
            </div>
          </ArticleBox>
        </MediaItemContainer>
      ))}
    </>
  );
};

export default SkeletonList;
