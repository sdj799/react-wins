import { HomeProps } from "@customTypes/home";
import { IoIosArrowRoundForward } from "react-icons/io";
import styled from "styled-components";

interface ShortcutProps extends HomeProps {
  shortcut: string;
}

const ShortcutStyle = styled.div<{ $fontSize?: string; $fontWeight?: string; $color?: string }>`
  display: flex;
  align-items: center;
  gap: 3px;

  & > span {
    font-size: ${(props) => props.$fontSize};
    font-weight: ${(props) => props.$fontWeight};
    color: ${(props) => props.$color};
  }

  & > svg {
    font-size: 20px;
    color: ${(props) => props.$color};
  }
`;

const Shortcut = ({ $fontSize, $fontWeight, $color, shortcut }: ShortcutProps) => {
  return (
    <ShortcutStyle $fontSize={$fontSize} $fontWeight={$fontWeight} $color={$color}>
      <span>{shortcut}</span>
      <IoIosArrowRoundForward />
    </ShortcutStyle>
  );
};
export default Shortcut;
