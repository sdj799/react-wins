import MediaList from "@components/Media/MediaList";
import { TMedia } from "@customTypes/media";
import { api } from "api/api";
import { useEffect, useState } from "react";

const News = () => {
  const [newsList, setNewsList] = useState<TMedia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("article/newslistpage?itemCount=5&pageNum=1");
      data && setNewsList(data.list);
    };
    fetchData();
  }, []);

  return (
    <>
      <MediaList mediaList={newsList} />
    </>
  );
};
export default News;
