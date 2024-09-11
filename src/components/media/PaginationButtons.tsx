import styled from "styled-components";
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

const PaginationButtons = () => {
  return (
    <PagenationWrapper>
      <PageButton>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>
      <PageButton>4</PageButton>
      <PageButton>5</PageButton>
      <PageButton>6</PageButton>
      <PageButton>7</PageButton>
      <PageButton>8</PageButton>
      <PageButton>9</PageButton>
      <PageButton>10</PageButton>
      <PageButton>
        <MdKeyboardArrowRight>다음</MdKeyboardArrowRight>
      </PageButton>
      <PageButton>
        <MdKeyboardDoubleArrowRight>마지막</MdKeyboardDoubleArrowRight>
      </PageButton>
    </PagenationWrapper>
  );
};
export default PaginationButtons;

const PagenationWrapper = styled.div`
  margin-top: 54px;
  text-align: center;
`;

const PageButton = styled.button`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border: 1px solid #c3c3c3;
  border-radius: 2px;
  margin: 0 2px;
  padding: 0px;
  font-size: 12px;
  line-height: 26px;
  color: #999;
  vertical-align: middle;
`;
