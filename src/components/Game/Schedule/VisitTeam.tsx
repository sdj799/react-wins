import styled from "styled-components";
import Logo from "./Common/Logo";
import Text from "./Common/Text";

const VisitTeamStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const VisitTeam = () => {
  return (
    <VisitTeamStyle>
      <Logo src="" />
      <div>
        <Text text="SSG 랜더스" />
        <Text text="W : 엘리아스" $color="#666" />
      </div>
    </VisitTeamStyle>
  );
};
export default VisitTeam;
