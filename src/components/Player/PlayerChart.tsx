import ReactECharts from "echarts-for-react";
import { usePlayerStore } from "store/actions/usePlayerStore";
import styled from "styled-components";

const ChartWrapper = styled.div`
  margin-top: 40px;
`;

const PlayerChart = ({ isPitcher, data }: { isPitcher: boolean; data: number[] }) => {
  const player = usePlayerStore((state) => state.player);

  if (!player) return <></>;

  const indicator = isPitcher
    ? [
        { name: "평균 자책점", max: 6 },
        { name: "WHIP", max: 2 },
        { name: "탈삼진", max: 300 },
        { name: "이닝", max: 250 },
        { name: "승률", max: 1 },
        { name: "삼진/볼넷", max: 10 },
      ]
    : [
        { name: "타율", max: 0.4 },
        { name: "홈런", max: 60 },
        { name: "타점", max: 150 },
        { name: "출루율", max: 0.5 },
        { name: "장타율", max: 0.7 },
        { name: "도루", max: 60 },
      ];

  const option = {
    legend: {
      data: [player?.playerName],
      left: "30%",
    },
    radar: {
      indicator: indicator,
    },
    series: [
      {
        name: isPitcher ? "투수 기록" : "타자 기록",
        type: "radar",
        data: [
          {
            value: data,
            name: player?.playerName,
          },
        ],
      },
    ],
  };

  return (
    <>
      <ChartWrapper>
        <ReactECharts option={option} notMerge={true} lazyUpdate={true} />
      </ChartWrapper>
    </>
  );
};
export default PlayerChart;
