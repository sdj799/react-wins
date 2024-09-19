import { FilterScoreboardType, ScoreboardType } from "@customTypes/boxScore";

export function filterScoreboardData(data: ScoreboardType): FilterScoreboardType {
  return {
    bhomeName: data.bhomeName,
    score1: data.score1,
    score2: data.score2,
    score3: data.score3,
    score4: data.score4,
    score5: data.score5,
    score6: data.score6,
    score7: data.score7,
    score8: data.score8,
    score9: data.score9,
    score10: data.score10,
    score11: data.score11,
    score12: data.score12,
    run: data.run,
    hit: data.hit,
    error: data.error,
    ballfour: data.ballfour,
  };
}
