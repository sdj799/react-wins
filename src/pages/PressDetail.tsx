import MediaDetail from "@components/media/MediaDetail";
import { TMedia } from "@types/media";
import dummy from "../../data.json";
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
