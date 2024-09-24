import { api } from "api/api";
import { GameStoreType } from "store/types/gameStore";
import { create } from "zustand";

export const useGameStore = create<GameStoreType>((set) => ({
  daySchedule: null,
  schedule: null,
  scoreBoard: null,
  etcGames: null,
  hBatters: null,
  hPitchers: null,
  vBatters: null,
  vPitchers: null,
  fetchDaySchedule: async () => {
    const data = await api("game/recentGames");
    data && set({ daySchedule: data.data.current });

    const resData = await api(`game/boxscore`);

    resData &&
      set({
        schedule: resData.data.schedule,
        scoreBoard: resData.data.scoreboard,
        etcGames: resData.data.etcgames,
        hBatters: resData.data.hbatters,
        hPitchers: resData.data.hpitchers,
        vBatters: resData.data.vbatters,
        vPitchers: resData.data.vpitchers,
      });
  },
  fetchBoxScore: async (gameData: string, gmkey: string) => {
    const data = await api(`game/boxscore?gameDate=${gameData}&gmkey=${gmkey}`);

    data &&
      set({
        schedule: data.data.schedule,
        scoreBoard: data.data.scoreboard,
        etcGames: data.data.etcgames,
        hBatters: data.data.hbatters,
        hPitchers: data.data.hpitchers,
        vBatters: data.data.vbatters,
        vPitchers: data.data.vpitchers,
      });
  },
}));
