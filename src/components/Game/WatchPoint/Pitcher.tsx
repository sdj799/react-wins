import styled from "styled-components";
import Table from "./Pitcher/Table";
import Title from "./Title";

const PitcherStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Pitcher = () => {
  return (
    <PitcherStyle>
      <Title title="선발투수 비교" $marginBottom="10px;" />
      <Table />
    </PitcherStyle>
  );
};
export default Pitcher;
