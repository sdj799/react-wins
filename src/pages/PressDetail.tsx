import MediaDetail from "@components/Media/MediaDetail";
import { TMedia } from "@customTypes/media";
import dummy from "@data/media.json";
import { useEffect, useState } from "react";

const PressDetail = () => {
  const [press, setPress] = useState<TMedia>();

  useEffect(() => {
    setPress(dummy.press.list[0]);
  }, []);

  return (
    <>
      <MediaDetail media={press} />
    </>
  );
};
export default PressDetail;
