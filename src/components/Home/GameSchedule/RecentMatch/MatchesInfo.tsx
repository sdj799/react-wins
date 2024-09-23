import styled from "styled-components";

interface MatchesInfoProps {
  date: string;
  stadium: string;
  time: string;
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

const MatchesInfo = ({ date, stadium, time }: MatchesInfoProps) => {
  return (
    <MatchesInfoStyle>
      <strong>{date}</strong>
      <span>{`${stadium} ${time}`}</span>
    </MatchesInfoStyle>
  );
};
export default MatchesInfo;
