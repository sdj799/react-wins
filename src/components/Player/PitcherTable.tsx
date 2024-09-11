import { PitcherType } from "@customTypes/playerPitcher";
import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

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
  | "era"
  | "gamenum"
  | "wCg"
  | "sho"
  | "w"
  | "l"
  | "sv"
  | "hold"
  | "wra"
  | "bf"
  | "tugucount"
  | "innDisplay"
  | "hit"
  | "hr"
> = ["era", "gamenum", "wCg", "sho", "w", "l", "sv", "hold", "wra", "bf", "tugucount", "innDisplay", "hit", "hr"];

const pitcherHeaders = [
  "평균자책점",
  "경기",
  "완투",
  "완봉",
  "승",
  "패",
  "세",
  "홀",
  "승률",
  "타자",
  "투구수",
  "이닝",
  "피안타",
  "피홈런",
];

const PitcherTable = () => {
  const [data, _setData] = useState(() => [pitResponse]);

  // const columns = [
  //   columnHelper.accessor("firstName", {
  //     cell: (info) => info.getValue(),
  //     header: headerList[0],
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor((row) => row.lastName, {
  //     id: "lastName",
  //     cell: (info) => <i>{info.getValue()}</i>,
  //     header: headerList[1],
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("age", {
  //     header: headerList[2],
  //     cell: (info) => info.renderValue(),
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("visits", {
  //     header: headerList[3],
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("status", {
  //     header: headerList[4],
  //     footer: (info) => info.column.id,
  //   }),
  //   columnHelper.accessor("progress", {
  //     header: headerList[5],
  //     footer: (info) => info.column.id,
  //   }),
  // ];

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

export default PitcherTable;
