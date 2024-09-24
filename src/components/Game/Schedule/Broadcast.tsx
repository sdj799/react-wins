import styled from "styled-components";
import BroadcastList from "./Broadcast/BroadcastList";

const BroadcastStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Broadcast = () => {
  return (
    <BroadcastStyle>
      <BroadcastList />
    </BroadcastStyle>
  );
};
export default Broadcast;
