import { ReactNode } from "react";
import styled from "styled-components";

interface ControllBtnProps {
  type: "button" | "submit";
  icon: ReactNode;
  onClickHandler: () => void;
}

const ControllBtnStyle = styled.button`
  & > svg {
    font-size: 22px;
  }
`;

const ControllBtn = ({ type, icon, onClickHandler }: ControllBtnProps) => {
  return (
    <ControllBtnStyle type={type} onClick={onClickHandler}>
      {icon}
    </ControllBtnStyle>
  );
};
export default ControllBtn;
