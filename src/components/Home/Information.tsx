import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface InformationProps {
  link: string;
  logo?: string;
  title: string;
  desc: string;
  shortcut: string;
  bgImage: string;
  isLarge?: boolean;
}

const InformationStyle = styled(Link)<{ $bgImage: string; $isLarge: boolean }>`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  color: #fff;
  background-image: url(${(props) => props.$bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  & > div {
    padding: 70px 50px;
    padding: ${(props) => (props.$isLarge ? "70px 50px" : "40px 50px")};
    background-image: ${(props) =>
      props.$isLarge
        ? "linear-gradient(90deg, rgba(0, 0, 0, 0.8), transparent 140%, transparent)"
        : "linear-gradient(135deg, rgba(0, 0, 0, 0.8), transparent 44%, transparent)"};
    border-radius: 20px;

    & > img {
      width: 100%;
      max-width: 124px;
      margin-bottom: 5px;
    }

    & > h3 {
      margin-bottom: ${(props) => (props.$isLarge ? "20px" : "10px")};
      font-size: ${(props) => (props.$isLarge ? "20px" : "13px")};
      font-weight: ${(props) => (props.$isLarge ? "300" : "700")};
      color: ${(props) => !props.$isLarge && "#F53232"};
    }

    & > h4 {
      opacity: ${(props) => (props.$isLarge ? "0.6" : "1")};
      margin-bottom: ${(props) => (props.$isLarge ? "35px" : "30px")};
      font-size: ${(props) => (props.$isLarge ? "13px" : "24px")};
      color: ${(props) => !props.$isLarge && "#000"};
      text-shadow: ${(props) => !props.$isLarge && "0 3px 6px rgba(0,0,0,.16)"};
    }

    & > div {
      display: flex;
      align-items: center;
      gap: 3px;

      & > span {
        font-size: 13px;
        font-weight: 300;
        color: ${(props) => !props.$isLarge && "#000"};
      }

      & > svg {
        font-size: 20px;
        color: ${(props) => !props.$isLarge && "#000"};
      }
    }
  }
`;

const Information = ({ link, logo, title, desc, shortcut, bgImage, isLarge = false }: InformationProps) => {
  return (
    // 배포 후 도메인주소 생성되면, 새창열기 적용
    <InformationStyle to={link} $bgImage={bgImage} $isLarge={isLarge}>
      <div>
        {logo && <img src={logo} alt="logo" />}
        <h3>{title}</h3>
        <h4>{desc}</h4>
        <div>
          <span>{shortcut}</span>
          <IoIosArrowRoundForward />
        </div>
      </div>
    </InformationStyle>
  );
};
export default Information;
