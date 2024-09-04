import MediaDetail from "@components/media/MediaDetail";
import { TNews } from "@types/news";
import dummy from "../../data.json";
import { useEffect, useState } from "react";

const NewsDetail = () => {
  const [news, setNews] = useState<TNews>();

  useEffect(() => {
    setNews(dummy.data.list[0]);
  }, []);

  return (
    <section>
      <MediaDetail news={news} />
    </section>
  );
};
export default NewsDetail;
