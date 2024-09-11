import { PitcherRecentType } from "@customTypes/pitcherRecent";
import { TableBtd, TableCell, TableHeader } from "@styles/PlayerTable.style";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper<PitcherRecentType>();

const pitResponse = [
  {
    bb: 1,
    displayDate: "09.07",
    er: 3,
    hit: 4,
    hp: 2,
    hr: 1,
    inn2: 9,
    innDisplay: "3",
    kk: 2,
    matchTeamCode: "OB",
    matchTeamName: "두산",
    oavg: "0.333",
    pa: 16,
    r: 4,
    sv: 0,
    wl: "0-1",
    wls: "L",
  },
  {
    bb: 1,
    displayDate: "08.31",
    er: 1,
    hit: 3,
    hp: 0,
    hr: 1,
    inn2: 18,
    innDisplay: "6",
    kk: 9,
    matchTeamCode: "HH",
    matchTeamName: "한화",
    oavg: "0.143",
    pa: 22,
    r: 1,
    sv: 0,
    wl: "1-0",
    wls: "W",
  },
  {
    bb: 0,
    displayDate: "08.25",
    er: 3,
    hit: 8,
    hp: 0,
    hr: 1,
    inn2: 20,
    innDisplay: "6 2/3",
    kk: 4,
    matchTeamCode: "SK",
    matchTeamName: "SSG",
    oavg: "0.286",
    pa: 29,
    r: 4,
    sv: 0,
    wl: "0-1",
    wls: "L",
  },
  {
    bb: 1,
    displayDate: "08.20",
    er: 0,
    hit: 3,
    hp: 1,
    hr: 0,
    inn2: 21,
    innDisplay: "7",
    kk: 7,
    matchTeamCode: "WO",
    matchTeamName: "키움",
    oavg: "0.120",
    pa: 27,
    r: 1,
    sv: 0,
    wl: "0-0",
    wls: " ",
  },
  {
    bb: 3,
    displayDate: "08.14",
    er: 1,
    hit: 4,
    hp: 0,
    hr: 0,
    inn2: 18,
    innDisplay: "6",
    kk: 9,
    matchTeamCode: "SS",
    matchTeamName: "삼성",
    oavg: "0.182",
    pa: 25,
    r: 1,
    sv: 0,
    wl: "0-0",
    wls: " ",
  },
];

const pitcherFields: Array<
  "displayDate" | "matchTeamName" | "wls" | "era" | "pa" | "innDisplay" | "hit" | "hr" | "bb" | "kk" | "er"
> = ["displayDate", "matchTeamName", "wls", "era", "pa", "innDisplay", "hit", "hr", "bb", "kk", "er"];

const pitcherHeaders = [
  "일자",
  "상대",
  "결과",
  "평균자책점",
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

const PitcherRecent = () => {
  // ERA 계산 및 추가
  const updatedPitResponse = pitResponse.map((game) => {
    // ERA 계산: (자책점 / 투구 이닝) * 9
    const era = game.inn2 > 0 ? (game.er / game.inn2) * 27 : 0;

    // 'era' 필드를 객체에 추가하여 반환
    return {
      ...game,
      era: era.toFixed(2),
    };
  });
  const [data, _setData] = useState(() => [...updatedPitResponse]);

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
export default PitcherRecent;
