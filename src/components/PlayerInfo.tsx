import styled from "styled-components";

const InfoArti = styled.article`
  width: 100%;
  position: relative;
`;

const InfoImg = styled.img`
  width: 100%;
`;

const InfoDt = styled.dt`
  position: absolute;
  top: 30%;
  left: 35%;
  color: #fff;
  font-size: 54px;
  font-weight: 700;
`;

const InfoNumber = styled.span`
  color: #c00000;
  font-size: 44px;
  margin-bottom: 12px;
  display: block;
`;

const InfoEng = styled.span`
  font-size: 18px;
  margin-top: 12px;
  display: block;
`;

const InfoListWrapper = styled.dd`
  position: absolute;
  top: 30%;
  left: auto;
  right: 0;
  width: 440px;
  box-sizing: border-box;
  padding-right: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  line-height: 26.5px;
`;

const InfoListDt = styled.dt`
  display: inline-block;
  width: 70px;
  vertical-align: top;
`;

const InfoListDd = styled.dd`
  display: inline-block;
  width: 325px;
`;

const PictureButton = styled.a`
  background-color: red;
  display: inline-block;
  margin-top: 15px;
  width: 146px;
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
  height: 32px;
  color: #fff;
`;

const PlayerInfo = () => {
  return (
    <>
      <InfoArti>
        <div>
          <InfoImg src="https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/77733_2024-03-06_110511.jpg" />
          <dl>
            <InfoDt>
              <InfoNumber>No. 72</InfoNumber>
              김강
              <InfoEng>KIM KANG</InfoEng>
            </InfoDt>
            <InfoListWrapper>
              <ul>
                <li>
                  <dl>
                    <InfoListDt>포지션</InfoListDt>
                    <InfoListDd>타격보조 코치</InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>생년월일</InfoListDt>
                    <InfoListDd>1988.10.16</InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>체격</InfoListDt>
                    <InfoListDd>188 cm, 92 kg</InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>출신교</InfoListDt>
                    <InfoListDd>
                      <span>광주화정초-무등중-</span>광주제일고
                    </InfoListDd>
                  </dl>
                </li>
              </ul>
              <PictureButton href={`/media/photos/1?searchWord=김강&search.sort=400`}>사진 보기</PictureButton>
            </InfoListWrapper>
          </dl>
        </div>
      </InfoArti>
    </>
  );
};
export default PlayerInfo;
