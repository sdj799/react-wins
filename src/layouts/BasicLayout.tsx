import { Outlet } from "react-router-dom";
import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import styled from "styled-components";

const BasicLayout = () => {
  return (
    <BasicLayoutStyle>
      <Header />
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Footer />
    </BasicLayoutStyle>
  );
};
export default BasicLayout;

const BasicLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainStyle = styled.main`
  width: 100%;
`;
