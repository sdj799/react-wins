import styled from "styled-components";
import Description from "./Description";
import Title from "./Title";

const WeatherStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Weather = () => {
  return (
    <WeatherStyle>
      <Title title="홈구장 날씨" $marginBottom="20px;" />
      <Description nodata="경기 당일 날씨만 제공됩니다." isWeather />
    </WeatherStyle>
  );
};
export default Weather;
