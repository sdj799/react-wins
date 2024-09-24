import styled from "styled-components";

interface TagProps {
  tag: string;
}

const TagStyle = styled.span`
  width: 100%;
  max-width: 46px;
  font-size: 12px;
  background-color: #494949;
  color: #fff;
  font-weight: 300;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  text-align: center;
`;

const Tag = ({ tag }: TagProps) => {
  return <TagStyle>{tag}</TagStyle>;
};
export default Tag;
