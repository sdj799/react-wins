import Article from "@components/Home/Article";
import ScrollToTop from "@components/ScrollToTop";
import TopButton from "@components/common/TopButton";
import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const BasicLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainStyle = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 0 50px;
  margin: 145px 0;
`;

const BasicLayout = () => {
  return (
    <BasicLayoutStyle>
      <ScrollToTop />
      <Header />
      <Article />
      <MainStyle>
        <Outlet />
        <TopButton />
      </MainStyle>
      <Footer />
    </BasicLayoutStyle>
  );
};
export default BasicLayout;
