import CheerProfile from "@components/Cheer/CheerProfile";
import { useState } from "react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const Container = styled.div`
  height: 620px;
  width: 100%;
  max-width: 990px;
  border: 1px solid #bbb;
  box-sizing: border-box;
`;

const MainSwiper = styled(Swiper)`
  height: 75%;
  width: auto;
  margin: 0; // 사이 공간 제거
`;

const ThumbnailSwiper = styled(Swiper)`
  width: 100%;
  height: 25.8%;
  box-sizing: border-box;
  padding: 0;
  margin: 0; // 사이 공간 제거
  border-top: 1px solid #e40013;
  padding: 0;
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SwiperSlideImage = styled.img<{ $isActive: boolean }>`
  display: block;
  width: 100%;
  object-fit: contain;
  margin: 0;
  padding: 0;
  border: ${({ $isActive }) => ($isActive ? "2px solid red" : "none")}; // 선택된 이미지에만 border
`;

const StyledButton = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;s
    justify-content: center;
    align-items: center;
    font-size: 16px;
    top: 80%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px;
  }
`;

const cheerData = [
  {
    position: "응원단장",
    kName: "김주일",
    eName: "KIM JOO IL",
    profile: {
      nickname: "쭈발이",
      heightBlood: "183cm/A형",
      hobby: "마트 시식코너 돌기",
      favoritePlayer: "박경수",
      motto: "안된다 못한다 하지말고 긍정적으로 !!",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/18deb47db55e42529e1464896e6faf1a.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/2771cbe4cd704376ab2d6dc120d412a2.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/a3db25295e5d46da98dd2b227fb5ccbb.png",
  },
  {
    position: "아나운서",
    kName: "박수미",
    eName: "PARK SOO MI",
    profile: {
      nickname: "목소리 미녀",
      heightBlood: "168cm/A형",
      hobby: "드라이브",
      favoritePlayer: "배정대",
      motto: "겸손한 자신감",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/ab31d2493f6b4f7fbd44e0468b192563.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/d71e9addf96d470e87e5d6e78f36fe5b.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/11acd052b28346ae8f0e7a96e31887d5.png",
  },
  {
    position: "치어리어",
    kName: "김진아",
    eName: "KIM JIN A",
    profile: {
      nickname: "찌나뇽",
      heightBlood: "170cm/A형",
      hobby: "영화보기",
      favoritePlayer: "강백호",
      motto: "해처럼 밝고 꽃처럼 아름답게",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/8c44a97eeac6408693402633b2bb3c50.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/58e8ff178e264733b0fcb850b64b7b78.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/8aebfcc677da48ec83004995dab9a5aa.png",
  },
  {
    position: "치어리더",
    kName: "김한슬",
    eName: "KIM HAN SEUL",
    profile: {
      nickname: "스리공쥬",
      heightBlood: "172cm/O형",
      hobby: "게임",
      favoritePlayer: "오윤석",
      motto: "즐겁게살자",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/6613c3b972aa436f9deb58e290746a17.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/08121f2c9dfb4f829232f267b93ef3f9.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/c3ad6d86a4ce49bd8228ba9956bc9609.png",
  },
  {
    position: "치어리더",
    kName: "김해리",
    eName: "KIM HAE RI",
    profile: {
      nickname: "리리",
      heightBlood: "173cm/O형",
      hobby: "틱톡찍기",
      favoritePlayer: "강백호",
      motto: "최선이 반복되면 최고가 된다",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/cfd22fcfc8e842fe8a6d12d3bd4020fd.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/05/17/image/ori/fcbac60e10d14461b53055b9a42692b3.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/05/17/image/ori/6aa674d5162f485cab9e586e156cc6c4.png",
  },
  {
    position: "치어리더",
    kName: "신세희",
    eName: "SHIN SE HEE",
    profile: {
      nickname: "세또",
      heightBlood: "173cm/AB형",
      hobby: "롤",
      favoritePlayer: "로하스",
      motto: "후회없이 최선을 다하자",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/273473576a8c4125861ed2e61c2a20e6.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/4f942e54052549af863dcf9c0734a5c2.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/5f9032ae977c433299b314c0fbff4b8d.png",
  },
  {
    position: "치어리더",
    kName: "윤지나",
    eName: "YOON JINA",
    profile: {
      nickname: "뉴트로지나",
      heightBlood: "171cm/AB형",
      hobby: "노래부르기",
      favoritePlayer: "천성호",
      motto: "그럼에도 불구하고 오늘을 살아가자",
    },
    imageUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/bae41de77751403b98d7e8bcee793436.png",
    offUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/87ca54aa256d4b12840f019dbcf4c411.png",
    onUrl: "https://wizzap.ktwiz.co.kr/files/000/2024/03/05/image/ori/b64947e29e7c4577bd27bb01806270c0.png",
  },
];

const Cheer = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0); // 활성화된 슬라이드 인덱스 관리

  return (
    <>
      <Container>
        <MainSwiper
          spaceBetween={10}
          navigation={true}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          modules={[FreeMode, Navigation, Thumbs]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // 슬라이드 변경 시 인덱스 업데이트
          as={StyledButton}>
          {cheerData.map((cheer, index) => (
            <SwiperSlideStyled key={index}>
              <CheerProfile
                position={cheer.position}
                kName={cheer.kName}
                eName={cheer.eName}
                profile={cheer.profile}
                imageUrl={cheer.imageUrl}
              />
            </SwiperSlideStyled>
          ))}
        </MainSwiper>
        <ThumbnailSwiper
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          slidesPerView={6}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}>
          {cheerData.map((cheer, index) => (
            <SwiperSlideStyled key={index}>
              <SwiperSlideImage
                src={index === activeIndex ? cheer.onUrl : cheer.offUrl}
                alt={`${cheer.kName} thumbnail`}
                $isActive={index === activeIndex} // 활성화된 슬라이드와 비교
              />
            </SwiperSlideStyled>
          ))}
        </ThumbnailSwiper>
      </Container>
    </>
  );
};

export default Cheer;
