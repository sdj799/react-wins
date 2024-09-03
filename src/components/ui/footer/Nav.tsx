import styled from "styled-components";

const Nav = () => {
  return (
    <FooterNavStyle>
      <li>
        <button type="button">개인정보 처리방침</button>
      </li>
      <li>
        <button type="button">이용약관</button>
      </li>
      <li>
        <button type="button">이메일무단수집거부</button>
      </li>
      <li>
        <button type="button">Sitemap</button>
      </li>
    </FooterNavStyle>
  );
};
export default Nav;

const FooterNavStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 10px;

  & > li {
    & > button {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
