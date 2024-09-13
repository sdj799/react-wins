import { api } from "api/api";
import { PlayerStoreType } from "store/types/playerStore";
import { create } from "zustand";

export const usePlayerStore = create<PlayerStoreType>((set) => ({
  playerList: null,
  player: null,
  fetchCoachList: async () => {
    const data = await api(`player/coachlist`);
    data.data && set({ playerList: data.data.list });
  },
  fetchPlayerList: async (url: string) => {
    const data = await api(`player/${url}`);
    data && set({ playerList: data });
  },
  fetchPlayerDetail: async (url: string, pcode: string) => {
    const data = await api(`player/${url}?pcode=${pcode}`);
    set({ player: data });
  },
}));
