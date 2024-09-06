import styled from "styled-components";
import MediaItem from "./MediaItem";
import { TNews } from "@types/news";
import PaginationButtons from "./PaginationButtons";
import MediaLayout from "./MediaLayout";

const MediaList = ({ newsList }: { newsList: TNews[] }) => {
  return (
    <>
      <MediaLayout>
        <List>
          {newsList.map((news) => (
            <li key={news.artcSeq}>
              <MediaItem news={news} />
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
