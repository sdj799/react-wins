import MediaList from "@components/Media/MediaList";
import { TMedia } from "@customTypes/media";
import { api } from "api/api";
import { useEffect, useState } from "react";

const Press = () => {
  const [pressList, setPressList] = useState<TMedia[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api("article/wizpresslistpage?itemCount=5&pageNum=1");
      data && setPressList(data.list);
    };
    fetchData();
  }, []);

  return (
    <>
      <MediaList mediaList={pressList} />
    </>
  );
};
export default Press;
