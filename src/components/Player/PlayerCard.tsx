import styled from "styled-components";

const PlayerLi = styled.li`
  display: flex;
  float: left;
  width: 23.273%;
  max-width: 23.273%;
  margin-right: 1.72%;
  list-style: none;
`;

const CardArti = styled.article`
  display: block;
  border-bottom: none;
  padding: 13px 0;
  width: 100%;
`;

const CardDiv = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 101.56%;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
`;

const CardImg = styled.img`
  ertical-align: baseline;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

const CardDetail = styled.p`
  position: absolute;
  top: 3%;
  right: 3%;
  color: #222;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  text-align: right;
`;

const PlayerCard = ({ playerName, playerNum, imgSrc, href }: TPlayer) => {
  return (
    <>
      <PlayerLi>
        <CardArti>
          <a href={href}>
            <CardDiv>
              <CardImg src={imgSrc} alt="" />
              <CardDetail>
                <span style={{ color: "red", fontSize: "16px" }}>{`No.${playerNum}`}</span>
                <br />
                <span>{playerName}</span>
              </CardDetail>
            </CardDiv>
          </a>
        </CardArti>
      </PlayerLi>
    </>
  );
};
export default PlayerCard;
