import img from "@assets/icons/historyIcon.png";
import History from "@components/About/History";

const ClubHistory = function () {
  return (
    <div className="full-container">
      <div className="divider"></div>
      <div className="history-container">
        <History year="2013" img={img} content={`kt sports 독립법인 출범\nkt wiz 프로야구단 창단`} />
        <History year="2014" img={img} content={`Kt wiz 퓨처스리그 데뷔\n수원 케이티 위즈 파크 준공`} />
        <History
          year="2015"
          img={img}
          content={`kt wiz 프로야구단 1군리그 데뷔\nkt wiz 공식 어플리케이션 wizzap(위잽) 출시\nkt wiz 정규리그 첫 승(vs 넥센)\n장성호 2,100안타 달성(KBO 통산안타 2위)\nkt wiz 신생구단 창단 최다관중 신기록 달성(53만 1696명)`}
        />
        <History
          year="2016"
          img={img}
          content={`kt wiz 수도권 더비 'W-Match' 개최(vs SK)\nkt wiz 통산 100승 달성\nkt wiz 김진욱 2대 감독 취임`}
        />
        <History
          year="2017"
          img={img}
          content={`케이티 위즈파크 증축(2만 2천석)\n이진영 통산 2천 경기-2천 안타 달성(KBO 역대 5번째)\n제 1회 kt wiz - SK Wyverns 드림 야구대회 개최\nkt wiz 위안부 피해 할머니(이옥선,박옥선) 시구/시타 및 후원`}
        />
        <History
          year="2018"
          img={img}
          content={`Kt wiz 2018 스포노믹스 대상 수상\n-연고지 상생과 차별화된 팬서비스로, 프로스포츠 구단 부문 대상 수상\n\n케이티 위즈 파크, KBO 최초 미세먼지 측정/저감 캠페인 시행\n-IoT(사물인터넷) 기반으로 공기질 정보 제공 및 미세먼지 저감 활동 추진\n\n2018 자카르타-팔렘방 아시안게임에서 황재균(야구) 금메달\n\nkt wiz 이강철 3대 감독 취임\n-KBO 역대 최고 언더핸드 투수 출신으로, 두산 수석코치를 역임한 이강철 감독 선임\n\nkt wiz 강백호 구단 최초 KBO 신인상 수상\n-KBO 역대 고졸 신인 최다 홈런(29개)을 기록하는 등 뛰어난 활약으로 압도적 선정`}
        />
        <History
          year="2019"
          img={img}
          content={`위즈파크 5G 스타디움 개관식\n구단 창단 최초 9연승 달성\n쿠에바스 구단 최다승 갱신(13승)\n배제성 구단 최초 국내선수 두자리 승수 달성\n창단 첫 5할 승률로 시즌 마감(71승 2무 71패)\n로하스 KBO 외야수 골든글러브 수상\n대한민국 스포츠산업대상(대통령상) 수상`}
        />
        <History
          year="2020"
          img={img}
          content={`데스파이네 구단 최다승 경신(14승)\n정규리그 2위 및 포스트시즌 진출 확정 (81승 62패)\n창단 첫 플레이오프 출전\n2020 KBO리그 로하스 MVP 및 소형준 신인왕 수상 (KBO 역대 6번째)\n황재균, 로하스, 강백호 2020 KBO 골든글러브 수상`}
        />
        <History
          year="202 "
          img={img}
          content={`이강철 감독 200승 달성 (KBO 역대 31번째)\n김재윤 구단 최초 통산 100세이브 달성 (KBO 역대 17번째)\n창단 최초 시즌 70승 선점\n1위 결정전 승리로 창단 첫 정규시즌 우승\n한국시리즈 4전 전승으로 창단 첫 통합 우승`}
        />
        <History
          year="2022"
          img={img}
          content={`박병호 9년 연속 20홈런 (KBO 최초)\n팀 10,000안타\n팀 1,000홈런\n이강철 감독 300승 (KBO 역대 20번째)\n3년 연속 포스트시즌 진출\n2022 KBO 시상식 <박병호 홈런상, 엄상백 승률상>\n2022 KBO 골든글러브 <박병호 1루수>`}
        />
        <History
          year="2023"
          img={img}
          content={`kt wiz 창단 10주년\n7.11 김재윤 kt 최초 150세이브 (역대 9번째)\n9.20 쿠에바스 KBO 8월 월간 MVP 수상\n10.7 강백호, 박영현 2022 항저우 아시안게임 금메달\n10.10 정규리그 2위 및 4년 연속 포스트시즌 진출 확정 (79승 62패)\n\n10.10 구단 한 시즌 역대 최다 관중 달성 (697,350명)\n- 종전 : 2017년 686,541명\n\n11.13 한국시리즈 준우승\n\n11.27 2023 KBO 시상식\n-쿠에바스 승률상\n-박영현 홀드상\n-박병호 수비상 1루수`}
        />
      </div>
    </div>
  );
};

export default ClubHistory;
