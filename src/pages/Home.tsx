import styled from "styled-components";
import emblem from "@assets/emblem.svg";

const Home = () => {
  return (
    <HomeStyle>
      <div>
        <img src={emblem} alt="emblem" />
      </div>
    </HomeStyle>
  );
};
export default Home;

const HomeStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1528291954423-c0c71c12baeb?q=80&w=3426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      width: 400px;
    }
  }
`;
