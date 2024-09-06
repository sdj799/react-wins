import styled from "styled-components";
import MediaItem from "./MediaItem";
import { TMedia } from "@types/media";
import PaginationButtons from "./PaginationButtons";
import MediaLayout from "./MediaLayout";

const MediaList = ({ mediaList }: { mediaList: TMedia[] }) => {
  return (
    <>
      <MediaLayout>
        <List>
          {mediaList.map((media) => (
            <li key={media.artcSeq}>
              <MediaItem media={media} />
            </li>
          ))}
        </List>
        <PaginationButtons />
      </MediaLayout>
    </>
  );
};
export default MediaList;

const List = styled.ul`
  list-style: none;
`;
