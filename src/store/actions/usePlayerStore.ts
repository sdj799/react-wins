import { api } from "api/api";
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
  fetchCoachList: async () => {
    const data = await api(`player/coachlist`);
    data.data && set({ playerList: data.data.list });
  },
  fetchPlayerList: async (url: string) => {
    const data = await api(`player/${url}`);
    data && set({ playerList: data });
  },
  fetchCoachDetail: async (pcode: string) => {
    const data = await api(`player/coachdetail?pcode=${pcode}`);
    data.data && set({ player: data.data.coachstep });
  },
  fetchPlayerDetail: async (url: string, pcode: string) => {
    const data = await api(`player/${url}detail?pcode=${pcode}`);
    if (data.data) {
      url === "pitcher" &&
        set({
          player: data.data.gameplayer,
          pitcherSeasonSummary: data.data.seasonsummary ? data.data.seasonsummary : data.data.seasonsummaryfutures,
          pitcherRecentRecordList: data.data.recentgamerecordlist,
          pitcherYearRecordList: data.data.yearrecordlist,
        });
      (url === "catcher" || url === "infielder" || url === "outfielder") &&
        set({
          player: data.data.gameplayer,
          hitterSeasonSummary: data.data.seasonsummary ? data.data.seasonsummary : data.data.seasonsummaryfutures,
          hitterRecentRecordList: data.data.recentgamerecordlist,
          hitterYearRecordList: data.data.yearrecordlist,
        });
    }
  },
}));
