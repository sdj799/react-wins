import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import Button from "./Button";

const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    & > span {
      font-size: 26px;
      font-weight: 400;
      color: #222;
    }
  }

  & > span {
    font-size: 14px;
    font-weight: 300;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div>
        <Button $color="#fff" $fontSize="20px" $bgColor="rgba(0,0,0,0.7)" $rounded="50%">
          <IoIosArrowBack />
        </Button>
        <span>09.14 (토) 17:00</span>
        <Button $color="#fff" $fontSize="20px" $bgColor="rgba(0,0,0,0.7)" $rounded="50%">
          <IoIosArrowForward />
        </Button>
      </div>
      <span>17:00 잠실</span>
    </HeaderStyle>
  );
};
export default Header;
