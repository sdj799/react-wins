import styled from "styled-components";

interface TextProps {
  home?: string;
  visit?: string;
  homePlayer?: string;
  visitPlayer?: string;
  result?: string;
  $color?: string;
  $fontSize?: string;
}

const TextStyle = styled.span<{ $color?: string; $fontSize?: string }>`
  color: ${(props) => props.$color || "#000"};
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: 300;
`;

const Text = ({ home, visit, homePlayer, visitPlayer, result, $color, $fontSize }: TextProps) => {
  return (
    <TextStyle $color={$color} $fontSize={$fontSize}>
      {home || visit || homePlayer || visitPlayer || result}
    </TextStyle>
  );
};
export default Text;
