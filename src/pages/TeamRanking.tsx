import RankingChart from "@components/TeamRanking/RankingChart";
import RecordBatter from "@components/TeamRanking/RecordBatter";
import RecordPicher from "@components/TeamRanking/RecordPicher";
import RecordTeam from "@components/TeamRanking/RecordTeam";
import WinLose from "@components/TeamRanking/WinLose";
import RankingTab from "@components/common/RankingTab";

const TeamRanking = () => {
  return (
    <>
      <RankingTab />
      <RankingChart />
      <RecordTeam />
      <RecordPicher />
      <RecordBatter />
      <WinLose />
    </>
  );
};
export default TeamRanking;
