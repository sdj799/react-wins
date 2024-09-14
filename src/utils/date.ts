export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

export const stringToDate = (input: string): string | null => {
  if (!input || input.length !== 8) {
    return null;
  }

  const year = input.substring(0, 4);
  const month = input.substring(4, 6);
  const day = input.substring(6, 8);

  return `${year}.${month}.${day}`;
};
