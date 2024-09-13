import { HomeProps } from "@customTypes/home";
import styled from "styled-components";

interface DescProps extends HomeProps {
  desc: string;
}

const DescStyle = styled.p<{
  $marginBottom?: string;
  $fontSize?: string;
  $color?: string;
  $fontWeight?: string;
  $opacity?: string;
  $textShadow?: string;
}>`
  width: 350px;
  display: -webkit-box;
  margin-bottom: ${(props) => props.$marginBottom};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$color};
  opacity: ${(props) => props.$opacity};
  text-shadow: ${(props) => props.$textShadow};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.5;
`;

const Description = ({ desc, $marginBottom, $fontSize, $fontWeight, $color, $opacity, $textShadow }: DescProps) => {
  return (
    <DescStyle
      $marginBottom={$marginBottom}
      $fontSize={$fontSize}
      $color={$color}
      $fontWeight={$fontWeight}
      $opacity={$opacity}
      $textShadow={$textShadow}>
      {desc}
    </DescStyle>
  );
};
export default Description;
