import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Select from "./Select";

const SearchFormStyle = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 5px;
`;

const SearchFormInnerStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 270px;

  & > input {
    width: 100%;
    padding: 5px 10px;
  }

  & > input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  & > button {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 45px;
    background-color: #333;
    color: #fff;
    padding: 7px 10px;
    font-size: 12px;
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
        <button type="button">검색</button>
      </SearchFormInnerStyle>
    </SearchFormStyle>
  );
};
export default Search;
