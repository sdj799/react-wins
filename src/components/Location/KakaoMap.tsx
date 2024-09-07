import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

const KakaoMap = ({ lat, lng, location }: TKakaoMapp) => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAOMAP_APP_KEY, // 발급 받은 APPKEY, .env에서 가져옴
  });
  console.log(error);
  console.log(loading);
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
