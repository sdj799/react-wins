import { PitcherType } from "@customTypes/playerPitcher";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import styled from "styled-components";

const TableBtd = styled.table`
  margin-top: 15px;
  width: 1100px;
`;

const TableHeader = styled.th`
  background-color: #f6f6f6;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #cfcfcf;
`;
const TableCell = styled.td`
  font-size: 12px;
  line-height: 16px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #cfcfcf;
`;

const columnHelper = createColumnHelper<PitcherType>();

const pitResponse = {
  babip: "0",
  bb: 52,
  bf: 674,
  bk: 1,
  bs: 0,
  er: 69,
  era: "3.88",
  err: 4,
  fip: "0",
  fo: 183,
  gamenum: 28,
  go: 145,
  gyear: "2024",
  havg: "0.025",
  hit: 139,
  hold: 0,
  hp: 7,
  hr: 15,
  ib: 4,
  inn2: 480,
  innDisplay: "160",
  kbb: "2.750",
  kk: 143,
  l: 12,
  oavg: "0.231",
  pcode: "69032",
  playerName: "쿠에바스",
  qs: 18,
  qsPlus: 7,
  r: 76,
  ravg: "0.000",
  sf: 8,
  sh: 5,
  sho: 0,
  start: 28,
  sv: 0,
  svo: 0,
  tugucount: 2629,
  turfSave: 0,
  w: 6,
  wCg: 0,
  war: "0",
  whip: "1.19",
  winShares: "0",
  wl: "6-12",
  wp: 9,
  wra: "0.333",
};

const pitcherFeilds: Array<
  "sf" | "sh" | "bb" | "ib" | "hp" | "kk" | "wp" | "bk" | "r" | "er" | "bs" | "whip" | "oavg" | "qs" | "kbb"
> = ["sf", "sh", "bb", "ib", "hp", "kk", "wp", "bk", "r", "er", "bs", "whip", "oavg", "qs", "kbb"];

const pitcherHeaders = [
  "희비",
  "희타",
  "볼넷",
  "고의4구",
  "사구",
  "탈삼진",
  "폭투",
  "보크",
  "실점",
  "자책점",
  "블론 세이브",
  "WHIP",
  "피안타율",
  "QS",
  "K/BB",
];

const PitcherTable2 = () => {
  const [data, _setData] = useState(() => [pitResponse]);

  const columns = pitcherFeilds.map((field, index) =>
    columnHelper.accessor(field, {
      header: pitcherHeaders[index],
      cell: (info) => info.renderValue && info.renderValue(),
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

export default PitcherTable2;
