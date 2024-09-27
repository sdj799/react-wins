import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";
import Description from "./Description";
import Title from "./Title";

const ChannelStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Channel = () => {
  const schedule = useWatchPointStore((state) => state.schedule);
  return (
    <ChannelStyle>
      <Title title="중계 채널" $marginBottom="20px;" />
      <Description desc={`${schedule?.current.broadcast}`} isChannel />
    </ChannelStyle>
  );
};
export default Channel;
