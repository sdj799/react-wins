import { HitterRecentType } from "@customTypes/hitterRecent";
import { HitterTotalType } from "@customTypes/hitterTotal";
import { PitcherRecentType } from "@customTypes/pitcherRecent";
import { PitcherTotalType } from "@customTypes/pitcherTotal";
import { FetchPlayerDetail, FetchPlayerType } from "@customTypes/player";
import { HitterType } from "@customTypes/playerHitter";
import { PitcherType } from "@customTypes/playerPitcher";

export type PlayerStoreType = {
  playerList: FetchPlayerType[] | null;
  player: FetchPlayerDetail | null;
  pitcherSeasonSummary: PitcherType | null;
  hitterSeasonSummary: HitterType | null;
  pitcherRecentRecordList: PitcherRecentType | null;
  hitterRecentRecordList: HitterRecentType | null;
  pitcherYearRecordList: PitcherTotalType | null;
  hitterYearRecordList: HitterTotalType | null;
  fetchCoachList: () => void;
  fetchPlayerList: (url: string) => void;
  fetchCoachDetail: (pcode: string) => void;
  fetchPlayerDetail: (url: string, pcode: string) => void;
  setPlayerList: (data) => void;
  setPlayer: (data) => void;
  setPitcherDetail: (data) => void;
  setHitterDetail: (data) => void;
};
