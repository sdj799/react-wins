export type DayScheduleType = {
  displayDate: string;
  gameDate: number;
  gmkey: string;
  gtime: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
};

export type ScheduleType = {
  broadcast: string;
  cancelFlag: string;
  crowdCn: number;
  endFlag: string;
  game: string;
  gameDate: number;
  gday: number;
  gmkey: string;
  gmonth: number;
  gtime: string;
  gyear: string;
  home: string;
  homeKey: string;
  homeLogo: string;
  hscore: number;
  stadium: string;
  stadiumKey: string;
  visit: string;
  visitKey: string;
  visitLogo: string;
  vscore: number;
};

export type ScheduleListType = {
  current: ScheduleType;
  prev: ScheduleType;
};

export type ScoreboardType = {
  ballfour: string;
  bhome: number;
  bhomeName: string;
  error: string;
  gameDate: number;
  hit: string;
  run: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10: string;
  score11: string;
  score12: string;
};

export type FilterScoreboardType = {
  bhomeName: string;
  score1: string;
  score2: string;
  score3: string;
  score4: string;
  score5: string;
  score6: string;
  score7: string;
  score8: string;
  score9: string;
  score10: string;
  score11: string;
  score12: string;
  run: string;
  hit: string;
  error: string;
  ballfour: string;
};
