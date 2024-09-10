import styled from "styled-components";

const Select = () => {
  return (
    <SelectStyle>
      <option>제목</option>
      <option>내용</option>
    </SelectStyle>
  );
};
export default Select;

const SelectStyle = styled.select`
  width: 100%;
  max-width: 90px;
  padding: 6px;
  font-size: 12px;
`;
