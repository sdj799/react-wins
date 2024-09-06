import { useEffect, useState } from "react";
import MediaList from "@components/media/MediaList";
import { TMedia } from "@types/media";
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
