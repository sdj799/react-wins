import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  $fontSize?: string;
  $color?: string;
  $bgColor?: string;
  $border?: string;
  $rounded?: string;
}

const ButtonStyle = styled.button<{
  $fontSize?: string;
  $color?: string;
  $bgColor?: string;
  $border?: string;
  $rounded?: string;
}>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$bgColor || "none"};
  border-radius: ${(props) => props.$rounded || "0"};
  border: ${(props) => props.$rounded || "none"};

  & > svg {
    font-size: ${(props) => props.$fontSize || "14px"};
    color: ${(props) => props.$color || "#000"};
  }
`;

const Button = ({ children, $fontSize, $color, $bgColor, $border, $rounded }: ButtonProps) => {
  return (
    <ButtonStyle $fontSize={$fontSize} $color={$color} $bgColor={$bgColor} $border={$border} $rounded={$rounded}>
      {children}
    </ButtonStyle>
  );
};
export default Button;
