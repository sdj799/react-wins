export const htmlToString = (htmlString: string): string => {
  // 1. HTML 태그 제거
  const noTags = htmlString.replace(/<\/?[^>]+(>|$)/g, "");
  // 2. HTML 엔티티(&nbsp;, &amp;, etc.) 제거
  const noEntities = noTags.replace(/&[a-zA-Z]+;/g, "");
  return noEntities;
};
