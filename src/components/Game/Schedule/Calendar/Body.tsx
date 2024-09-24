import styled from "styled-components";

const BodyStyle = styled.div`
  width: 100%;
  margin: 20px 0 15px 0;
  border-top: 2px solid #222;
  border-bottom: 2px solid #222;
`;

const Body = () => {
  return (
    <BodyStyle>
      <h1>Calendar Body</h1>
    </BodyStyle>
  );
};
export default Body;
