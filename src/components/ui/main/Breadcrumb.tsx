import { IoIosArrowForward } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadcumbStyle = styled.ul`
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
  & > li {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    & > span {
      font-size: 14px;
      color: #b7b7b7;
    }
    & > svg {
      font-size: 14px;
      color: #b7b7b7;
    }
  }
  & > li:last-child {
    & > span {
      font-weight: 500;
      color: #ec0a0b;
    }
  }
`;

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter((el) => el);

  return (
    <BreadcumbStyle>
      <li>
        <TiHome />
      </li>
      {path.map((el, index) => (
        <li key={index}>
          <IoIosArrowForward />
          <span>{el}</span>
        </li>
      ))}
    </BreadcumbStyle>
  );
};
export default Breadcrumb;
