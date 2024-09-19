import styled from "styled-components";
import Logo from "./Logo";
import Table from "./Table";

const BodyStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
`;

const Body = () => {
  return (
    <BodyStyle>
      <Logo src="" team="KT (원정)" />
      <Table />
      <Logo src="" team="두산 (홈)" />
    </BodyStyle>
  );
};
export default Body;
