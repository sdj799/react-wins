import ArticleTitle from "@components/common/ArticleTitle";
import ReactECharts from "echarts-for-react";
import styled from "styled-components";

// 더미 데이터
const data = [
  { team: "KT", value: 700000 },
  { team: "LG", value: 1300000 },
  { team: "삼성", value: 1250000 },
  { team: "두산", value: 1200000 },
  { team: "KIA", value: 1150000 },
  { team: "롯데", value: 1200000 },
  { team: "SSG", value: 1150000 },
  { team: "키움", value: 900000 },
  { team: "한화", value: 950000 },
  { team: "NC", value: 850000 },
];
const StyledArticle = styled.article`
  width: 100%;
  height: 435px;
  margin-top: 45px;
`;

const AccrueAudience = () => {
  // xAxis와 yAxis에 사용할 데이터
  const teams = data.map((item) => item.team);
  const values = data.map((item) => item.value);

  const options = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        return `${params.name}: ${params.value.toLocaleString()}`;
      },
    },
    grid: {
      left: "7%",
      top: "25%",
      right: "15px",
      bottom: "6%",
    },
    xAxis: {
      type: "category", // 팀 이름을 x축에 표시
      data: teams,
      axisLabel: {
        interval: 0,
        rotate: 0, // x축 라벨을 기울여서 표시
        margin: 5,
        verticalAlign: "top",
      },
    },
    yAxis: {
      type: "value", // y축은 직접 설정한 값 사용
      axisLabel: {
        formatter: (value: number) => value.toLocaleString(),
      },
      min: 0,
      max: 1600000,
      interval: 200000,
    },
    series: [
      {
        data: values, // 팀별 관중 수 데이터
        type: "bar", // 막대형 차트로 설정
        itemStyle: {
          color: (params: any) => (params.dataIndex === 0 ? "#d73027" : "#4a4a4a"), // KT팀은 빨간색, 나머지는 회색
        },
        barWidth: "15%", // 막대 너비 설정
      },
    ],
  };

  return (
    <>
      <StyledArticle>
        <ArticleTitle title="2024 시즌 누적관중" />
        <div style={{ border: "1px solid black", width: "100%", height: "350px" }}>
          <ReactECharts option={options} style={{ width: "100%", height: "300px" }} opts={{ renderer: "svg" }} />
        </div>
      </StyledArticle>
    </>
  );
};

export default AccrueAudience;
