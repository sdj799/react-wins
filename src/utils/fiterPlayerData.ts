import { FilterHitRecentType, HitterRecentType } from "@customTypes/hitterRecent";
import { FilterHitTotalType, HitterTotalType } from "@customTypes/hitterTotal";
import { FilterPitRecentType, PitcherRecentType } from "@customTypes/pitcherRecent";
import { FilterPitTotalType, PitcherTotalType } from "@customTypes/pitcherTotal";
import { FilterHitterType, FilterHitterType2, HitterType } from "@customTypes/playerHitter";
import { FilterPitcherType, FilterPitcherType2, PitcherType } from "@customTypes/playerPitcher";

export function filterPitcherData(data: PitcherType): FilterPitcherType {
  return {
    era: data.era,
    gamenum: data.gamenum,
    wCg: data.wCg,
    sho: data.sho,
    w: data.w,
    l: data.l,
    sv: data.sv,
    hold: data.hold,
    wra: data.wra,
    bf: data.bf,
    tugucount: data.tugucount,
    innDisplay: data.innDisplay,
    hit: data.hit,
    hr: data.hr,
  };
}

export function filterPitcherData2(data: PitcherType): FilterPitcherType2 {
  return {
    sf: data.sf,
    sh: data.sh,
    bb: data.bb,
    ib: data.ib,
    hp: data.hp,
    kk: data.kk,
    wp: data.wp,
    bk: data.bk,
    r: data.r,
    er: data.er,
    bs: data.bs,
    whip: data.whip,
    oavg: data.oavg,
    qs: data.qs,
    kbb: data.kbb,
  };
}

export function filterPitRecentData(data: PitcherRecentType): FilterPitRecentType {
  const era = data.inn2 > 0 ? (data.er / data.inn2) * 27 : 0;
  return {
    displayDate: data.displayDate,
    matchTeamName: data.matchTeamName,
    wls: data.wls,
    era: era.toFixed(2),
    pa: data.pa,
    innDisplay: data.innDisplay,
    hit: data.hit,
    hr: data.hr,
    bb: data.bb,
    kk: data.kk,
    er: data.er,
  };
}

export function filterPitTotalData(data: PitcherTotalType): FilterPitTotalType {
  return {
    gyear: data.gyear,
    teamName: data.teamName,
    era: data.era,
    gamenum: data.gamenum,
    wCg: data.wCg,
    sho: data.sho,
    w: data.w,
    l: data.l,
    sv: data.sv,
    hold: data.hold,
    wra: data.wra,
    bf: data.bf,
    innDisplay: data.innDisplay,
    hit: data.hit,
    hr: data.hr,
    bb: data.bb,
    kk: data.kk,
    er: data.er,
  };
}

export function filterHitterData(data: HitterType): FilterHitterType {
  return {
    hra: data.hra,
    gamenum: data.gamenum,
    pa: data.pa,
    ab: data.ab,
    run: data.run,
    hit: data.hit,
    h2: data.h2,
    h3: data.h3,
    hr: data.hr,
    rbi: data.rbi,
    sb: data.sb,
    cs: data.cs,
    sh: data.sh,
    sf: data.sf,
  };
}

export function filterHitterData2(data: HitterType): FilterHitterType2 {
  return {
    bb: data.bb,
    ib: data.ib,
    hp: data.hp,
    kk: data.kk,
    gd: data.gd,
    slg: data.slg,
    bra: data.bra,
    cs: data.cs,
    sba: data.sba,
    bbkk: data.bbkk,
    xbhrun: data.xbhrun,
    ops: data.ops,
    spHra: data.spHra,
  };
}

export function filterHitRecentData(data: HitterRecentType): FilterHitRecentType {
  return {
    displayDate: data.displayDate,
    matchTeamName: data.matchTeamName,
    hra: data.hra,
    ab: data.ab,
    run: data.run,
    hit: data.hit,
    h2: data.h2,
    h3: data.h3,
    hr: data.hr,
    rbi: data.rbi,
    sb: data.sb,
    cs: data.cs,
    bb: data.bb,
    hp: data.hp,
    kk: data.kk,
    gd: data.gd,
  };
}

export function filterHitTotalData(data: HitterTotalType): FilterHitTotalType {
  return {
    gyear: data.gyear,
    teamName: data.teamName,
    hra: data.hra,
    gamenum: data.gamenum,
    ab: data.ab,
    run: data.run,
    hit: data.hit,
    h2: data.h2,
    h3: data.h3,
    hr: data.hr,
    rbi: data.rbi,
    sb: data.sb,
    cs: data.cs,
    bb: data.bb,
    hp: data.hp,
    kk: data.kk,
    gd: data.gd,
  };
}
