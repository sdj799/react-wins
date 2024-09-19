import ArticleTitle from "@components/common/ArticleTitle";
import Table from "@components/common/Table";
import { TTemaRank } from "@customTypes/teamRank";
import dummy from "@data/game/teamRankByYear.json";
import { filterData } from "@utils/filterData";

export const teamRankingHeaders: [string, string][] = [
  ["rank", "순위"],
  ["teamName", "팀명"],
  ["game", "경기 수"],
  ["win", "승"],
  ["lose", "패"],
  ["drawn", "무"],
  ["wra", "승률"],
  ["ab", "타수"],
  ["continue1", "연속"],
  ["bra", "출루율"],
  ["lra", "장타율"],
  ["hra", "타율"],
  ["er", "자책점"],
  ["run", "득점"],
  ["r", "실점"],
  ["hr", "홈런"],
];
export const teamRankHeaders = [
  "순위",
  "팀명",
  "경기 수",
  "승",
  "패",
  "무",
  "승률",
  "타수",
  "연속",
  "출루율",
  "장타율",
  "타율",
  "자책점",
  "득점",
  "실점",
  "홈런",
];

const RecordTeam = () => {
  const data = dummy.data.list.map((data) => filterData(data, teamRankingHeaders)) as TTemaRank[];

  return (
    <article>
      <ArticleTitle title="2024 시즌 팀 기록" />
      <Table<TTemaRank> resData={data} headers={teamRankingHeaders.map((item) => item[1])} />
    </article>
  );
};
export default RecordTeam;
