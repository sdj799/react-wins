import styled from "styled-components";

interface DescProps {
  location?: string;
  temp?: string;
  weather?: string;
  rain?: string;
  windSpeed?: string;
  windDirection?: string;
  humidity?: string;
  nodata?: string;
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

const Description = ({
  location,
  temp,
  weather,
  rain,
  windSpeed,
  windDirection,
  humidity,
  nodata,
  desc,
  isChannel,
  isWeather,
}: DescProps) => {
  return (
    <DescStyle>
      {isWeather && nodata ? (
        <li>{`- ${nodata}`}</li>
      ) : isWeather ? (
        <>
          <li>{`- ${location}`}</li>
          <li>{`- ${temp}`}</li>
          <li>{`- ${weather}`}</li>
          <li>{`- ${rain}`}</li>
          <li>{`- ${windSpeed}`}</li>
          <li>{`- ${windDirection}`}</li>
          <li>{`- ${humidity}`}</li>
        </>
      ) : null}
      {isChannel && desc ? <li>{desc}</li> : isChannel ? <li>{nodata}</li> : null}
    </DescStyle>
  );
};
export default Description;
