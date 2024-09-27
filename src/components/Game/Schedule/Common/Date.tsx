import styled from "styled-components";

interface DateProps {
  date: string;
  $isCurrent?: boolean;
}

const DateStyle = styled.span<{ $isCurrent?: boolean }>`
  max-width: 120px;
  min-height: 28px;
  padding: 5px 25px;
  border-radius: 20px;
  background-color: ${(props) => (props.$isCurrent ? "#DA3834" : "#343434")};
  color: #fff;
  font-weight: 300;
`;

const Date = ({ date, $isCurrent }: DateProps) => {
  return <DateStyle $isCurrent={$isCurrent}>{date}</DateStyle>;
};
export default Date;
