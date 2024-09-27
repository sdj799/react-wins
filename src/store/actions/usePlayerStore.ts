import { PlayerStoreType } from "store/types/playerStore";
import { create } from "zustand";

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  playerList: null,
  player: null,
  pitcherSeasonSummary: null,
  hitterSeasonSummary: null,
  pitcherRecentRecordList: null,
  hitterRecentRecordList: null,
  pitcherYearRecordList: null,
  hitterYearRecordList: null,
  setPlayerList: (data) => set({ playerList: data }),
  setPlayer: (data) => set({ player: data }),
  setPitcherDetail: (data) =>
    set({
      pitcherSeasonSummary: data.data.seasonsummary ? data.data.seasonsummary : data.data.seasonsummaryfutures,
      pitcherRecentRecordList: data.data.recentgamerecordlist,
      pitcherYearRecordList: data.data.yearrecordlist,
    }),
  setHitterDetail: (data) =>
    set({
      hitterSeasonSummary: data.data.seasonsummary ? data.data.seasonsummary : data.data.seasonsummaryfutures,
      hitterRecentRecordList: data.data.recentgamerecordlist,
      hitterYearRecordList: data.data.yearrecordlist,
    }),
}));
