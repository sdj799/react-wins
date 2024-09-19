import { ScheduleElType } from "@customTypes/watchPoint";
import styled from "styled-components";
import Body from "./Record/Body";
import Header from "./Record/Header";

interface RecordProps {
  currentIndex: number;
  filteredData: ScheduleElType | null;
  scheduleArr: (ScheduleElType | undefined)[];
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const RecordStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-image: linear-gradient(#fdfdfd, #f8f8f8);
  border: 1px solid #e4e4e4;
`;

const Record = ({ filteredData, currentIndex, scheduleArr, setCurrentIndex }: RecordProps) => {
  return (
    <RecordStyle>
      <Header
        filteredData={filteredData}
        currentIndex={currentIndex}
        scheduleArr={scheduleArr}
        setCurrentIndex={setCurrentIndex}
      />
      <Body filteredData={filteredData} />
    </RecordStyle>
  );
};
export default Record;
