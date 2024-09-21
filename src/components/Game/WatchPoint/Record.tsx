import styled from "styled-components";
import Body from "./Record/Body";
import Header from "./Record/Header";

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

const Record = () => {
  return (
    <RecordStyle>
      <Header />
      <Body />
    </RecordStyle>
  );
};
export default Record;
