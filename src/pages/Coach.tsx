import PlayerCard from "@components/Player/PlayerCard";
import SearchForm from "@components/SearchForm";
import { PlayerContentsWrapper } from "@styles/PlayerTable";
import { useState } from "react";

const dataList = [
  {
    backnum: "71",
    birth: "1966.05.24",
    career: "광주서림초-무등중-광주제일고-동국대-해태-삼성-해태-KIA",
    gyear: "2024",
    height: "180 cm",
    heightWeight: "180 cm,78 kg",
    hittype: "우언우타",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/89620_2024-03-06_104359.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/89620_2024-03-06_104534.jpg",
    orderSeq: "1",
    pcode: "89620",
    playerName: "이강철",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/89620_2024-03-06_104036.jpg",
    playerPrvwImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/89620_2024-03-06_104311.jpg",
    playerPrvwImg3: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg3/89620_2024-03-06_104336.jpg",
    position: "감독",
    teamCode: "KT0",
    teamName: "KT0",
    weight: "78 kg",
  },
  {
    backnum: "77",
    birth: "1969.10.22",
    career: "대구초-대구중-대구상고-계명대-삼성-SK",
    gyear: "2024",
    height: "181 cm",
    heightWeight: "181 cm,87 kg",
    hittype: "좌투좌타",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/92401_2024-03-06_104746.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/92401_2024-03-06_104817.jpg",
    orderSeq: "2",
    pcode: "92401",
    playerName: "김태한",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/92401_2024-03-06_104608.jpg",
    playerPrvwImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/92401_2024-03-06_104638.jpg",
    playerPrvwImg3: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg3/92401_2024-03-06_104653.jpg",
    position: "퓨처스 감독",
    teamCode: "KT0",
    teamName: "KT0",
    weight: "87 kg",
  },
  {
    backnum: "70",
    birth: "1971.08.19",
    career: "부산수영초-부산동성중-부산고-중앙대-삼성-롯데-SK",
    gyear: "2024",
    height: "176 cm",
    heightWeight: "176 cm,82 kg",
    hittype: "우투우타",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/94415_2024-03-06_104939.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/94415_2024-03-06_104952.jpg",
    orderSeq: "3",
    pcode: "94415",
    playerName: "김태균",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/94415_2024-03-06_104853.jpg",
    playerPrvwImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/94415_2024-03-06_104853.jpg",
    playerPrvwImg3: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg3/94415_2024-03-06_104922.jpg",
    position: "수석 코치",
    teamCode: "KT0",
    teamName: "KT0",
    weight: "82 kg",
  },
  {
    backnum: "82",
    birth: "1982.04.05",
    career: "유안초-광주동성중-광주동성고-SK",
    gyear: "2024",
    height: "190 cm",
    heightWeight: "190 cm,91 kg",
    hittype: "우투우타",
    mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/72801_2024-03-06_105323.jpg",
    mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/72801_2024-03-06_105336.jpg",
    orderSeq: "4",
    pcode: "72801",
    playerName: "제춘모",
    playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/72801_2024-03-06_105230.jpg",
    playerPrvwImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/72801_2024-03-06_105245.jpg",
    playerPrvwImg3: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg3/72801_2024-03-06_105300.jpg",
    position: "투수 코치",
    teamCode: "KT0",
    teamName: "KT0",
    weight: "91 kg",
  },
];

const Coach = () => {
  const [playerList, setPlayerList] = useState(dataList);

  //todo : api가져와서 setPlayerList로 갱신해줘야함

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
              href={`/player/coach/detail?pcode=${data.pcode}`}
            />
          ))}
        </ul>
      </PlayerContentsWrapper>
    </>
  );
};
export default Coach;
