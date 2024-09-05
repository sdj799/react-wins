import styled from "styled-components";
import LocationGuide from "../components/LocationGuide";
import KakaoMap from "../components/KakaoMap";

export const LocationWrapper = styled.div`
  padding-top: 20px;
`;

export const TitleWrapper = styled.div`
  border-left: 5px solid #d23933;
  padding-left: 14px;
  height: 21px;
  margin-bottom: 20px;
`;

export const ArtiTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #222;
  display: inline-block;
  vertical-align: sub;
`;

const Location = () => {
  return (
    <>
      <LocationWrapper>
        <TitleWrapper>
          <ArtiTitle>오시는 길</ArtiTitle>
        </TitleWrapper>
        <KakaoMap lat={37.29972304} lng={127.00975851} location={"수원 KT 위즈 파크"} />
        <LocationGuide
          address1="주소 : 경기도 수원시 장안구 경수대로 893(조원동) 수원"
          address2="케이티 위즈 파크 (구 : 경기도 수원시 장안구 조원동 775)"
          href="https://kko.to/2Xmot-8Sx5"
          busList={[
            { color: "green", busType: "일반", busNumber: "25, 25-2, 27, 36, 55, 62-1, 99, 99-2, 300-1" },
            { color: "green", busType: "일반", busNumber: "310, 777" },
            { color: "red", busType: "직행", busNumber: "2007, 3000, 7770" },
            { color: "blue", busType: "좌석", busNumber: "300, 900" },
          ]}
          subway={[
            "화서역 하차 (택시로 10분)",
            "· 37, 39번 버스이용 수성중 사거리 하차 후 도보 3분",
            "· 55분 버스이용 종합운동장 하차 수원역하차 (택시로 20분)",
            "· 1번, 5번, 8번 버스이용 수성중 사거리 하차 후 도보 3분",
          ]}
        />
      </LocationWrapper>
    </>
  );
};
export default Location;
