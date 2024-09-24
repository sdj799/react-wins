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
    width: 7%;
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

  const pitcherStats = (pitcher: any) => [
    pitcher?.playerName,
    pitcher?.era,
    pitcher?.gamenum,
    pitcher?.w,
    pitcher?.l,
    pitcher?.sv,
    pitcher?.hold,
    pitcher?.wra,
    pitcher?.innDisplay,
    pitcher?.hit,
    pitcher?.hr,
    pitcher?.bb,
    pitcher?.hp,
    pitcher?.kk,
    pitcher?.r,
    pitcher?.er,
  ];

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
            {pitcherStats(visitPitcher).map((stat, index) => (
              <td key={index}>{stat}</td>
            ))}
          </StyledRow>
          <StyledRow className={!visit ? "visit" : ""}>
            <td>{gameScore?.home}</td>
            {pitcherStats(homePitcher).map((stat, index) => (
              <td key={index}>{stat}</td>
            ))}
          </StyledRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;
