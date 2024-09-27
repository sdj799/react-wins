import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
  to: string;
}

const ButtonStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 90px;
  min-height: 28px;
  padding: 5px 15px;
  margin-top: 8px;
  border-radius: 20px;
  background-color: #909090;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
`;

const Button = ({ to }: ButtonProps) => {
  return <ButtonStyle to={to}>경기 정보</ButtonStyle>;
};
export default Button;
