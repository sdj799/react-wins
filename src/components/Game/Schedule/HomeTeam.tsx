import styled from "styled-components";
import Logo from "./Common/Logo";
import Text from "./Common/Text";

const HomeTeamStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const HomeTeam = () => {
  return (
    <HomeTeamStyle>
      <Logo src="" />
      <div>
        <Text text="KT 위즈" />
        <Text text="L : 고영표" $color="#666" />
      </div>
    </HomeTeamStyle>
  );
};
export default HomeTeam;
