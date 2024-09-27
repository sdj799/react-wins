import styled from "styled-components";

const ResultStyle = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  & > li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 3px;
    color: #fff;
    font-weight: 400;
  }

  & > li:first-child {
    background-color: #ec090b;
  }

  & > li:nth-child(2) {
    background-color: #343434;
  }

  & > li:last-child {
    background-color: #9d9d9d;
  }
`;

const Result = () => {
  return (
    <ResultStyle>
      <li>승</li>
      <li>패</li>
      <li>무</li>
    </ResultStyle>
  );
};
export default Result;
