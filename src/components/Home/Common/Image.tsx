import { HomeProps } from "@customTypes/home";
import styled from "styled-components";

interface ImageProps extends HomeProps {
  src: string;
  alt: string;
  $maxWidth: string;
}

const ImageStyle = styled.img<{
  $maxWidth: string;
  $marginBottom?: string;
  $position?: string;
  $top?: string;
  $right?: string;
  $transform?: string;
}>`
  width: 100%;
  max-width: ${(props) => props.$maxWidth};
  position: ${(props) => props.$position || "static"};
  top: ${(props) => props.$top || "auto"};
  right: ${(props) => props.$right || "auto"};
  transform: ${(props) => props.$transform || "none"};
  margin-bottom: ${(props) => props.$marginBottom || "0"};
`;

const Image = ({ src, alt, $maxWidth, $marginBottom, $position, $top, $right, $transform }: ImageProps) => {
  return (
    <ImageStyle
      src={src}
      alt={alt}
      $maxWidth={$maxWidth}
      $marginBottom={$marginBottom}
      $position={$position}
      $top={$top}
      $right={$right}
      $transform={$transform}
    />
  );
};
export default Image;
