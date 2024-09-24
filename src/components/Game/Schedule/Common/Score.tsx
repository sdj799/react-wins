import styled from "styled-components";

interface ScoreProps {
  visitScore: number;
  homeScore: number;
}

const ScoreStyle = styled.div`
  margin: 22px 0;

  & > span {
    font-size: 24px;
    font-weight: 300;
  }
`;

const Score = ({ visitScore, homeScore }: ScoreProps) => {
  return (
    <ScoreStyle>
      <span>{`${visitScore} : ${homeScore}`}</span>
    </ScoreStyle>
  );
};
export default Score;
