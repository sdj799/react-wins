import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

type TableProps<T extends object> = {
  resData: T[];
  headers: string[];
};

const PlayerTable = <T extends object>({ resData, headers }: TableProps<T>) => {
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
    </div>
  );
};
export default PlayerTable;
