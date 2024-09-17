import styled from "styled-components";
import Description from "./Description";
import Title from "./Title";

const ChannelStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Channel = () => {
  return (
    <ChannelStyle>
      <Title title="중계 채널" $marginBottom="20px;" />
      <Description desc="KBS N SPORTS,MBC SPORTS+" isChannel />
    </ChannelStyle>
  );
};
export default Channel;
