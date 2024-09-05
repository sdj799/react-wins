import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/ui/header/Header";
import Footer from "@components/ui/footer/Footer";
import Banner from "@components/ui/main/Banner";
import Breadcrumb from "@components/ui/main/Breadcrumb";

const CommonLayout = () => {
  return (
    <CommonLayoutStyle>
      <Header />
      <Banner />
      <MainStyle>
        <Breadcrumb />
        <Outlet />
      </MainStyle>
      <Footer />
    </CommonLayoutStyle>
  );
};
export default CommonLayout;

const CommonLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainStyle = styled.main`
  width: 100%;
  max-width: 1100px;
  padding-top: 80px;
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
