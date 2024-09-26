import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

const TableBtd = styled.table`
  margin: 15px auto 0;
  width: 69.5%;
  max-width: 720px;
  border: 1px solid #dcdcdc;
`;
const TableHeader = styled.th`
  background-color: #d23933;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  padding: 6px 8px;
  box-sizing: border-box;
  border-right: 1px solid #dcdcdc;
`;
const TableCell = styled.td`
  background-color: #eaeaeb;
  font-weight: 500;
  border-top: 1px solid #dcdcdc;
  font-size: 14px;
  color: #222;
  padding: 6px 8px;
  box-sizing: border-box;
  border-right: 1px solid #dcdcdc;
`;

type TableProps<T extends object> = {
  resData: T[];
  headers: string[];
};

const BoxTable = <T extends object>({ resData, headers }: TableProps<T>) => {
  const [data, _setData] = useState(() => [...resData]);

  const columnHelper = createColumnHelper<T>();

  const personKeys = Object.keys(data[0]) as Array<keyof T>;

  const columns = personKeys.map((key, index) =>
    columnHelper.accessor((row: T) => row[key], {
      id: key as string,
      cell: (info) => info.renderValue && info.renderValue(),
      header: headers[index],
    })
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <TableBtd>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHeader key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </TableBtd>
  );
};
export default BoxTable;
