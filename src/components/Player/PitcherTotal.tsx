import { PitcherTotalType } from "@customTypes/pitcherTotal";
import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper<PitcherTotalType>();

const pitResponse = [
  {
    bb: 52,
    bf: 674,
    er: 69,
    era: "3.88",
    gamenum: 28,
    gyear: "2024",
    hit: 139,
    hold: 0,
    hp: 7,
    hr: 15,
    inn2: 480,
    innDisplay: "160",
    kk: 143,
    l: 12,
    r: 76,
    sho: 0,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 6,
    wCg: 0,
    wra: "0.333",
  },
  {
    bb: 24,
    bf: 460,
    er: 33,
    era: "2.60",
    gamenum: 18,
    gyear: "2023",
    hit: 95,
    hold: 0,
    hp: 2,
    hr: 4,
    inn2: 343,
    innDisplay: "114 1/3",
    kk: 100,
    l: 0,
    r: 33,
    sho: 0,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 12,
    wCg: 0,
    wra: "1.000",
  },
  {
    bb: 5,
    bf: 40,
    er: 3,
    era: "2.45",
    gamenum: 2,
    gyear: "2022",
    hit: 2,
    hold: 0,
    hp: 1,
    hr: 1,
    inn2: 33,
    innDisplay: "11",
    kk: 8,
    l: 0,
    r: 3,
    sho: 0,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 1,
    wCg: 0,
    wra: "1.000",
  },
  {
    bb: 51,
    bf: 580,
    er: 61,
    era: "4.12",
    gamenum: 23,
    gyear: "2021",
    hit: 131,
    hold: 0,
    hp: 3,
    hr: 11,
    inn2: 400,
    innDisplay: "133 1/3",
    kk: 137,
    l: 5,
    r: 68,
    sho: 1,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 9,
    wCg: 1,
    wra: "0.643",
  },
  {
    bb: 46,
    bf: 668,
    er: 72,
    era: "4.10",
    gamenum: 27,
    gyear: "2020",
    hit: 152,
    hold: 0,
    hp: 9,
    hr: 16,
    inn2: 474,
    innDisplay: "158",
    kk: 110,
    l: 8,
    r: 80,
    sho: 0,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 10,
    wCg: 0,
    wra: "0.556",
  },
  {
    bb: 63,
    bf: 760,
    er: 74,
    era: "3.62",
    gamenum: 30,
    gyear: "2019",
    hit: 153,
    hold: 0,
    hp: 12,
    hr: 18,
    inn2: 552,
    innDisplay: "184",
    kk: 135,
    l: 10,
    r: 80,
    sho: 0,
    sv: 0,
    teamCode: "KT",
    teamName: "KT",
    w: 13,
    wCg: 0,
    wra: "0.565",
  },
];

const pitcherFields: Array<
  | "gyear"
  | "teamName"
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
  | "innDisplay"
  | "hit"
  | "hr"
  | "bb"
  | "kk"
  | "er"
> = [
  "gyear",
  "teamName",
  "era",
  "gamenum",
  "wCg",
  "sho",
  "w",
  "l",
  "sv",
  "hold",
  "wra",
  "bf",
  "innDisplay",
  "hit",
  "hr",
  "bb",
  "kk",
  "er",
];

const pitcherHeaders = [
  "연도",
  "팀",
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
  "이닝",
  "피안타",
  "피홈런",
  "볼넷",
  "사구",
  "탈삼진",
  "실점",
  "자책점",
];

const PitcherTotal = () => {
  const [data, _setData] = useState(() => [...pitResponse]);

  const columns = pitcherFields.map((field, index) =>
    columnHelper.accessor(field, {
      header: pitcherHeaders[index],
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
export default PitcherTotal;
