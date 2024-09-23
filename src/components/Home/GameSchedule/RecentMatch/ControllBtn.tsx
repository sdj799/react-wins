import { ReactNode } from "react";
import styled from "styled-components";

interface ControllBtnProps {
  type: "button" | "submit";
  icon: ReactNode;
  onClickHandler: () => void;
  $disabled: boolean;
}

const ControllBtnStyle = styled.button<{ $disabled: boolean }>`
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  & > svg {
    font-size: 22px;
    color: ${(props) => props.$disabled && "rgba(0,0,0,0.4)"};
  }
`;

const ControllBtn = ({ type, icon, onClickHandler, $disabled }: ControllBtnProps) => {
  return (
    <ControllBtnStyle type={type} onClick={onClickHandler} $disabled={$disabled}>
      {icon}
    </ControllBtnStyle>
  );
};
export default ControllBtn;
