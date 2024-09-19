import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border: 1px solid #dcdcdc;
  border-spacing: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  background-color: #fff;
  color: #222;
`;

const StyledRow = styled.tr`
  border-bottom: 1px solid #cfcfcf;

  & > th {
    border-top: 2px solid #000;
    padding: 8px 0;
    background-color: #f6f6f6;
    color: #222;
    border-right: 1px solid #cfcfcf;
    font-weight: 300;
  }

  & > th.wide {
    width: 14%;
  }

  & > td {
    padding: 8px 0;
    border-right: 1px solid #cfcfcf;
    font-size: 12px;
    color: #5b5a5a;
  }

  &.home > td {
    color: #ec0a0b;
    background-color: #fff5f7;
  }
`;

const Table = () => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <th>팀</th>
            <th>이름</th>
            <th className="wide">평균자책점</th>
            <th>경기</th>
            <th>승</th>
            <th>패</th>
            <th>세</th>
            <th>홀</th>
            <th>승률</th>
            <th>이닝</th>
            <th>피안타</th>
            <th>피홈런</th>
            <th>볼넷</th>
            <th>사구</th>
            <th>삼진</th>
            <th>실점</th>
            <th>자책점</th>
          </StyledRow>
        </thead>
        <tbody>
          <StyledRow className="home">
            <td>KT</td>
            <td>고영표</td>
            <td>5.26</td>
            <td>16</td>
            <td>5</td>
            <td>7</td>
            <td>0</td>
            <td>0</td>
            <td>0.417</td>
            <td>89</td>
            <td>134</td>
            <td>4</td>
            <td>12</td>
            <td>11</td>
            <td>71</td>
            <td>58</td>
            <td>52</td>
          </StyledRow>
          <StyledRow>
            <td>두산</td>
            <td>곽빈</td>
            <td>4.14</td>
            <td>28</td>
            <td>13</td>
            <td>9</td>
            <td>0</td>
            <td>0</td>
            <td>0.591</td>
            <td>156 1/3</td>
            <td>129</td>
            <td>10</td>
            <td>72</td>
            <td>5</td>
            <td>145</td>
            <td>76</td>
            <td>72</td>
          </StyledRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;
