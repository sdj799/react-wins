import styled from "styled-components";

const StyledButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: #333;
  color: #fff;
  padding: 0px 10px;
  margin-left: -3px;
  font-size: 12px;
`;

const SearchButton = () => {
  return (
    <>
      <StyledButton type="button">검색</StyledButton>
    </>
  );
};
export default SearchButton;
