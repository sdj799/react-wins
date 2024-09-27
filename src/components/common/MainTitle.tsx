import styled from "styled-components";

interface MainTitleProps {
  title: string;
}

const MainTitleStyle = styled.h3`
  font-size: 30px;
  font-weight: 500;
  color: #ea0a0b;

  &::after {
    display: block;
    content: "";
    width: 40px;
    height: 3px;
    margin: 25px 0;
    background-color: #ea0a0b;
  }
`;

const MainTitle = ({ title }: MainTitleProps) => {
  return <MainTitleStyle>{title}</MainTitleStyle>;
};
export default MainTitle;
