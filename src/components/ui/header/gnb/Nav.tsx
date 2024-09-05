import styled from "styled-components";
import { NavEventType } from "@customTypes/layout";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";

const Nav = ({ $isShowNav }: NavEventType) => {
  return (
    <MainNavStyle $isShowNav={$isShowNav}>
      <TopMenu $isShowNav={$isShowNav} />
      {/* <BottomMenu isShowNav={isShowNav} /> */}
      {$isShowNav && <BottomMenu $isShowNav={$isShowNav} />}
    </MainNavStyle>
  );
};
export default Nav;

const MainNavStyle = styled.nav<{ $isShowNav: boolean }>`
  display: ${(props) => props.$isShowNav && "grid"};
  grid-template-columns: ${(props) => props.$isShowNav && "repeat(8, 1fr)"};
`;
