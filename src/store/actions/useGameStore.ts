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
  setDaySchedule: (data) => set({ daySchedule: { gameDate: data.gameDate, gmkey: data.gmkey } }),
  setBoxScore: (data) =>
    set({
      schedule: data.schedule,
      scoreBoard: data.scoreboard,
      etcGames: data.etcgames,
      hBatters: data.hbatters,
      hPitchers: data.hpitchers,
      vBatters: data.vbatters,
      vPitchers: data.vpitchers,
    }),
}));
