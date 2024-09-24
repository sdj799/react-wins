import styled from "styled-components";

const TabStyle = styled.ul`
  width: 100%;
  max-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > li {
    width: 100%;
    max-width: 120px;
    padding: 8px 20px;
    color: #222;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
  }

  & > li:first-child {
    background-color: #ec0a0b;
    color: #fff;
  }
`;

const Tab = () => {
  return (
    <TabStyle>
      <li>kt wiz 경기</li>
      <li>전체 리그</li>
    </TabStyle>
  );
};
export default Tab;
