import styled from "styled-components";

const DaysStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > span {
    display: block;
    width: calc(100% / 7);
    padding: 15px;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    color: #222;

    &:first-child {
      color: #ec0a0b;
    }
  }
`;

const Days = () => {
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <DaysStyle>
      {date.map((day) => (
        <span key={day}>{day}</span>
      ))}
    </DaysStyle>
  );
};
export default Days;
