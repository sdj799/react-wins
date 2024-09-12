import logo from "@assets/whiteLogo.svg";
import styled from "styled-components";
import Information from "./Information";
import MontlyPlayer from "./LinkBox/MontlyPlayer";

const LinkBoxStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LinkBox = () => {
  return (
    <LinkBoxStyle>
      <Information
        link="#"
        logo={logo}
        title="공식 온라인 스토어"
        desc="kt wiz의 익스클루시브한 아이템을 만나보세요!"
        shortcut="바로가기"
        bgImage="https://cdn.pixabay.com/photo/2019/05/06/03/45/baseball-4182179_1280.jpg"
        isLarge
      />
      <MontlyPlayer />
    </LinkBoxStyle>
  );
};
export default LinkBox;
