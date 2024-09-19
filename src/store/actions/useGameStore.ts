import { api } from "api/api";
import { GameStoreType } from "store/types/gameStore";
import { create } from "zustand";

export const useGameStore = create<GameStoreType>((set) => ({
  daySchedule: null,
  schedule: null,
  scoreBoard: null,
  etcGames: [],
  hBatters: [],
  hPitchers: [],
  vBatters: [],
  vPitchers: [],
  fetchDaySchedule: async () => {
    const data = await api("game/dayschedule");
    data && set({ daySchedule: data.data.ktwiztodaygame[0] });
    const resData = await api(
      `game/boxscore?gamData=${data.data.ktwiztodaygame[0].gamedata}&gmkey=${data.data.ktwiztodaygame[0].gmkey}`
    );
    resData &&
      set({ schedule: resData.data.schedule, scoreBoard: resData.data.scoreboard, etcGames: data.data.etcgames });
  },
  fetchBoxScore: async (gameData: string, gmkey: string) => {
    const data = await api(`game/boxscore?gamData=${gameData}&gmkey=${gmkey}`);
    console.log(data);

    data && set({ schedule: data.data.schedule, scoreBoard: data.data.scoreboard, etcGames: data.data.etcgames });
  },
}));
