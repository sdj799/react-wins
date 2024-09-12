import { useState } from "react";
import styled from "styled-components";

const InputBox = styled.input`
  width: 220px;
  height: 30px;
  line-height: 30px;
`;

const SearchButton = styled.button`
  width: 50px;
  background: #333;
  line-height: 30px;
  color: #fff;
  margin-left: -3px;
`;

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div>
        <form action="">
          <InputBox
            type="text"
            value={inputValue}
            placeholder="검색어를 입력하세요"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <SearchButton>검색</SearchButton>
        </form>
      </div>
    </>
  );
};
export default SearchForm;
