import styled, { css } from "styled-components";

export const MediaContainer = styled.article`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #ec0a0b;
`;

export const MediaItemContainer = styled.article<{ $isLast?: boolean }>`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding: 13px 0px;
  border-bottom: ${({ $isLast }) => ($isLast ? "2px solid #ec0a0b" : "1px solid #c3c3c3")};
`;

export const ThumbnailCss = css`
  width: 250px;
  height: 100%;
  max-height: 130px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const ArticleBox = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 23px 15px;

  & > div {
    width: 100%;
    height: 100%;
  }
`;
