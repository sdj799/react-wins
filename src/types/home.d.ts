export interface HomeProps {
  $marginBottom?: string;
  $fontSize?: string;
  $fontWeight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
  $color?: string;
  $textShadow?: string;
  $opacity?: string;
  $position?: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
  $transform?: string;
}

export type RecentGamesType = {
  displayDate: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeFullname: string;
  homeKey: string;
  homeLogo: string;
  homeScore: number;
  homeStarter: string;
  matchTeamCode: string;
  matchTeamName: string;
  outcome: string;
  stadium: string;
  stadiumKey: string;
  status: string;
  visit: string;
  visitFullname: string;
  visitKey: string;
  visitLogo: string;
  visitScore: number;
  visitStarter: string;
};

export type TeamRankingType = {
  game: number;
  gyear: string;
  rank: number;
  rankName: string;
  teamCode: string;
  teamName: string;
  wldName: string;
  wra: string;
};

export type IssueType = {
  artcContents: string;
  artcTitle: string;
  imgFilePath: string;
  viewCnt: number;
};
