import MediaDetail from "@components/media/MediaDetail";
import { TMedia } from "@customTypes/media";
import { useEffect, useState } from "react";
import dummy from "../../data.json";

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
