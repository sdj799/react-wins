import { useEffect, useState } from "react";
import MediaList from "@components/media/MediaList";
import { TMedia } from "@types/media";
import dummy from "../../data.json";

const News = () => {
  const [newsList, setNewsList] = useState<TMedia[]>([]);

  useEffect(() => {
    setNewsList(dummy.data.list);
  }, []);

  return (
    <>
      <MediaList mediaList={newsList} />
    </>
  );
};
export default News;
