import teamRankingData from "@data/teamRanking.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface RankingProps {
  game: number;
  gyear: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  wldName: string;
  wra: string;
}

const TeamRankingStyle = styled(Link)`
  position: relative;
  width: 100%;
  max-width: 540px;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  padding: 40px 50px;
  border-radius: 20px;
  background-image: linear-gradient(to right, #ec3e57, #c767dd, #4aa9c8);

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  & > div:first-child {
    & > h3 {
      font-size: 13px;
      color: rgba(255, 255, 255, 0.6);
    }

    & > h4 {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      padding-right: 20px;
      border-right: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      font-size: 18px;
      font-weight: 700;

      & > strong {
        font-size: 72px;
        font-weight: 500;
        text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      }
    }
  }

  & > div:nth-child(2) {
    color: #fff;
    & > h5 {
      font-size: 24px;
      font-weight: 300;
    }

    & > span {
      font-size: 14px;
      font-weight: 300;
    }
  }

  & > img {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 100%;
    max-width: 160px;
  }
`;

const TeamRanking = () => {
  const [data, setData] = useState<RankingProps[]>([]);

  useEffect(() => {
    // 데이터페칭 시 변경
    const rankingData = [...teamRankingData];
    setData(rankingData);
  }, []);

  return (
    <>
      {data.map((rank, index) => (
        <TeamRankingStyle key={index} to="#">
          <div>
            <h3>팀 순위</h3>
            <h4>
              <strong>{rank.rank}</strong>위
            </h4>
          </div>
          <div>
            <h5>{rank.wldName}</h5>
            <span>{`총 ${rank.game}경기, 승률 ${rank.wra}`}</span>
          </div>
          <img src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png" alt="mascot" />
        </TeamRankingStyle>
      ))}
    </>
  );
};
export default TeamRanking;
