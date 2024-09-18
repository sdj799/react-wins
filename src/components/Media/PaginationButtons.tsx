import { useEffect, useState } from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PagenationWrapper = styled.nav`
  width: 100%;
  margin-top: 54px;
  text-align: center;
`;

const PageButton = styled.button<{ $isSelected?: boolean }>`
  width: 26px;
  height: 26px;
  background-color: ${({ $isSelected }) => ($isSelected ? "#e60013" : "#fff")};
  color: ${({ $isSelected }) => ($isSelected ? "#fff" : "#999")};
  border: 1px solid #c3c3c3;
  border-radius: 2px;
  margin: 0 2px;
  padding: 0px;
  font-size: 12px;
  line-height: 26px;
  vertical-align: middle;
`;

const PaginationButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageGroup, setPageGroup] = useState(0);
  const [selectedNum, setSelectedNum] = useState(1);
  const PAGE_COUNT = 10;
  const MAX_PAGE = 116;
  const maxGroup = Math.floor(MAX_PAGE / PAGE_COUNT);

  useEffect(() => {
    const currentPage = searchParams.get("search.page");
    setPageGroup(Math.floor(Number(currentPage) / PAGE_COUNT));
    setSelectedNum(Number(currentPage));
  }, []);
  useEffect(() => {
    setSearchParams({ "search.page": `${selectedNum}` });
  }, [selectedNum]);

  const handlePageChange = (pageNum: number) => {
    setSelectedNum(pageNum);
  };
  const handlePageGroupPrev = () => {
    if (pageGroup === 0) return;
    setPageGroup((prev) => prev - 1);
    setSelectedNum((prev) => prev - PAGE_COUNT);
  };
  const handlePageGroupNext = () => {
    if (pageGroup === maxGroup) return;
    setPageGroup((prev) => prev + 1);
    setSelectedNum((prev) => prev + PAGE_COUNT);
  };
  const handlePageFirst = () => {
    setPageGroup(0);
    setSelectedNum(1);
  };
  const handlePageLast = () => {
    setPageGroup(maxGroup);
    setSelectedNum(MAX_PAGE);
  };

  return (
    <PagenationWrapper>
      {selectedNum !== 1 && (
        <PageButton onClick={handlePageFirst}>
          <MdKeyboardDoubleArrowLeft>처음</MdKeyboardDoubleArrowLeft>
        </PageButton>
      )}
      {pageGroup !== 0 && (
        <PageButton onClick={handlePageGroupPrev}>
          <MdKeyboardArrowLeft>이전</MdKeyboardArrowLeft>
        </PageButton>
      )}
      {Array.from({ length: 10 }, (_, index) => {
        const pageNumber = pageGroup * PAGE_COUNT + index + 1;
        if (pageNumber <= MAX_PAGE) {
          return (
            <PageButton
              key={index}
              $isSelected={pageNumber === selectedNum}
              onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </PageButton>
          );
        }
      })}
      {pageGroup !== maxGroup && (
        <PageButton onClick={handlePageGroupNext}>
          <MdKeyboardArrowRight>다음</MdKeyboardArrowRight>
        </PageButton>
      )}
      {selectedNum !== MAX_PAGE && (
        <PageButton onClick={handlePageLast}>
          <MdKeyboardDoubleArrowRight>마지막</MdKeyboardDoubleArrowRight>
        </PageButton>
      )}
    </PagenationWrapper>
  );
};
export default PaginationButtons;
