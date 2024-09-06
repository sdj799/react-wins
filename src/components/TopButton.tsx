import styled from "styled-components";

const TopBtn = styled.button`
  position: absolute;
  left: 50%;
  margin-left: 465px;
  bottom: 30px;
  display: inline-block;
  background-color: #222;
  font-size: 14px;
  color: #fff !important;
  padding: 8px 34px 8px 24px;
  border-radius: 4px;
`;

const TopButton = () => {
  return (
    <>
      <TopBtn onClick={() => window.scrollTo(0, 0)}>TOP</TopBtn>
    </>
  );
};
export default TopButton;
