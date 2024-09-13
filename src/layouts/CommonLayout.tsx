import Search from "@components/common/Search";
import Footer from "@components/ui/footer/Footer";
import Header from "@components/ui/header/Header";
import Banner from "@components/ui/main/Banner";
import Breadcrumb from "@components/ui/main/Breadcrumb";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

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
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainUtilsStyle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 2px solid #ec0a0b;
`;

const MainInnerStyle = styled.section<{ $hasPadding: boolean }>`
  padding-top: ${({ $hasPadding }) => ($hasPadding ? "40px" : "0px")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommonLayout = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter((element) => element);

  return (
    <CommonLayoutStyle>
      <Header />
      <Banner />
      <MainStyle>
        <MainUtilsStyle>
          {(currentPath[1] === "coach" ||
            currentPath[1] === "pitcher" ||
            currentPath[1] === "catcher" ||
            currentPath[1] === "infielder" ||
            currentPath[1] === "outfielder" ||
            currentPath[0] === "media") && <Search />}
          <Breadcrumb />
        </MainUtilsStyle>
        <MainInnerStyle $hasPadding={!(currentPath[0] === "game" || currentPath[0] === "media")}>
          <Outlet />
        </MainInnerStyle>
      </MainStyle>
      <Footer />
    </CommonLayoutStyle>
  );
};
export default CommonLayout;
