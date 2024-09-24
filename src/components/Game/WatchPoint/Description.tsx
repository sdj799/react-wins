import { useWatchPointStore } from "store/actions/useWatchPointStore";
import styled from "styled-components";

interface DescProps {
  desc?: string;
  isChannel?: boolean;
  isWeather?: boolean;
}

const DescStyle = styled.ul`
  display: flex;
  flex-direction: column;

  & > li {
    font-size: 14px;
    color: #222;
    line-height: 22px;
    font-weight: 300;
  }
`;

const getWindDirection = (wdkor: string) => {
  switch (wdkor) {
    case "동":
      return "←";
    case "서":
      return "→";
    case "남":
      return "↑";
    case "북":
      return "↓";
    case "북동":
      return "↙︎";
    case "북서":
      return "↘︎";
    case "남동":
      return "↖︎";
    case "남서":
      return "↗︎";
    default:
      return "";
  }
};

const Description = ({ desc, isChannel, isWeather }: DescProps) => {
  const weather = useWatchPointStore((state) => state.weather);

  return (
    <DescStyle>
      {isWeather && weather ? (
        <>
          <li>{`- ${weather?.addr}`}</li>
          <li>{`- 온도 : 현재 ${weather?.temp} (최저 ˚, 최고 ˚)`}</li>
          <li>{`- 날씨 : ${weather?.wfkor}`}</li>
          <li>{`- 강수확률 : ${weather?.pop}%`}</li>
          <li>{`- 풍속 : ${weather?.ws}m/s`}</li>
          <li>{`- 풍향 : ${weather?.wdkor} ${getWindDirection(weather?.wdkor)}`}</li>
          <li>{`- 습도 : ${weather?.reh}%`}</li>
        </>
      ) : isWeather ? (
        <li>- 경기 당일 날씨만 제공됩니다.</li>
      ) : null}
      {isChannel && desc ? <li>{desc}</li> : null}
    </DescStyle>
  );
};
export default Description;
