import { useQuery } from "@tanstack/react-query";
import { api } from "api/api";
import { useGameStore } from "store/actions/useGameStore";

export const useDayScheduleQuery = () => {
  const setDaySchedule = useGameStore((state) => state.setDaySchedule); // Zustand setter
  return useQuery({
    queryKey: ["daySchedule"],
    queryFn: async () => {
      const data = await api("game/recentGames");
      setDaySchedule(data.data.current);
      return data.data.current;
    },
  });
};

export const useBoxScoreQuery = (gameDate?: string, gmkey?: string) => {
  const setBoxScore = useGameStore((state) => state.setBoxScore);

  if (!gameDate && !gmkey)
    return useQuery({
      queryKey: ["boxScore", gameDate, gmkey],
      queryFn: async () => {
        const data = await api(`game/boxscore`);
        setBoxScore(data.data);
        return data;
      },
    });

  return useQuery({
    queryKey: ["boxScore", gameDate, gmkey],
    queryFn: async () => {
      const data = await api(`game/boxscore?gameDate=${gameDate}&gmkey=${gmkey}`);
      setBoxScore(data.data);
      return data.data;
    },
  });
};
