import ArticleTitle from "@components/common/ArticleTitle";
import styled from "styled-components";

export const teamRankingHeaders = ["KT", "삼성", "두산", "LG", "키움", "롯데", "SSG", "NC", "KIA", "한화"];

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid #cfcfcf;
  border-top: 2px solid #ec0a0b;
`;
const StyledTr = styled.tr`
  & > th,
  td {
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    border-right: 1px solid #cfcfcf;
  }
  & > th {
    padding: 8px 0;
    background-color: #f6f6f6;
    font-size: 14px;
    color: #222;
  }
  & > td {
    font-size: 12px;
    border-top: 1px solid #cfcfcf;
    color: #5b5a5a;
    background-color: #fff;
    padding: 8px 0;
  }

  &:nth-child(1) > td {
    color: #ec0a0b;
    background-color: #fff5f7;
  }
`;
const WinLose = () => {
  return (
    <article>
      <ArticleTitle title="2024 시즌 팀 간 승패표" />
      <StyledTable>
        <thead>
          <StyledTr>
            <th>
              팀명
              <br />
              (승-패-무)
            </th>
            {teamRankingHeaders.map((name, colIndex) => (
              <th key={colIndex}>{name}</th>
            ))}
          </StyledTr>
        </thead>
        <tbody>
          {teamRankingHeaders.map((row, rowIndex) => (
            <StyledTr key={rowIndex}>
              <td>{row}</td>
              {teamRankingHeaders.map((col, colIndex) => (
                <td key={colIndex}>{row === col ? "■" : " "}</td>
              ))}
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </article>
  );
};
export default WinLose;
