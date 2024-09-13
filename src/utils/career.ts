export function formatCareer(input: string | undefined): string | null {
  if (!input) {
    return null;
  }
  const parts = input.split("-");
  const lastPart = parts[3];

  if (lastPart && lastPart.endsWith("대")) {
    return parts.slice(0, 4).join("-");
  } else {
    return parts.slice(0, 3).join("-");
  }
}
