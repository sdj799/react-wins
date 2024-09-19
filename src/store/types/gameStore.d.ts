import {
  DayScheduleType,
  EtcGames,
  GameBattersType,
  GamePitchersType,
  ScheduleListType,
  ScoreboardType,
} from "@customTypes/boxScore";

export type GameStoreType = {
  daySchedule: DayScheduleType | null;
  schedule: ScheduleListType | null;
  scoreBoard: ScoreboardType[] | null;
  etcGames: EtcGames[];
  hBatters: GameBattersType[];
  hPitchers: GamePitchersType[];
  vBatters: GameBattersType[];
  vPitchers: GamePitchersType[];
  fetchDaySchedule: () => void;
  fetchBoxScore: (gameData: string, gmkey: string) => void;
};
