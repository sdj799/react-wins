import styled from "styled-components";
import TabItem from "./TabItem";

const TabList = () => {
  const tabList = ["구단 소개", "구단 연혁"];
  return (
    <TabListStyle>
      {tabList.map((tab) => (
        <TabItem key={tab} tab={tab} />
      ))}
    </TabListStyle>
  );
};
export default TabList;

const TabListStyle = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
