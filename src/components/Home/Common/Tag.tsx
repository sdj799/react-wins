import { HomeProps } from "@customTypes/home";
import styled from "styled-components";

interface TagProps extends HomeProps {
  tag: string;
}

const TagStyle = styled.span<{ $marginBottom?: string }>`
  width: fit-content;
  margin-bottom: ${(props) => props.$marginBottom};
  padding: 4px 8px;
  background-image: linear-gradient(to right, #ec3e57, #c767dd, #4aa9c8);
  border-radius: 12px;
  font-size: 11px;
  color: #fff;
  font-weight: 600;
`;

const Tag = ({ tag, $marginBottom }: TagProps) => {
  return <TagStyle $marginBottom={$marginBottom}>{tag}</TagStyle>;
};
export default Tag;
