import { api } from "api/api";
import { HomeStoreType } from "store/types/homeStore";
import { create } from "zustand";

export const useHomeStore = create<HomeStoreType>((set) => ({
  data: { current: null, prev: null, next: null },
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
}));
