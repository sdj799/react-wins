import styled from "styled-components";

const VideoStyle = styled.div`
  width: 100%;
  height: 616px;
  background-color: #171717;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 20px;
  z-index: 1;
  position: relative;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  object-fit: cover;
  overflow: hidden;
`;

const VideoBox = () => {
  return (
    <VideoStyle>
      <StyledIframe
        src="https://tv.naver.com/embed/60891912?outKey=V127747384239a5ea4d599fbac37c07f8cbb816236bac3da0ef5d9fbac37c07f8cbb8&autoPlay=false"
        loading="lazy"
        allowFullScreen
      />
    </VideoStyle>
  );
};
export default VideoBox;
