import { NavType } from "@customTypes/layout";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import navData from "../../../../data/nav.json";
import TabItem from "./TabItem";

const TabList = () => {
  const [$activeTabId, setActiveTabId] = useState(1);
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();

  const tabList = (navData as NavType[]).flatMap((el) => {
    const paths = el.path;
    const matchingPath = paths.find((p) => p.path === currentPath);

    if (matchingPath && Array.isArray(el.tab)) {
      return el.tab.map((tab) => {
        const tabPath = paths.find((p) => p.id === tab.id)?.path || "";
        return {
          ...tab,
          path: matchingPath.path,
          tabPath,
        };
      });
    }

    return [];
  });

  const onClickTabHandler = (index: number) => {
    setActiveTabId(index);
    const selectedTab = tabList.find((tab) => tab.id === index);
    if (selectedTab) {
      navigate(selectedTab.tabPath);
    }
  };

  return (
    <TabListStyle>
      {tabList.map((tab) => (
        <TabItem
          key={tab.id}
          id={tab.id}
          tab={tab.tab}
          path={tab.tabPath}
          $activeTabId={tab.id === $activeTabId}
          onClick={() => onClickTabHandler(tab.id)}
        />
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
