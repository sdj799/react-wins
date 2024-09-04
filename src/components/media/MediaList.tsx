import styled from "styled-components";
import MediaItem from "./MediaItem";
import { TNews } from "@types/news";

const MediaList = ({ newsList }: { newsList: TNews[] }) => {
  return (
    <>
      <List>
        {newsList.map((news) => (
          <li key={news.artcSeq}>
            <MediaItem news={news} />
          </li>
        ))}
      </List>
    </>
  );
};
export default MediaList;

const List = styled.ul`
  list-style: none;
`;
