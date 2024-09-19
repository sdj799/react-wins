import ArticleTitle from "@components/common/ArticleTitle";
import Table from "@components/common/Table";
import { TBattingRank } from "@customTypes/teamRank";
import dummy from "@data/game/rankBatting.json";
import { filterData } from "@utils/filterData";

export const teamRankingHeaders: [string, string][] = [
  ["teamName", "팀명"],
  ["hit", "안타"],
  ["h2", "2루타"],
  ["h3", "3루타"],
  ["hr", "홈런"],
  ["rbi", "타점"],
  ["sb", "도루"],
  ["bb", "볼넷"],
  ["ib", "고의4구"],
  ["hp", "사구"],
  ["kk", "삼진"],
  ["gd", "병살"],
  ["slg", "장타율"],
  ["bra", "출루율"],
  ["err", "실책"],
  ["ops", "OPS"],
  ["hra", "타율"],
];
const RecordBatter = () => {
  const data = dummy.data.list.map((data) => filterData(data, teamRankingHeaders)) as TBattingRank[];
  return (
    <article>
      <ArticleTitle title="2024 시즌 팀 타자 기록" />
      <Table<TBattingRank> resData={data} headers={teamRankingHeaders.map((item) => item[1])} />
    </article>
  );
};
export default RecordBatter;
