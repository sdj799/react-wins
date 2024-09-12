import styled from "styled-components";

const NavigationWrapper = styled.div`
  padding: 15px 20px;
  .next {
    margin-left: 10px;
  }
  .list {
    width: 100px;
    float: right;
  }
`;

const NavigationBtn = styled.button`
  width: 85px;
  height: 30px;
  padding: 0px;
  text-align: center;
  vertical-align: middle;
  font-size: 15px;
  color: #fff;
  background-color: #282828;
  border-radius: 10%;
`;

const NavigationControls = () => {
  return (
    <NavigationWrapper>
      <NavigationBtn className="prev">이전</NavigationBtn>
      <NavigationBtn className="next">다음</NavigationBtn>
      <NavigationBtn className="list">목록보기</NavigationBtn>
    </NavigationWrapper>
  );
};
export default NavigationControls;
