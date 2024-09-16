import RankingChart from "@components/TeamRanking/RankingChart";
import RecordCatcher from "@components/TeamRanking/RecordCatcher";
import RecordPicher from "@components/TeamRanking/RecordPicher";
import RecordTeam from "@components/TeamRanking/RecordTeam";
import WinLose from "@components/TeamRanking/WinLose";
import styled from "styled-components";

const RankingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
  margin-top: 45px;
`;

const TeamRanking = () => {
  return (
    <>
      <RankingChart />
      <RecordTeam />
      <RecordPicher />
      <RecordCatcher />
      <WinLose />
    </>
  );
};
export default TeamRanking;
