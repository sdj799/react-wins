import { TabType } from "@customTypes/layout";
import styled from "styled-components";

const TabItem = ({ tab }: TabType) => {
  return <TabItemStyle>{tab}</TabItemStyle>;
};
export default TabItem;

const TabItemStyle = styled.li`
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  font-size: 17px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
`;
