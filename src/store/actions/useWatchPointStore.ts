import { api } from "api/api";
import { WatchPointStoreType } from "store/types/watchPointStore";
import { create } from "zustand";

export const useWatchPointStore = create<WatchPointStoreType>((set) => ({
  gameScore: null,
  homeLineup: null,
  homePitcher: null,
  homeTeamRank: null,
  homeTeamWinLose: null,
  schedule: null,
  visitLineup: null,
  visitPitcher: null,
  visitTeamRank: null,
  visitTeamWinLose: null,
  fetchdata: async () => {
    const data = await api("game/watchpoint?gameDate=20240914&gmkey=20240914KTOB0");
    data.data &&
      set({
        gameScore: data.data.gameScore,
        homeLineup: data.data.homeLineup,
        homePitcher: data.data.homePitcher,
        homeTeamRank: data.data.homeTeamRank,
        homeTeamWinLose: data.data.homeTeamWinLose,
        schedule: { current: data.data.schedule.current, next: data.data.schedule.next, prev: data.data.schedule.prev },
        visitLineup: data.data.visitLineup,
        visitPitcher: data.data.visitPitcher,
        visitTeamRank: data.data.visitTeamRank,
        visitTeamWinLose: data.data.visitTeamWinLose,
      });
  },
}));
