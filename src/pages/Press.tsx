import MediaList from "@components/Media/MediaList";
import { TMedia } from "@customTypes/media";
import dummy from "@data/media.json";
import { useEffect, useState } from "react";

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
