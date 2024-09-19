import { MatchesType } from "@customTypes/recentMatch";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

interface MatchItemProps {
  data: MatchesType[];
  currentIndex: number;
}

const RecentMatchItemStyle = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;

  & > div:first-child,
  & > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
      width: 100%;
      max-width: 100px;
    }

    & > span {
      font-size: 18px;
      color: #35383e;
      font-weight: 700;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;

      & > strong {
        font-size: 64px;
        font-weight: 700;
        color: #000;
      }

      & > span {
        font-size: 50px;
        color: #000;
        opacity: 0.2;
        font-weight: 700;
      }
    }

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: rgba(35, 31, 32, 0.5);
      padding: 5px 15px;
      border-radius: 5px;
      align-self: center;

      & > span {
        color: #fff;
        font-size: 13px;
        font-weight: 400;
      }

      & > svg {
        font-size: 16px;
        color: #fff;
      }
    }
  }
`;

const RecentMatchItem = ({ data, currentIndex }: MatchItemProps) => {
  return (
    <ul>
      {data.map(
        (match, index) =>
          index === currentIndex && (
            <RecentMatchItemStyle key={index}>
              <div>
                <img src={match.visitLogo} alt="visitLogo" />
                <span>{match.visitKey}</span>
              </div>
              <div>
                <div>
                  <strong>{match.visitScore ? match.visitScore : "0"}</strong>
                  <span>:</span>
                  <strong>{match.homeScore ? match.homeScore : "0"}</strong>
                </div>
                <button type="button">
                  <span>경기정보</span>
                  <IoIosArrowForward />
                </button>
              </div>
              <div>
                <img src={match.homeLogo} alt="homeLogo" />
                <span>{match.homeKey}</span>
              </div>
            </RecentMatchItemStyle>
          )
      )}
    </ul>
  );
};
export default RecentMatchItem;
