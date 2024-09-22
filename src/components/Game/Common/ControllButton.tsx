import { ReactNode } from "react";
import styled from "styled-components";

interface ControllBtnProps {
  type: "button" | "submit";
  icon: ReactNode;
  onClickHandler: () => void;
  $disabled: boolean;
}

const ControllBtnStyle = styled.button<{ $disabled: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.$disabled ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.7)")};
  border-radius: 50%;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  & > svg {
    color: #fff;
    font-size: 20px;
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
