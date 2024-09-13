import { FetchPlayerDetail, FetchPlayerType } from "@customTypes/player";
import { HitterType } from "@customTypes/playerHitter";
import { PitcherType } from "@customTypes/playerPitcher";

export type PlayerStoreType = {
  playerList: FetchPlayerType[] | null;
  player: FetchPlayerDetail | null;
  pitcherSeasonSummary: PitcherType | null;
  hitterSeasonSummary: HitterType | null;
  pitcherRecentRecordList: any;
  hitterRecentRecordList: any;
  pitcherYearRecordList: any;
  hitterYearRecordList: any;
  fetchCoachList: () => void;
  fetchPlayerList: (url: string) => void;
  fetchCoachDetail: (pcode: string) => void;
  fetchPlayerDetail: (url: string, pcode: string) => void;
};
