import { ScheduleType, WholeScheduleType } from "@customTypes/schedule";

export type ScheduleStoreType = {
  list: ScheduleType[] | [];
  wholeList: WholeScheduleType[] | [];
  fetchMonthSchedule: (date: string) => void;
  fetchAllGameSchedule: (date: string) => void;
};
