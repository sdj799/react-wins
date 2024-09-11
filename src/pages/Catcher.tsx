import PlayerCard from "@components/Player/PlayerCard";
import SearchForm from "@components/SearchForm";
import { PlayerContentsWrapper } from "@styles/PlayerTable";
import { useState } from "react";

const dataList = [
  {
    backnum: "55",
    energybar: 49,
    energybarName: "49 점",
    gyear: "2024",
    hasFanpage: "N",
    hittype: "우투우타",
    mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130333.jpg",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130346.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130359.jpg",
    pcode: "50066",
    playerName: "강현우",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/50066_2024-03-06_130258.jpg",
    position: "포수",
    rank: 38,
    rankName: "38 위",
    teamName: "KT",
  },
  {
    backnum: "97",
    energybar: 8,
    energybarName: "8 점",
    gyear: "2024",
    hasFanpage: "N",
    hittype: "우투우타",
    mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130453.jpg",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130527.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130543.jpg",
    pcode: "54097",
    playerName: "김민석",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/54097_2024-03-06_130416.jpg",
    position: "포수",
    rank: 58,
    rankName: "58 위",
    teamName: "KT",
  },
  {
    backnum: "44",
    energybar: 13,
    energybarName: "13 점",
    gyear: "2024",
    hasFanpage: "N",
    hittype: "우투좌타",
    mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130743.jpg",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130858.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130810.jpg",
    pcode: "62558",
    playerName: "김준태",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/62558_2024-03-06_130605.jpg",
    position: "포수",
    rank: 49,
    rankName: "49 위",
    teamName: "KT",
  },
  {
    backnum: "22",
    energybar: 83,
    energybarName: "83 점",
    gyear: "2024",
    hasFanpage: "Y",
    hittype: "우투우타",
    mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131013.jpg",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131105.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_131129.jpg",
    pcode: "78548",
    playerName: "장성우",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/78548_2024-03-06_130913.jpg",
    position: "포수",
    rank: 30,
    rankName: "30 위",
    teamName: "KT",
  },
  {
    backnum: "42",
    energybar: 376,
    energybarName: "376 점",
    gyear: "2024",
    hasFanpage: "N",
    hittype: "우투우타",
    mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-08_104716.jpg",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-06_131351.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-06_131402.jpg",
    pcode: "68089",
    playerName: "조대현",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/68089_2024-03-08_104729.jpg",
    position: "포수",
    rank: 12,
    rankName: "12 위",
    teamName: "KT",
  },
];

const Catcher = () => {
  const [playerList, setPlayerList] = useState(dataList);
  return (
    <>
      <SearchForm />
      <PlayerContentsWrapper>
        <ul>
          {playerList.map((data) => (
            <PlayerCard
              key={data.pcode}
              playerName={data.playerName}
              playerNum={data.backnum}
              imgSrc={data.playerPrvwImg}
              href={`/player/catcher/detail?pcode=${data.pcode}`}
            />
          ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Catcher;
