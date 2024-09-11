import { HitterTotalType } from "@customTypes/hitterTotal";
import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper<HitterTotalType>();

const hitResponse = [
  {
    ab: 449,
    bb: 31,
    bra: "0.315",
    cs: 6,
    gamenum: 125,
    gd: 12,
    gyear: "2024",
    h2: 22,
    h3: 0,
    hit: 120,
    hp: 1,
    hr: 12,
    hra: "0.267",
    kk: 87,
    rbi: 56,
    run: 57,
    sb: 4,
    slg: "0.396",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 407,
    bb: 45,
    bra: "0.366",
    cs: 3,
    gamenum: 109,
    gd: 15,
    gyear: "2023",
    h2: 26,
    h3: 2,
    hit: 120,
    hp: 1,
    hr: 6,
    hra: "0.295",
    kk: 64,
    rbi: 49,
    run: 62,
    sb: 3,
    slg: "0.413",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 519,
    bb: 53,
    bra: "0.335",
    cs: 3,
    gamenum: 141,
    gd: 17,
    gyear: "2022",
    h2: 25,
    h3: 3,
    hit: 136,
    hp: 5,
    hr: 10,
    hra: "0.262",
    kk: 99,
    rbi: 64,
    run: 59,
    sb: 6,
    slg: "0.38",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 453,
    bb: 46,
    bra: "0.358",
    cs: 4,
    gamenum: 117,
    gd: 11,
    gyear: "2021",
    h2: 16,
    h3: 2,
    hit: 132,
    hp: 3,
    hr: 10,
    hra: "0.291",
    kk: 92,
    rbi: 56,
    run: 74,
    sb: 11,
    slg: "0.402",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 541,
    bb: 47,
    bra: "0.37",
    cs: 6,
    gamenum: 134,
    gd: 12,
    gyear: "2020",
    h2: 35,
    h3: 5,
    hit: 169,
    hp: 5,
    hr: 21,
    hra: "0.312",
    kk: 98,
    rbi: 97,
    run: 108,
    sb: 11,
    slg: "0.512",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 448,
    bb: 52,
    bra: "0.357",
    cs: 7,
    gamenum: 124,
    gd: 10,
    gyear: "2019",
    h2: 16,
    h3: 3,
    hit: 127,
    hp: 2,
    hr: 20,
    hra: "0.283",
    kk: 71,
    rbi: 67,
    run: 78,
    sb: 10,
    slg: "0.467",
    teamCode: "KT",
    teamName: "KT",
  },
  {
    ab: 530,
    bb: 49,
    bra: "0.358",
    cs: 7,
    gamenum: 142,
    gd: 5,
    gyear: "2018",
    h2: 41,
    h3: 3,
    hit: 157,
    hp: 4,
    hr: 25,
    hra: "0.296",
    kk: 120,
    rbi: 88,
    run: 76,
    sb: 14,
    slg: "0.526",
    teamCode: "KT",
    teamName: "KT",
  },
];

const hitterFields: Array<
  | "gyear"
  | "teamName"
  | "hra"
  | "gamenum"
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
  "gyear",
  "teamName",
  "hra",
  "gamenum",
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
  "연도",
  "팀",
  "타율",
  "경기",
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
  "장타율",
  "출루율",
];

const HitterTotal = () => {
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
export default HitterTotal;
