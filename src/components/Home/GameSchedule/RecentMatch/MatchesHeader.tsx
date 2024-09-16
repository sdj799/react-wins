import { MatchesType } from "@customTypes/recentMatch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import ControllBtn from "./ControllBtn";
import MatchesInfo from "./MatchesInfo";

interface MatchedHeaderProps {
  data: MatchesType[];
  currentIndex: number;
  prevBtnHandler: () => void;
  nextBtnHandler: () => void;
}

const MatchesHeaderStyle = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #eceef2;

  & > strong {
    width: 100%;
  }
`;

const MatchesHeader = ({ data, currentIndex, prevBtnHandler, nextBtnHandler }: MatchedHeaderProps) => {
  return (
    <MatchesHeaderStyle>
      <ControllBtn type="button" icon={<IoIosArrowBack />} onClickHandler={prevBtnHandler} />
      {data.map(
        (match, index) =>
          index === currentIndex && (
            <MatchesInfo
              key={index}
              gyear={match.gyear}
              gmonth={match.gmonth}
              gday={match.gday}
              stadium={match.stadium}
              gtime={match.gtime}
            />
          )
      )}
      <ControllBtn type="button" icon={<IoIosArrowForward />} onClickHandler={nextBtnHandler} />
    </MatchesHeaderStyle>
  );
};
export default MatchesHeader;
