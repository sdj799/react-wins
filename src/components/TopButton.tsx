import { IoTriangle } from "react-icons/io5";
import styled from "styled-components";

const TopBtn = styled.button`
  position: absolute;
  right: 0%;
  bottom: 0%;
  display: inline-block;
  background-color: #222;
  font-size: 14px;
  color: #fff !important;
  padding: 8px 24px 8px 24px;
  border-radius: 4px;
`;

const TopBtnWrapper = styled.div`
  height: 100px;
  position: relative;
`;

const TopButton = () => {
  return (
    <>
      <TopBtnWrapper>
        <TopBtn onClick={() => window.scrollTo(0, 0)}>
          TOP <IoTriangle />
        </TopBtn>
      </TopBtnWrapper>
    </>
  );
};
export default TopButton;
