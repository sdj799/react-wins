import { DayScheduleType, ScheduleListType, ScoreboardType } from "@customTypes/boxScore";

export type GameStoreType = {
  daySchedule: DayScheduleType | null;
  schedule: ScheduleListType | null;
  scoreBoard: ScoreboardType[] | null;
  fetchDaySchedule: () => void;
  fetchBoxScore: (gameData: string, gmkey: string) => void;
};
