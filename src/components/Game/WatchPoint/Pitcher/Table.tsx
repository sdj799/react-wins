import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid #dcdcdc;
  border-spacing: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  background-color: #fff;
  color: #222;
`;

const StyledRow = styled.tr`
  border-bottom: 1px solid #cfcfcf;

  & > th {
    border-top: 2px solid #000;
    padding: 8px 0;
    background-color: #f6f6f6;
    color: #222;
    border-right: 1px solid #cfcfcf;
    font-weight: 300;
  }

  & > th.wide {
    width: 14%;
  }

  & > td {
    padding: 8px 0;
    border-right: 1px solid #cfcfcf;
    font-size: 12px;
    color: #5b5a5a;
  }

  &.home > td,
  &.visit > td {
    color: #ec0a0b;
    background-color: #fff5f7;
  }
`;

const Table = () => {
  const gameScore = useWatchPointStore((state) => state.gameScore);
  const visitPitcher = useWatchPointStore((state) => state.visitPitcher);
  const homePitcher = useWatchPointStore((state) => state.homePitcher);
  const home = gameScore?.home === "KT";
  const visit = gameScore?.visit === "KT";

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <th>팀</th>
            <th>이름</th>
            <th className="wide">평균자책점</th>
            <th>경기</th>
            <th>승</th>
            <th>패</th>
            <th>세</th>
            <th>홀</th>
            <th>승률</th>
            <th>이닝</th>
            <th>피안타</th>
            <th>피홈런</th>
            <th>볼넷</th>
            <th>사구</th>
            <th>삼진</th>
            <th>실점</th>
            <th>자책점</th>
          </StyledRow>
        </thead>
        <tbody>
          <StyledRow className={!home ? "home" : ""}>
            <td>{gameScore?.visit}</td>
            <td>{visitPitcher?.playerName}</td>
            <td>{visitPitcher?.era}</td>
            <td>{visitPitcher?.gamenum}</td>
            <td>{visitPitcher?.w}</td>
            <td>{visitPitcher?.l}</td>
            <td>{visitPitcher?.sv}</td>
            <td>{visitPitcher?.hold}</td>
            <td>{visitPitcher?.wra}</td>
            <td>{visitPitcher?.innDisplay}</td>
            <td>{visitPitcher?.hit}</td>
            <td>{visitPitcher?.hr}</td>
            <td>{visitPitcher?.bb}</td>
            <td>{visitPitcher?.hp}</td>
            <td>{visitPitcher?.kk}</td>
            <td>{visitPitcher?.r}</td>
            <td>{visitPitcher?.er}</td>
          </StyledRow>
          <StyledRow className={!visit ? "visit" : ""}>
            <td>{gameScore?.home}</td>
            <td>{homePitcher?.playerName}</td>
            <td>{homePitcher?.era}</td>
            <td>{homePitcher?.gamenum}</td>
            <td>{homePitcher?.w}</td>
            <td>{homePitcher?.l}</td>
            <td>{homePitcher?.sv}</td>
            <td>{homePitcher?.hold}</td>
            <td>{homePitcher?.wra}</td>
            <td>{homePitcher?.innDisplay}</td>
            <td>{homePitcher?.hit}</td>
            <td>{homePitcher?.hr}</td>
            <td>{homePitcher?.bb}</td>
            <td>{homePitcher?.hp}</td>
            <td>{homePitcher?.kk}</td>
            <td>{homePitcher?.r}</td>
            <td>{homePitcher?.er}</td>
          </StyledRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;
