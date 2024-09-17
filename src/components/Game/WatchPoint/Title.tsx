import styled from "styled-components";

interface TitleProps {
  title: string;
  $marginBottom?: string;
}

const TitleStyle = styled.h4<{ $marginBottom?: string }>`
  width: 100%;
  font-size: 18px;
  color: #222;
  padding-left: 13px;
  border-left: 4px solid #d23933;
  font-weight: 400;
  margin-bottom: ${(props) => props.$marginBottom || "0"};
`;

const Title = ({ title, $marginBottom }: TitleProps) => {
  return <TitleStyle $marginBottom={$marginBottom}>{title}</TitleStyle>;
};
export default Title;
