import PlayerCard from "@components/Player/PlayerCard";
import SearchForm from "@components/SearchForm";
import { useState } from "react";
import { PlayerContentsWrapper } from "./Coach";

const dataList = [
  {
    playerName: "이강철",
    PlayerNum: 71,
    imgSrc: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/89620_2024-03-06_104036.jpg",
    href: "/player/pitcher/detail?pcode=89620",
  },
  {
    playerName: "김태한",
    PlayerNum: 77,
    imgSrc: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/92401_2024-03-06_104608.jpg",
    href: "/player/pitcher/detail?pcode=89620",
  },
  {
    playerName: "김태균",
    PlayerNum: 70,
    imgSrc: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/94415_2024-03-06_104853.jpg",
    href: "/player/pitcher/detail?pcode=89620",
  },
  {
    playerName: "제춘모",
    PlayerNum: 82,
    imgSrc: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/72801_2024-03-06_105230.jpg",
    href: "/player/pitcher/detail?pcode=89620",
  },
  {
    playerName: "장재중",
    PlayerNum: 75,
    imgSrc: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/94843_2024-03-06_105426.jpg",
    href: "/player/pitcher/detail?pcode=89620",
  },
];

const Pitcher = () => {
  const [playerList, setPlayerList] = useState(dataList);
  return (
    <>
      <SearchForm />
      <PlayerContentsWrapper>
        <ul>
          {playerList.map((data) => (
            <PlayerCard playerName={data.playerName} playerNum={data.PlayerNum} imgSrc={data.imgSrc} href={data.href} />
          ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Pitcher;
