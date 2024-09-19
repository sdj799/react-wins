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
  border-bottom: 1px solid #dcdcdc;

  & > th {
    padding: 6px 8px;
    background-color: #ed323d;
    color: #fff;
    border-right: 1px solid #dcdcdc;
  }

  & > td {
    padding: 6px 8px;
    border-right: 1px solid #dcdcdc;
  }

  & > td.bold {
    font-weight: 400;
  }

  & > th.rowTitle,
  & > td.rowTitle {
    width: 16%;
  }
`;

const Table = () => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <StyledRow>
            <th>승</th>
            <th>패</th>
            <th>무</th>
            <th>승률</th>
            <th className="bold rowTitle">VS</th>
            <th>승</th>
            <th>패</th>
            <th>무</th>
            <th>승률</th>
          </StyledRow>
        </thead>
        <tbody>
          <StyledRow>
            <td>67</td>
            <td>67</td>
            <td>2</td>
            <td>0.500</td>
            <td className="bold rowTitle">시즌 성적</td>
            <td>67</td>
            <td>66</td>
            <td>2</td>
            <td>0.504</td>
          </StyledRow>
          <StyledRow>
            <td>4</td>
            <td>12</td>
            <td>0</td>
            <td>0.25</td>
            <td className="bold rowTitle">시즌 상대 전적</td>
            <td>12</td>
            <td>4</td>
            <td>0</td>
            <td>0.75</td>
          </StyledRow>
          <StyledRow>
            <td colSpan={4}>5위</td>
            <td className="bold rowTitle">시즌 순위</td>
            <td colSpan={4}>4위</td>
          </StyledRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};
export default Table;
