import MediaList from "@components/media/MediaList";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import dummy from "../../data.json";

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
