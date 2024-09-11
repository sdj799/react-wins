import { HitterRecentType } from "@customTypes/hitterRecent";
import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper<HitterRecentType>();

const hitResponse = [
  {
    ab: 1,
    bb: 0,
    bra: "0.000",
    cs: 0,
    displayDate: "09.04",
    gd: 0,
    h2: 0,
    h3: 0,
    hit: 0,
    hp: 0,
    hr: 0,
    hra: "0.000",
    kk: 0,
    matchTeamCode: "LT",
    matchTeamName: "롯데",
    rbi: 0,
    run: 0,
    sb: 0,
  },
  {
    ab: 3,
    bb: 1,
    bra: "0.500",
    cs: 0,
    displayDate: "08.31",
    gd: 1,
    h2: 0,
    h3: 0,
    hit: 1,
    hp: 0,
    hr: 1,
    hra: "0.333",
    kk: 0,
    matchTeamCode: "HH",
    matchTeamName: "한화",
    rbi: 1,
    run: 2,
    sb: 0,
  },
  {
    ab: 5,
    bb: 0,
    bra: "0.200",
    cs: 0,
    displayDate: "08.30",
    gd: 0,
    h2: 0,
    h3: 0,
    hit: 1,
    hp: 0,
    hr: 0,
    hra: "0.200",
    kk: 1,
    matchTeamCode: "LG",
    matchTeamName: "LG",
    rbi: 0,
    run: 0,
    sb: 0,
  },
  {
    ab: 5,
    bb: 0,
    bra: "0.200",
    cs: 0,
    displayDate: "08.29",
    gd: 0,
    h2: 0,
    h3: 0,
    hit: 1,
    hp: 0,
    hr: 0,
    hra: "0.200",
    kk: 2,
    matchTeamCode: "LG",
    matchTeamName: "LG",
    rbi: 0,
    run: 0,
    sb: 0,
  },
  {
    ab: 4,
    bb: 1,
    bra: "0.400",
    cs: 0,
    displayDate: "08.28",
    gd: 0,
    h2: 0,
    h3: 0,
    hit: 1,
    hp: 0,
    hr: 1,
    hra: "0.250",
    kk: 2,
    matchTeamCode: "LG",
    matchTeamName: "LG",
    rbi: 2,
    run: 2,
    sb: 0,
  },
];

const hitterFields: Array<
  | "displayDate"
  | "matchTeamName"
  | "hra"
  | "ab"
  | "run"
  | "hit"
  | "h2"
  | "h3"
  | "hr"
  | "rbi"
  | "sb"
  | "cs"
  | "hp"
  | "bb"
  | "kk"
  | "gd"
> = [
  "displayDate",
  "matchTeamName",
  "hra",
  "ab",
  "run",
  "hit",
  "h2",
  "h3",
  "hr",
  "rbi",
  "sb",
  "cs",
  "bb",
  "hp",
  "kk",
  "gd",
];

const hitterHeaders = [
  "일자",
  "상대",
  "타율",
  "타수",
  "득점",
  "안타",
  "2루타",
  "3루타",
  "홈런",
  "타점",
  "도루",
  "도실",
  "볼넷",
  "사구",
  "삼진",
  "병살",
];

const HitterRecent = () => {
  const [data, _setData] = useState(() => [...hitResponse]);

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
export default HitterRecent;
