import PlayerDetail from "@components/Player/PlayerDetail";
import PlayerInfo from "@components/Player/PlayerInfo";
import TopButton from "@components/TopButton";
import { PlayerContentsWrapper } from "@styles/PlayerTable";

const response = {
  backnum: "99",
  birth: "20040712",
  bloodGroups: "정보없음",
  bornPlace: "정보없음",
  career: "원일초(영통구리틀)-매향중-장안고",
  debutYear: "2023",
  energybar: 320,
  energybarName: "320 점",
  gyear: "2024",
  hasFanpage: "N",
  height: "183",
  hittype: "우투우타",
  mobilePlayerImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113058.jpg",
  mobilePlayerImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113231.jpg",
  mobilePlayerImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113244.jpg",
  pcode: "53006",
  playerName: "강건",
  playerPrvwImg: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg/53006_2024-03-06_113012.jpg",
  playerPrvwImg1: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg1/53006_2024-06-25_132915.jpg",
  playerPrvwImg2: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg2/53006_2024-03-06_113027.jpg",
  playerPrvwImg3: "https://wizzap.ktwiz.co.kr/files/playerImg/ktImg3/53006_2024-03-06_113040.jpg",
  position: "투수",
  rank: 12,
  rankName: "12 위",
  teamName: "KT",
  weight: "85",
};

const PitcherDetail = () => {
  return (
    <>
      <PlayerContentsWrapper>
        <PlayerInfo isPitcher={true} />
        <PlayerDetail isPitcher={true} />
        <TopButton />
      </PlayerContentsWrapper>
    </>
  );
};
export default PitcherDetail;
