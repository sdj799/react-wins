import { TCheer } from "@customTypes/cheer";
import styled from "styled-components";
import CheerInfo from "./CheerInfo";

const SlideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 630px;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  height: 74.2%;
  width: 100%;
  max-width: 990px;
  margin-left: auto;
  margin-right: auto;
`;

const Cheer = ({
  leaderPosition,
  leaderName,
  leaderEngName,
  leaderNickName,
  leaderHeight,
  leaderBloodGroups,
  leaderHobby,
  leaderLikePlayer,
  leaderMotto,
  titleImgPath,
}: TCheer) => {
  return (
    <SlideWrapper>
      <ProfileContainer>
        <CheerInfo
          leaderName={leaderName}
          leaderPosition={leaderPosition}
          leaderEngName={leaderEngName}
          leaderNickName={leaderNickName}
          leaderHeight={leaderHeight}
          leaderBloodGroups={leaderBloodGroups}
          leaderHobby={leaderHobby}
          leaderLikePlayer={leaderLikePlayer}
          leaderMotto={leaderMotto}
          titleImgPath={titleImgPath}
        />
      </ProfileContainer>
    </SlideWrapper>
  );
};

export default Cheer;
