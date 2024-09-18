import { useLocation } from "react-router-dom";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import Select from "./Select";

const SearchFormStyle = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  gap: 5px;
`;

const SearchFormInnerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 265px;

  & > input {
    width: 220px;
    height: 30px;
    padding: 5px 10px;
    border: 1px solid rgb(118, 118, 118);

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;

const Search = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.split("/").filter((element) => element);

  return (
    <SearchFormStyle>
      {currentPath[0] === "media" && <Select />}
      <SearchFormInnerStyle>
        <input type="text" placeholder="검색어를 입력해주세요." />
        <SearchButton />
      </SearchFormInnerStyle>
    </SearchFormStyle>
  );
};
export default Search;
