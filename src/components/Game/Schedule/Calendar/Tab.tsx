import { useScheduleStore } from "store/actions/useScheduleStore";
import styled from "styled-components";

interface TabProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  formattedDate: string;
}

const TabStyle = styled.ul`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    width: 100%;
    max-width: 120px;
    padding: 8px 20px;
    color: #222;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    cursor: pointer;

    &.active {
      background-color: #ec0a0b;
      color: #fff;
    }
  }
`;

const Tab = ({ activeTab, setActiveTab, formattedDate }: TabProps) => {
  const fetchMonthSchedule = useScheduleStore((state) => state.fetchMonthSchedule);
  const fetchAllGameSchedule = useScheduleStore((state) => state.fetchAllGameSchedule);

  const tabList = ["kt wiz 경기", "전체 리그"];

  const onClickHandler = (tab: string) => {
    setActiveTab(tab);

    if (tab === "kt wiz 경기") {
      fetchMonthSchedule(formattedDate);
    } else {
      fetchAllGameSchedule(formattedDate);
    }
  };

  return (
    <TabStyle>
      {tabList.map((tab, index) => (
        <li key={index} className={activeTab === tab ? "active" : ""} onClick={() => onClickHandler(tab)}>
          {tab}
        </li>
      ))}
    </TabStyle>
  );
};
export default Tab;
