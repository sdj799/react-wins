import { FetchPlayerType } from "@customTypes/player";

export type PlayerStoreType = {
  playerList: FetchPlayerType[] | null;
  player: any;
  fetchCoachList: () => void;
  fetchPlayerList: (url: string) => void;
  fetchPlayerDetail: (url: string, pcode: string) => void;
};
