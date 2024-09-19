import styled from "styled-components";

type CheerInfoProps = {
  position: string;
  kName: string;
  eName: string;
  profile: {
    nickname: string;
    heightBlood: string;
    hobby: string;
    favoritePlayer: string;
    motto: string;
  };
  imageUrl: string;
};

// styled.div를 사용하여 imageUrl을 스타일 속성으로 설정
const CheerInfoDiv = styled.div<{ $imageUrl: string }>`
  flex-shrink: 0;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  width: 988px;
  height: 100%;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
`;

const CheerInfoContainer = styled.div`
  position: absolute;
  top: 17%;
  left: 55%;
`;

const PositionSpan = styled.span`
  color: #ec0a0b;
  font-size: 18px;
  display: block;
  margin-bottom: 12px;
`;

const KNameSpan = styled.span`
  font-size: 40px;
  font-weight: 600;
  display: block;
  margin-bottom: 12px;
  color: #222;
`;

const ENameSpan = styled.span`
  font-size: 16px;
  display: block;
  margin-bottom: 12px;
  color: #222;
`;

const InfoDl = styled.dl`
  margin-top: 20px;
  padding: 0 5px;
  margin: 0;
`;

const InfoUl = styled.ul`
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
`;

const ProfileDT = styled.dt`
  width: 100px;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
`;

const ProfileDD = styled.dd`
  display: inline-block;
  vertical-align: middle;
  color: #222;
  font-size: 14px;
  line-height: 24px;
`;

const CheerInfo = ({ position, kName, eName, profile, imageUrl }: CheerInfoProps) => {
  return (
    <CheerInfoDiv $imageUrl={imageUrl}>
      <CheerInfoContainer>
        <PositionSpan>{position}</PositionSpan>
        <KNameSpan>{kName}</KNameSpan>
        <ENameSpan>{eName}</ENameSpan>
        <InfoUl>
          <li>
            <InfoDl>
              <ProfileDT>별명</ProfileDT>
              <ProfileDD>{profile.nickname}</ProfileDD>
            </InfoDl>
          </li>
          <li>
            <InfoDl>
              <ProfileDT>키/혈액형</ProfileDT>
              <ProfileDD>{profile.heightBlood}</ProfileDD>
            </InfoDl>
          </li>
          <li>
            <InfoDl>
              <ProfileDT>취미</ProfileDT>
              <ProfileDD>{profile.hobby}</ProfileDD>
            </InfoDl>
          </li>
          <li>
            <InfoDl>
              <ProfileDT>좋아하는 선수</ProfileDT>
              <ProfileDD>{profile.favoritePlayer}</ProfileDD>
            </InfoDl>
          </li>
          <li>
            <InfoDl>
              <ProfileDT>좌우명</ProfileDT>
              <ProfileDD>{profile.motto}</ProfileDD>
            </InfoDl>
          </li>
        </InfoUl>
      </CheerInfoContainer>
    </CheerInfoDiv>
  );
};

export default CheerInfo;
