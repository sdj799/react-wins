import styled from "styled-components";

const Breadcrumb = () => {
  return (
    <BreadcumbStyle>
      <li>home</li>
      <li>home</li>
      <li>home</li>
      <li>home</li>
    </BreadcumbStyle>
  );
};
export default Breadcrumb;

const BreadcumbStyle = styled.ul`
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 40px;
  border-bottom: 2px solid #ec0a0b;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;
