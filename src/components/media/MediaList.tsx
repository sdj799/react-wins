import { TMedia } from "@customTypes/media";
import MediaItem from "./MediaItem";
import MediaLayout from "./MediaLayout";
import PaginationButtons from "./PaginationButtons";

const MediaList = ({ mediaList }: { mediaList: TMedia[] }) => {
  return (
    <>
      <MediaLayout>
        <ul>
          {mediaList.map((media) => (
            <li key={media.artcSeq}>
              <MediaItem media={media} />
            </li>
          ))}
        </ul>
        <PaginationButtons />
      </MediaLayout>
    </>
  );
};
export default MediaList;
