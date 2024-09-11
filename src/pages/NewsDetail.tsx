import MediaDetail from "@components/media/MediaDetail";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import dummy from "../../data.json";

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
