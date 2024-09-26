import styled from "styled-components";

interface SubTitleProps {
  title: string;
}

const SubTitleStyle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  color: #222;
  margin-bottom: 15px;
`;

const SubTitle = ({ title }: SubTitleProps) => {
  return <SubTitleStyle>{title}</SubTitleStyle>;
};
export default SubTitle;
