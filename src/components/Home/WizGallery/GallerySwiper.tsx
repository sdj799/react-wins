import leftArrow from "@assets/icons/arrow_left.png";
import rightArrow from "@assets/icons/arrow_right.png";
import { TPhoto } from "@customTypes/gallery";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 650px;
  margin-top: -48px;

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }
  .swiper-button-prev {
    background: url(${leftArrow});
  }
  .swiper-button-next {
    background: url(${rightArrow});
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    bottom: 0px;
    top: auto;
    width: 40px;
    height: 40px;
    background-size: contain;
  }

  .swiper-wrapper {
    width: fit-content;
    display: flex;
    align-items: center;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 380px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 50px;

  &.swiper-slide-active {
    width: 410px;
    height: 445px;
    transition: 0.3s;
    box-shadow: 0 30px 30px rgba(245, 50, 50, 0.3);
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Masking = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 100%, 0.6);
`;

const GallerySwiper = ({ gallery }: { gallery: TPhoto[] }) => {
  return (
    <>
      <StyledSwiper
        slidesPerView="auto"
        centeredSlides={true}
        slideToClickedSlide={true}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {gallery &&
          gallery?.map((photo) => (
            <StyledSwiperSlide key={photo.regDttm}>
              {({ isActive }) => (
                <>
                  <img src={photo.imgFilePath} alt={photo.artcTitle} />
                  {!isActive && <Masking />}
                </>
              )}
            </StyledSwiperSlide>
          ))}
      </StyledSwiper>
    </>
  );
};
export default GallerySwiper;
