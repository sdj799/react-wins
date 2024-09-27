import { TVideo } from "@customTypes/highlight";
import { homeDate } from "@utils/date";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: relative;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: 40px;
  & > ul {
    display: flex;
    flex-direction: row;
  }
`;
const ThumbBox = styled.li`
  height: 100%;
  flex: 1 1 auto;
  padding: 10px;
`;

const ImgBox = styled.div`
  display: block;
  position: relative;
  width: 260px;
  height: 146px;
  overflow: hidden;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-bottom: 17px;
  & > img {
    width: 100%;
    margin-bottom: 17px;
  }
`;
const InfoTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 13px;

  & > div {
    background-image: linear-gradient(110deg, #f53232 6%, #cc65de 46%, #2ab2c6 84%);
    padding: 4px 8px;
    font-size: 11px;
    color: #fff;
    font-weight: 700;
    border-radius: 12px;
  }
  & > span {
    font-size: 11px;
    color: #272222;
    opacity: 0.5;
    padding-top: 4px;
    text-align: left;
  }
`;
const VideoList = ({ videoList }: { videoList: TVideo[] }) => {
  return (
    <Container>
      <ul>
        {videoList &&
          videoList?.map((item) => (
            <ThumbBox key={item.artcSeq}>
              <Link to={`/media/highlight/${item.refSeq}`}>
                <ImgBox>
                  <img src={item.imgFilePath} />
                </ImgBox>
                <InfoTop>
                  <div>하이라이트</div>
                  <span>{homeDate(item.contentsDate)}</span>
                </InfoTop>
                <p>{item.artcTitle}</p>
              </Link>
            </ThumbBox>
          ))}
      </ul>
    </Container>
  );
};
export default VideoList;
