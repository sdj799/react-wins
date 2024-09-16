import styled from "styled-components";

export const StyledHeader = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  &::before {
    content: "";
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: #d23933;
    vertical-align: middle;
    margin-right: 13px;
    margin-bottom: 2px;
  }
`;

const ArticleTitle = ({ title }: { title: string }) => {
  return <StyledHeader>{title}</StyledHeader>;
};
export default ArticleTitle;
