import { api } from "api/api";
import { HomeStoreType } from "store/types/homeStore";
import { create } from "zustand";

export const useHomeStore = create<HomeStoreType>((set) => ({
  data: null,
  issue: null,
  ktWizTeamRank: null,
  fetchRecentGames: async () => {
    const data = await api("game/recentGames");
    data && set({ data: data.data });
  },
  fetchTeamRanking: async () => {
    const data = await api("game/ktwizteamrank");
    data &&
      set({
        ktWizTeamRank: data.data.ktWizTeamRank,
      });
  },
  fetchHotIssue: async (count: string) => {
    const data = await api(`media/hotissue?count=${count}`);
    data && set({ issue: data });
  },
}));
