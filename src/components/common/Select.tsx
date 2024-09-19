import styled from "styled-components";

const SelectStyle = styled.select`
  width: 80px;
  height: 30px;
  max-width: 90px;
  padding: 6px;
  font-size: 12px;
  outline: none;
`;

const Select = () => {
  return (
    <SelectStyle>
      <option>제목</option>
      <option>내용</option>
    </SelectStyle>
  );
};
export default Select;
