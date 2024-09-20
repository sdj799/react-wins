import { TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 1px solid #cfcfcf;
  border-top: 2px solid #ec0a0b;
`;
const StyledTr = styled.tr`
  & > th,
  td {
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    text-align: center;
    vertical-align: middle;
    border-right: 1px solid #cfcfcf;
  }
  & > th {
    padding: 8px 0;
    background-color: #f6f6f6;
    font-size: 14px;
    color: #222;
  }
  & > td {
    font-size: 12px;
    border-top: 1px solid #cfcfcf;
    color: #5b5a5a;
    background-color: #fff;
    padding: 8px 0;
  }
`;
type TableProps<T extends object> = {
  resData: T[];
  headers: string[];
};

const Table = <T extends object>({ resData, headers }: TableProps<T>) => {
  const [data, _setData] = useState(() => [...resData]);

  // 컬럼 헬퍼 생성
  const columnHelper = createColumnHelper<T>();

  // keyof T를 사용하여 T 타입의 모든 키를 추출
  const personKeys = Object.keys(data[0]) as Array<keyof T>;

  // 반복문을 사용해 columns 배열 생성
  const columns = personKeys.map((key, index) =>
    columnHelper.accessor((row: T) => row[key], {
      id: key as string,
      cell: (info) => info.renderValue && info.renderValue(),
      header: headers[index], // headerList의 각 요소와 매칭
    })
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <StyledTable>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <StyledTr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHeader>
              ))}
            </StyledTr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <StyledTr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};
export default Table;
