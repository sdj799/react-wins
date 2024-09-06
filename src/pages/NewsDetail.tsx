import MediaDetail from "@components/media/MediaDetail";
import { TMedia } from "@types/media";
import dummy from "../../data.json";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const [news, setNews] = useState<TMedia>();

  useEffect(() => {
    setNews(dummy.data.list[0]);
  }, []);

  return (
    <>
      <MediaDetail media={news} />
    </>
  );
};
export default NewsDetail;
