import styled from "styled-components";
import Container from "./Common/Container";
import Description from "./Common/Description";
import Shortcut from "./Common/Shortcut";
import Tag from "./Common/Tag";
import Text from "./Common/Text";

const ArticleStyle = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("https://www.ktwiz.co.kr/v2/imgs/dummy/main/2024_season_bg_web.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

const ArticleOuterStyle = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
`;

const ArticleInnerStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Article = () => {
  return (
    <ArticleStyle>
      <ArticleOuterStyle>
        <Container to="/media/wiznews" target="_self" $position="absolute" $bottom="55px" $left="0">
          <ArticleInnerStyle>
            <Tag tag="위즈소식" $marginBottom="16px" />
            <Text
              $marginBottom="12px"
              $fontSize="20px"
              $fontWeight="300"
              $color="#fff"
              text="[안내] 2024 정규리그 홈경기 운영안내"
            />
            <Description
              $marginBottom="16px"
              $fontSize="13px"
              $fontWeight="300"
              $color="#fff"
              $opacity="0.6"
              $textShadow="0 3px 6px rgba(0,0,0,.16)"
              desc="안녕하세요, kt wiz 야구단입니다. 2024 정규리그 홈경기 운영 안내드리며, 원활한 정규시즌 경기 관람을 위해 공지 내 내용을 확인 부탁드립니다."
            />
            <Shortcut $fontSize="13px" $fontWeight="300" $color="#fff" shortcut="자세히보기" />
          </ArticleInnerStyle>
        </Container>
      </ArticleOuterStyle>
    </ArticleStyle>
  );
};
export default Article;
