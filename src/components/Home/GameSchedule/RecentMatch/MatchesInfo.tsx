import styled from "styled-components";

interface MatchesInfoProps {
  gyear: string;
  gmonth: number;
  gday: number;
  stadium: string;
  gtime: string;
}

const MatchesInfoStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > strong {
    font-size: 20px;
    color: #35383e;
    font-weight: 700;
  }

  & > span {
    font-size: 14px;
    color: #717781;
  }
`;

const MatchesInfo = ({ gyear, gmonth, gday, stadium, gtime }: MatchesInfoProps) => {
  return (
    <MatchesInfoStyle>
      <strong>{`${gyear}.${gmonth.toString()}.${gday.toString()}`}</strong>
      <span>{`${stadium} ${gtime}`}</span>
    </MatchesInfoStyle>
  );
};
export default MatchesInfo;
