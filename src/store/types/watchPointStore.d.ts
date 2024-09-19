import {
  GameScoreType,
  LineupType,
  PitcherType,
  ScheduleType,
  TeamRankType,
  TeamWinLoseType,
} from "@customTypes/watchPoint";

export type WatchPointStoreType = {
  gameScore: GameScoreType | null;
  homeLineup: LineupType[] | null;
  homePitcher: PitcherType | null;
  homeTeamRank: TeamRankType | null;
  homeTeamWinLose: TeamWinLoseType | null;
  schedule: ScheduleType | null;
  visitLineup: LineupType[] | null;
  visitPitcher: PitcherType | null;
  visitTeamRank: TeamRankType | null;
  visitTeamWinLose: TeamWinLoseType | null;
  fetchdata: () => void;
};
