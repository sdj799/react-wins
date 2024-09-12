import GameSchedule from "@components/Home/GameSchedule";
import LinkBox from "@components/Home/LinkBox";
import styled from "styled-components";

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 145px;
`;

const Home = () => {
  return (
    <HomeStyle>
      <GameSchedule />
      <LinkBox />
    </HomeStyle>
  );
};
export default Home;
