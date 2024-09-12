import WizParkGuide from "@components/WizPark/WPGuide";
import styled from "styled-components";
import Iksan from "./Iksan";

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
      <Iksan />
      <WizParkGuide />
    </HomeStyle>
  );
};
export default Home;
