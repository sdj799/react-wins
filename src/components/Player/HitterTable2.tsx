import { HitterType } from "@customTypes/playerHitter";
import { TableCell, TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

const TableBtd = styled.table`
  margin-top: 15px;
  width: 100%;
`;

const columnHelper = createColumnHelper<HitterType>();

const hitResponse = {
  ab: 522,
  babip: "0.364",
  bb: 76,
  bbkk: "0.74",
  bra: "0.419",
  cs: 1,
  finalHit: 12,
  gamenum: 131,
  gd: 10,
  gyear: "2024",
  h2: 38,
  h3: 1,
  hit: 173,
  hp: 6,
  hr: 30,
  hra: "0.331",
  ib: 8,
  kk: 103,
  ops: "1.000",
  opsPlus: "158.120",
  pa: 608,
  pcode: "67025",
  rbi: 104,
  run: 99,
  sb: 2,
  sbTryCn: 3,
  sba: "0.667",
  sf: 4,
  sh: 0,
  slg: "0.580",
  spHra: "0.325",
  war: "0",
  winShares: "0",
  woba: "0",
  wrHit: "12",
  wraa: "0",
  xbhrun: "69/173",
};

const hitterFields: Array<
  "bb" | "ib" | "hp" | "kk" | "gd" | "slg" | "bra" | "cs" | "sba" | "bbkk" | "xbhrun" | "ops" | "spHra"
> = ["bb", "ib", "hp", "kk", "gd", "slg", "bra", "cs", "sba", "bbkk", "xbhrun", "ops", "spHra"];

const hitterHeaders = [
  "볼넷",
  "고의4구",
  "사구",
  "삼진",
  "병살",
  "장타율",
  "출루율",
  "실책",
  "도루성공률",
  "BB/K",
  "장타/안타",
  "OPS",
  "득점권타율",
];

const HitterTable2 = () => {
  const [data, _setData] = useState(() => [hitResponse]);

  const columns = hitterFields.map((field, index) =>
    columnHelper.accessor(field, {
      header: hitterHeaders[index],
      footer: (info) => info.column.id,
    })
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-2">
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
      <div className="h-4" />
    </div>
  );
};

export default HitterTable2;
