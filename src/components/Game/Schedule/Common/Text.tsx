import styled from "styled-components";

interface TextProps {
  text: string;
  $color?: string;
  $fontSize?: string;
}

const TextStyle = styled.span<{ $color?: string; $fontSize?: string }>`
  color: ${(props) => props.$color || "#000"};
  font-size: ${(props) => props.$fontSize || "14px"};
  font-weight: 300;
`;

const Text = ({ text, $color, $fontSize }: TextProps) => {
  return (
    <TextStyle $color={$color} $fontSize={$fontSize}>
      {text}
    </TextStyle>
  );
};
export default Text;
