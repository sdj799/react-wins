import ArticleTitle from "@components/common/ArticleTitle";
import { StyledArticle } from "@styles/Ranking.style";
import styled from "styled-components";
interface TeamData {
  rank: number;
  team: string;
  games: number;
  totalAttendance: number;
  avgAttendance: number;
}

// 임의 데이터
const teamData: TeamData[] = [
  { rank: 1, team: "LG", games: 68, totalAttendance: 1281420, avgAttendance: 18844 },
  { rank: 2, team: "삼성", games: 70, totalAttendance: 1275022, avgAttendance: 18215 },
  { rank: 3, team: "두산", games: 69, totalAttendance: 1257215, avgAttendance: 18221 },
  { rank: 4, team: "KIA", games: 69, totalAttendance: 1177249, avgAttendance: 17062 },
  { rank: 5, team: "롯데", games: 68, totalAttendance: 1168597, avgAttendance: 17185 },
  { rank: 6, team: "SSG", games: 69, totalAttendance: 1100862, avgAttendance: 15955 },
  { rank: 7, team: "키움", games: 72, totalAttendance: 792350, avgAttendance: 11005 },
  { rank: 8, team: "KT", games: 66, totalAttendance: 768260, avgAttendance: 11640 },
  { rank: 9, team: "한화", games: 66, totalAttendance: 745797, avgAttendance: 11300 },
  { rank: 10, team: "NC", games: 69, totalAttendance: 700742, avgAttendance: 10156 },
];
const TableWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed; /* 열의 너비를 균등하게 설정 */
`;

const TableHeader = styled.thead`
  background-color: #f5f5f5;
  th {
    padding: 10px;
    text-align: center; /* 내용 중앙 정렬 */
    border: 1px solid #cfcfcf;
    border-top: 2px solid red;
    font-size: 15px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
  }
`;

const TableBody = styled.tbody`
  td {
    padding: 10px;
    text-align: center; /* 수평 중앙 정렬 */
    vertical-align: middle; /* 수직 중앙 정렬 */
    border: 1px solid #cfcfcf;
    font-size: 12px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
  }
  tr {
    border: 1px solid #cfcfcf; /* 각 행 사이에 줄 추가 */
    font-size: 12px; /* 글씨 크기 설정 */
    color: #5b5a5a; /* 글씨 색상 설정 */
  }
`;

const HighlightRow = styled.tr`
  background-color: #fff5f7;
  td {
    color: #ec0a0b;
  }
`;
const AudienceRecord = () => {
  return (
    <>
      <StyledArticle>
        <ArticleTitle title="2024 시즌 관중기록" />
        <TableWrapper>
          <Table>
            <TableHeader>
              <tr>
                <th>순위</th>
                <th>팀명</th>
                <th>경기 수</th>
                <th>누적관중</th>
                <th>평균관중</th>
              </tr>
            </TableHeader>
            <TableBody>
              {teamData.map((team) =>
                team.team === "KT" ? (
                  <HighlightRow key={team.rank}>
                    <td>{team.rank}</td>
                    <td>{team.team}</td>
                    <td>{team.games}</td>
                    <td>{team.totalAttendance.toLocaleString()}</td>
                    <td>{team.avgAttendance.toLocaleString()}</td>
                  </HighlightRow>
                ) : (
                  <tr key={team.rank}>
                    <td>{team.rank}</td>
                    <td>{team.team}</td>
                    <td>{team.games}</td>
                    <td>{team.totalAttendance.toLocaleString()}</td>
                    <td>{team.avgAttendance.toLocaleString()}</td>
                  </tr>
                )
              )}
            </TableBody>
          </Table>
        </TableWrapper>
      </StyledArticle>
    </>
  );
};
export default AudienceRecord;
