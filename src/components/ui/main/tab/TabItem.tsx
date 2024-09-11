import styled from "styled-components";

interface TabItemProps {
  id: number;
  tab: string;
  $activeTabId: boolean;
  path: string;
  onClick: () => void;
}

const TabItem = ({ tab, $activeTabId, onClick }: TabItemProps) => {
  return (
    <TabItemStyle $isActive={$activeTabId} onClick={onClick}>
      {tab}
    </TabItemStyle>
  );
};
export default TabItem;

const TabItemStyle = styled.li<{ $isActive: boolean }>`
  width: 150px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  cursor: pointer;
  font-size: 17px;
  color: ${({ $isActive }) => ($isActive ? "#000" : "rgba(255, 255, 255, 0.8)")};
  font-weight: ${({ $isActive }) => ($isActive ? "500" : "300")};
  border-bottom: ${({ $isActive }) => ($isActive ? "4px solid #000" : "none")};
`;
