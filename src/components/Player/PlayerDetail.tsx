import Title from "@components/Location/LocationTitle";
import { useState } from "react";
import styled from "styled-components";
import HitterRecent from "./HitterRecent";
import HitterTable from "./HitterTable";
import HitterTable2 from "./HitterTable2";
import HitterTotal from "./HitterTotal";
import PitcherRecent from "./PitcherRecent";
import PitcherTable from "./PitcherTable";
import PitcherTable2 from "./PitcherTable2";
import PitcherTotal from "./PitcherTotal";

const DetailMenuWrapper = styled.div`
  height: 60px;
  background-color: "#fdfdfd";
  position: relative;
`;

const MenuLi = styled.li`
  float: left;
  width: 165px;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  ${({ className }) => (className === "active" ? "border-bottom: 3px solid #ec0a0b; color: #ec0a0b;" : "color: #999;")}
`;

const MenuA = styled.a`
  display: block;
  font-size: 16px;
  line-height: 60px;
`;

const PlayerDetail = ({ isPitcher }: { isPitcher: boolean }) => {
  const [menu, setMenu] = useState("league");
  const [title, setTitle] = useState("2024 시즌 정규리그 기록");
  return (
    <>
      <DetailMenuWrapper>
        <ul>
          <MenuLi className={menu === "league" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("league");
                setTitle("2024 시즌 정규리그 기록");
              }}>
              정규리그 기록
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "recent" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("recent");
                setTitle("최근 5경기 기록");
              }}>
              최근 5경기
            </MenuA>
          </MenuLi>
          <MenuLi className={menu === "total" ? "active" : ""}>
            <MenuA
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMenu("total");
                setTitle("통산 기록 (kt)");
              }}>
              통산 기록
            </MenuA>
          </MenuLi>
        </ul>
      </DetailMenuWrapper>
      <div style={{ marginTop: "40px" }}>
        <Title title={title} />
      </div>
      {menu === "league" &&
        (isPitcher ? (
          <>
            <PitcherTable />
            <PitcherTable2 />
          </>
        ) : (
          <>
            <HitterTable />
            <HitterTable2 />
          </>
        ))}
      {menu === "recent" && (isPitcher ? <PitcherRecent /> : <HitterRecent />)}
      {menu === "total" && (isPitcher ? <PitcherTotal /> : <HitterTotal />)}
    </>
  );
};
export default PlayerDetail;
