import { RecentGamesType, TeamRankingType } from "@customTypes/home";

export type HomeStoreType = {
  data: { current: RecentGamesType | null; prev: RecentGamesType | null; next: RecentGamesType | null };
  ktWizTeamRank: TeamRankingType | null;
  fetchRecentGames: () => void;
  fetchTeamRanking: () => void;
};
