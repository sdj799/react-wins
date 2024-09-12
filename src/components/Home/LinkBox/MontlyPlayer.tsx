import logo from "@assets/whiteLogo.svg";
import montlyPlyerData from "@data/montlyPlayer.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

type MontlyPlayerType = {
  imgFilePath: string;
  name: string;
  num: number;
};

const MontlyPlayerStyle = styled(Link)<{ $playerImage: string }>`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 70px 50px;
  color: #fff;
  background-image: url(${(props) => props.$playerImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  & > div {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    margin-bottom: 20px;

    & > img {
      width: 100%;
      max-width: 81px;
      margin-bottom: 5px;
    }

    & > h3 {
      font-size: 15px;
      font-weight: 300;
      opacity: 0.8;
    }
  }

  & > span:nth-child(-n + 3) {
    font-size: 53px;
    font-weight: 300;
  }

  & > span:nth-child(2) {
    color: #f53232;
  }
`;

const MontlyPlayer = () => {
  const [data, setData] = useState<MontlyPlayerType[]>([]);

  useEffect(() => {
    // 데이터페칭 시 변경
    const playerData = [...montlyPlyerData];
    setData(playerData);
  }, []);

  return (
    <>
      {data.map((player, index) => (
        <MontlyPlayerStyle key={index} to="#" $playerImage={player.imgFilePath}>
          <div>
            <img src={logo} alt="" />
            <h3>이달의 선수</h3>
          </div>
          <span>{player.num}</span>
          <span>{player.name}</span>
        </MontlyPlayerStyle>
      ))}
    </>
  );
};
export default MontlyPlayer;
