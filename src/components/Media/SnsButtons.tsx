import facebook from "@assets/icons/facebook.png";
import kakao from "@assets/icons/kakao.png";
import styled from "styled-components";

const ArticleFooter = styled.section`
  margin: 0 20px 15px;
`;

const SnsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const SnsIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  cursor: pointer;
`;

const SnsButtons = () => {
  return (
    <ArticleFooter>
      <SnsList>
        <li>
          <SnsIcon src={kakao} />
        </li>
        <li>
          <SnsIcon src={facebook} />
        </li>
      </SnsList>
    </ArticleFooter>
  );
};
export default SnsButtons;
