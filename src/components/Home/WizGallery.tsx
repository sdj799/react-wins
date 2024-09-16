import Controller from "@components/common/Controller";
import { TPhoto } from "@customTypes/gallery";
import dummy from "@data/gallery.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import GallerySwiper from "./WizGallery/GallerySwiper";
import GalleryTitle from "./WizGallery/GalleryTitle";

const StyledSection = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;

const WizGallery = () => {
  const [gallery, setGallery] = useState<TPhoto[]>([]);

  useEffect(() => {
    setGallery(dummy.gallery.list);
  }, []);

  return (
    <StyledSection>
      <GalleryTitle />
      <GallerySwiper gallery={gallery} />
      <Controller $isFull={false} title="더 많은 사진보기" />
    </StyledSection>
  );
};
export default WizGallery;
