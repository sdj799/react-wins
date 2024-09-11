import MediaList from "@components/media/MediaList";
import { TMedia } from "@customTypes/media";
import dummy from "@data/media.json";
import { useEffect, useState } from "react";

const News = () => {
  const [newsList, setNewsList] = useState<TMedia[]>([]);

  useEffect(() => {
    setNewsList(dummy.news.list);
  }, []);

  return (
    <>
      <MediaList mediaList={newsList} />
    </>
  );
};
export default News;
