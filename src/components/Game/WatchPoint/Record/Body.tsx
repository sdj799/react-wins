import { ScheduleElType } from "@customTypes/watchPoint";
import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Logo from "./Logo";
import Table from "./Table";

interface BodyProps {
  filteredData: ScheduleElType | null;
}

const BodyStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
`;

const Body = ({ filteredData }: BodyProps) => {
  const gameScore = useWatchPointStore((state) => state.gameScore);

  return (
    <BodyStyle>
      <Logo src={gameScore?.visitLogo} team={`${filteredData?.visit} (원정)`} />
      <Table />
      <Logo src={gameScore?.homeLogo} team={`${filteredData?.home} (홈)`} />
    </BodyStyle>
  );
};
export default Body;
