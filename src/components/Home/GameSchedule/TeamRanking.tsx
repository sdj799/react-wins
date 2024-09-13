import teamRankingData from "@data/teamRanking.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../Common/Container";
import Image from "../Common/Image";
import Text from "../Common/Text";

type TeamRankingType = {
  game: number;
  gyear: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  wldName: string;
  wra: string;
};

const TeamRankingStyle = styled(Link)`
  position: relative;
  display: flex;
  padding: 40px 50px;
  align-items: flex-end;
  gap: 20px;
`;

const TeamRankingInnerStyle = styled.div`
  display: flex;
  flex-direction: column;

  & > div {
    padding-right: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
  }

  &:last-child {
  }
`;

const TeamRanking = () => {
  const [data, setData] = useState<TeamRankingType[]>([]);

  useEffect(() => {
    // 데이터페칭 시 변경
    const rankingData = [...teamRankingData];
    setData(rankingData);
  }, []);

  return (
    <>
      {data.map((rank, index) => (
        <Container key={index} to="#" target="_self" $bgColor="to right, #ec3e57, #c767dd, #4aa9c8">
          <TeamRankingStyle to="#">
            <TeamRankingInnerStyle>
              <Text
                text="팀 순위"
                $fontSize="13px"
                $fontWeight="400"
                $color="rgba(255, 255, 255, 0.6)"
                $marginBottom="10px"
              />
              <div>
                <Text
                  text={`${rank.rank}`}
                  $fontSize="72px"
                  $fontWeight="500"
                  $textShadow="0 3px 6px rgba(0, 0, 0, 0.16)"
                  $color="#fff"
                />
                <Text text="위" $fontSize="18px" $fontWeight="700" $color="#fff" />
              </div>
            </TeamRankingInnerStyle>
            <TeamRankingInnerStyle>
              <Text text={`${rank.wldName}`} $fontSize="24px" $fontWeight="300" $color="#fff" $marginBottom="10px" />
              <Text text={`총 ${rank.game}경기, 승률 ${rank.wra}`} $fontSize="14px" $fontWeight="300" $color="#fff" />
            </TeamRankingInnerStyle>
            <Image
              src="https://www.ktwiz.co.kr/v2/imgs/img-score@2x.png"
              alt="mascot"
              $maxWidth="160px"
              $position="absolute"
              $top="50%"
              $right="0"
              $transform="translateY(-50%)"
            />
          </TeamRankingStyle>
        </Container>
      ))}
    </>
  );
};
export default TeamRanking;
