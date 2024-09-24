import video_title from "@assets/images/home_title_video.png";
import Controller from "@components/Home/Video/Controller";
import VideoList from "@components/Home/Video/VideoList";
import VideoBox from "@components/Home/Video/ViedoBox";
import { StyledSection } from "@styles/Home.style";
import styled from "styled-components";

const StyledImg = styled.img`
  position: relative;
  width: 580px;
  overflow: hidden;
  margin-bottom: -20px;
  z-index: 0;
`;
const Highlight = () => {
  return (
    <StyledSection>
      <StyledImg src={video_title} />
      <VideoBox />
      <VideoList />
      <Controller $isFull={true} title="더 많은 영상보기" path="#" />
    </StyledSection>
  );
};
export default Highlight;
