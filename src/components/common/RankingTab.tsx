import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Tab = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 38px;
  text-align: center;
`;

const TabItem = styled.li`
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e4e4e4;
  &:active {
    background-color: red;
  }
  &:not(:first-child) {
    border-left: none;
  }
`;

const TabTitle = styled(NavLink)`
  display: block;
  font-size: 14px;
  line-height: 38px;
  text-align: center;
  &.active {
    background-color: #ec0a0b;
    color: white;
  }
`;

const RankingTab = () => {
  return (
    <Tab>
      <TabItem>
        <TabTitle to="">팀순위</TabTitle>
      </TabItem>
      <TabItem>
        <TabTitle to="../pitcher">투수순위</TabTitle>
      </TabItem>
      <TabItem>
        <TabTitle to="../batter">타자순위</TabTitle>
      </TabItem>
      <TabItem>
        <TabTitle to="../crowd">관중현황</TabTitle>
      </TabItem>
    </Tab>
  );
};
export default RankingTab;
