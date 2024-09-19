import gallery_title from "@assets/images/home_title_gallery.png";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 658px;
  margin-bottom: -48px;
`;

const GalleryTitle = () => {
  return <StyledImg src={gallery_title} />;
};
export default GalleryTitle;
