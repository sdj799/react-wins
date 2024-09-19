import { ScheduleElType } from "@customTypes/watchPoint";
import styled from "styled-components";
import Description from "./Description";
import Title from "./Title";

interface ChannelProps {
  filteredData: ScheduleElType | null;
}

const ChannelStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Channel = ({ filteredData }: ChannelProps) => {
  return (
    <ChannelStyle>
      <Title title="중계 채널" $marginBottom="20px;" />
      <Description desc={`${filteredData?.broadcast}`} isChannel />
    </ChannelStyle>
  );
};
export default Channel;
