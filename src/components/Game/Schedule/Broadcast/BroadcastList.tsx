import styled from "styled-components";
import BroadcastItem from "./BroadcastItem";
import Tag from "./Tag";

const BroadcastListStyle = styled.li`
  display: flex;
  align-items: baseline;

  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
`;

const BroadcastList = () => {
  const tagList = ["TV", "CMB", "IPTV", "RADIO"];
  return (
    <>
      {tagList.map((tag, index) => (
        <BroadcastListStyle key={index}>
          <Tag tag={tag} />
          <div key={index}>
            <BroadcastItem tag={tag} />
          </div>
        </BroadcastListStyle>
      ))}
    </>
  );
};
export default BroadcastList;
