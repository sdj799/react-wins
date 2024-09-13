import MediaDetail from "@components/Media/MediaDetail";
import { TMedia } from "@customTypes/media";
import dummy from "@data/media.json";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const [news, setNews] = useState<TMedia>();

  useEffect(() => {
    setNews(dummy.news.list[0]);
  }, []);

  return (
    <>
      <MediaDetail media={news} />
    </>
  );
};
export default NewsDetail;
