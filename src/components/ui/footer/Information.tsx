import styled from "styled-components";

const FooterInfoStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 13px;
  & > li {
    display: flex;
    & > span:last-child {
      color: #111111;
    }
  }
  & > li:first-child {
    line-height: 1.5;
    & > span:last-child {
      color: rgba(0, 0, 0, 0.3);
      & > strong {
        color: #000000;
        font-weight: 500;
      }
    }
  }
`;

const Information = () => {
  return (
    <FooterInfoStyle>
      <li>
        <span className="green">대표번호</span>
        <span>
          <strong>1899-5916</strong>
          <br />
          (운영시간 : 평일 10:00 ~ 18:00, 주말 10:00 ~ 경기시작 전까지, 월요일 및 주말 미경기 시 미운영)
        </span>
      </li>
      <li>
        <span className="green">주소</span>
        <span>경기도 수원시 장안구 경수대로 (조원동) 수원 케이티 위즈파크</span>
      </li>
    </FooterInfoStyle>
  );
};
export default Information;
