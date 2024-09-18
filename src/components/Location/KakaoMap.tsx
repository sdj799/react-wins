import { TKakaoMapp } from "@customTypes/kakaomap";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useLocation } from "react-router-dom";
import iksanMap from "../../assets/images/iksan_map.png";
import locationMap from "../../assets/images/map_img.png";

declare const __KAKAOMAP_APP_KEY__: string;
const KakaoMap = ({ lat, lng, location }: TKakaoMapp) => {
  const [loading, error] = useKakaoLoader({
    appkey: __KAKAOMAP_APP_KEY__, // 발급 받은 APPKEY, .env에서 가져옴
  });
  const { pathname } = useLocation();

  if (loading || error) {
    if (pathname.includes("iksan")) return <img src={iksanMap} alt="야구장 지도" />;
    else return <img src={locationMap} alt="야구장 지도" />;
  }
  return (
    <>
      <Map center={{ lat: lat, lng: lng }} style={{ width: "100%", height: "662px" }} level={2}>
        <MapMarker position={{ lat: lat, lng: lng }}>
          <div style={{ color: "#000" }}>{location}</div>
        </MapMarker>
      </Map>
    </>
  );
};
export default KakaoMap;
