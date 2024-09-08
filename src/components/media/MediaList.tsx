import { TMedia } from "@customTypes/media";
import styled from "styled-components";
import MediaItem from "./MediaItem";
import MediaLayout from "./MediaLayout";
import PaginationButtons from "./PaginationButtons";

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
