import { formatCareer } from "@utils/career";
import { stringToDate } from "@utils/date";
import { FaChevronRight } from "react-icons/fa6";
import { usePlayerStore } from "store/actions/usePlayerStore";
import styled from "styled-components";

const InfoArti = styled.article`
  width: 100%;
  position: relative;
`;

const InfoImg = styled.img`
  width: 100%;
`;

const InfoDt = styled.dt`
  position: absolute;
  top: 30%;
  left: 35%;
  color: #fff;
  font-size: 54px;
  font-weight: 700;
`;

const InfoNumber = styled.span`
  color: #c00000;
  font-size: 44px;
  margin-bottom: 12px;
  display: block;
`;

const InfoEng = styled.span`
  font-size: 18px;
  margin-top: 12px;
  display: block;
`;

const InfoListWrapper = styled.dd`
  position: absolute;
  top: 30%;
  left: auto;
  right: 0;
  width: 440px;
  box-sizing: border-box;
  padding-right: 40px;
  color: #fff;
  font-size: 16px;
  font-weight: 100;
  line-height: 26.5px;
`;

const InfoListDt = styled.dt`
  display: inline-block;
  width: 70px;
  vertical-align: top;
`;

const InfoListDd = styled.dd`
  display: inline-block;
  width: 325px;
`;

const PictureButton = styled.a`
  background-color: red;
  display: inline-block;
  margin-top: 15px;
  width: 146px;
  text-decoration: none;
  text-align: center;
  border-radius: 25px;
  height: 32px;
  color: #fff;
`;

const PlayerRecord = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 2%;
`;

const PlayerRecordDt = styled.dt`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  line-height: 53px;
`;

const PlayerRecordDd = styled.dd`
  display: inline-block;
  color: #fff;
  font-size: 20px;
  font-weight: 100;
  line-height: 53px;
`;

const PlayerInfo = ({ isPitcher, isCatcher }: { isPitcher?: boolean; isCatcher?: boolean }) => {
  const player = usePlayerStore((state) => state.player);
  const pitcherSeasonSummary = usePlayerStore((state) => state.pitcherSeasonSummary);
  const hitterSeasonSummary = usePlayerStore((state) => state.hitterSeasonSummary);
  return (
    <>
      <InfoArti>
        <div>
          <InfoImg src={player?.playerPrvwImg2} />
          <dl>
            <InfoDt>
              <InfoNumber>No. {player?.backnum}</InfoNumber>
              {player?.playerName}
              <InfoEng>{player?.engName}</InfoEng>
            </InfoDt>
            <InfoListWrapper>
              <ul>
                <li>
                  <dl>
                    <InfoListDt>포지션</InfoListDt>
                    <InfoListDd>{player?.position}</InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>생년월일</InfoListDt>
                    <InfoListDd>{player && stringToDate(player.birth)}</InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>체격</InfoListDt>
                    <InfoListDd>
                      {player?.height} cm, {player?.weight} kg
                    </InfoListDd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <InfoListDt>출신교</InfoListDt>
                    <InfoListDd>
                      <span>{formatCareer(player?.career)}</span>
                    </InfoListDd>
                  </dl>
                </li>
              </ul>
              <PictureButton href={`/media/photos/1?searchWord=${player?.playerName}&search.sort=400`}>
                {(isCatcher || isPitcher) && "선수 "}사진 보기 <FaChevronRight fontSize={"0.8em"} />
              </PictureButton>
            </InfoListWrapper>
          </dl>
          {isPitcher && (
            <PlayerRecord>
              <dl>
                <PlayerRecordDt>
                  {pitcherSeasonSummary ? pitcherSeasonSummary.gyear : "-"} 정규리그 성적 :{" "}
                </PlayerRecordDt>
                <PlayerRecordDd>
                  평균자책점 {pitcherSeasonSummary ? pitcherSeasonSummary.era : "-"} /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.w : "-"} 승 /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.l : "-"} 패 /{" "}
                  {pitcherSeasonSummary ? pitcherSeasonSummary.sv : "-"} 세이브
                </PlayerRecordDd>
              </dl>
            </PlayerRecord>
          )}
          {isCatcher && (
            <PlayerRecord>
              <dl>
                <PlayerRecordDt>
                  {hitterSeasonSummary ? hitterSeasonSummary.gyear : "-"} 정규리그 성적 :{" "}
                </PlayerRecordDt>
                <PlayerRecordDd>
                  타율 {hitterSeasonSummary ? hitterSeasonSummary.hra : "-"} / 안타{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.hit : "-"} / 타점{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.rbi : "-"} / 홈런{" "}
                  {hitterSeasonSummary ? hitterSeasonSummary.hr : "-"}
                </PlayerRecordDd>
              </dl>
            </PlayerRecord>
          )}
        </div>
      </InfoArti>
    </>
  );
};
export default PlayerInfo;
