import { TMedia } from "@customTypes/media";
import { MediaContainer } from "@styles/Media.style";
import styled from "styled-components";
import NavigationControls from "./NavigationControls";
import SnsButtons from "./SNSButtons";
import TitleInfo from "./TitleInfo";

const ContentHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f5f5f5;
  & > h4 {
    font-size: 22px;
    line-height: 28px;
    margin: 0;
  }
`;

const MainContent = styled.section`
  padding: 20px 10px;
`;

const MediaDetail = ({ media }: { media: TMedia | undefined }) => {
  return (
    <>
      <MediaContainer>
        <ContentHeader>
          <h4>{media?.artcTitle}</h4>
          <TitleInfo date={media && media?.regDttm} view={media?.viewCnt} />
        </ContentHeader>
        <MainContent dangerouslySetInnerHTML={media && { __html: media?.artcContents }}></MainContent>
        <SnsButtons />
      </MediaContainer>
      <NavigationControls />
    </>
  );
};
export default MediaDetail;
