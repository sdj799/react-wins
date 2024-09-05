import styled from "styled-components";
import navList from "../../../data/nav.json";
import { useLocation } from "react-router-dom";
import TabList from "./tab/TabList";

const Banner = () => {
  const path = useLocation().pathname;

  return (
    <BannerStyle>
      {navList.map((nav) => (
        <>
          {path === nav.path && (
            <div key={nav.id}>
              <h3>{nav.title}</h3>
              <p>{nav.desc}</p>
              <TabList />
            </div>
          )}
        </>
      ))}
    </BannerStyle>
  );
};
export default Banner;

const BannerStyle = styled.section`
  position: relative;
  width: 100%;
  height: 280px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1519435887317-eabcf2ab8075?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > h3 {
      text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
      font-size: 48px;
      color: #fff;
    }

    & > p {
      font-size: 14px;
      color: #fff;
      font-weight: 300;
    }
  }
`;
