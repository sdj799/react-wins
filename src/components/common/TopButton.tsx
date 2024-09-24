import { IoTriangle } from "react-icons/io5";
import styled from "styled-components";

const TopBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: -70px;
  background-color: #222;
  font-size: 12px;
  color: #fff !important;
  padding: 8px 24px 8px 24px;
  border-radius: 4px;
`;

const TopBtnWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const TopButton = () => {
  return (
    <>
      <TopBtnWrapper>
        <TopBtn onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          TOP <IoTriangle />
        </TopBtn>
      </TopBtnWrapper>
    </>
  );
};
export default TopButton;
