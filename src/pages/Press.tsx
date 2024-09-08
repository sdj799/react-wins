import MediaList from "@components/media/MediaList";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import dummy from "../../data.json";

const Press = () => {
  const [pressList, setPressList] = useState<TMedia[]>([]);

  useEffect(() => {
    setPressList(dummy.press.list);
  }, []);

  return (
    <>
      <MediaList mediaList={pressList} />
    </>
  );
};
export default Press;
