import whiteLogo from "@assets/whiteLogo.svg";
import montlyPlyerData from "@data/montlyPlayer.json";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Container from "../Common/Container";
import Image from "../Common/Image";
import Text from "../Common/Text";

type MontlyPlayerType = {
  imgFilePath: string;
  name: string;
  num: number;
};

const MontlyPlayerStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 63px 50px;

  & > div {
    margin-bottom: 34px;
  }
`;

const MontlyPlayer = () => {
  const [data, setData] = useState<MontlyPlayerType[]>([]);

  useEffect(() => {
    const playerData = [...montlyPlyerData];
    setData(playerData);
  }, []);

  return (
    <>
      {data.map((player, index) => (
        <Container to="player/infielder/detail?pcode=50054" target="_self" $bgImage={player.imgFilePath} key={index}>
          <MontlyPlayerStyle>
            <div>
              <Image src={whiteLogo} alt="logo" $maxWidth="81px" $marginBottom="5px" />
              <Text text="이달의 선수" $fontSize="15px" $fontWeight="200" $color="#fff" $opacity="0.8" />
            </div>
            <Text text={`${player.num}`} $fontSize="53px" $fontWeight="300" $color="#f53232" />
            <Text text={player.name} $fontSize="53px" $fontWeight="300" $color="#fff" />
          </MontlyPlayerStyle>
        </Container>
      ))}
    </>
  );
};
export default MontlyPlayer;
