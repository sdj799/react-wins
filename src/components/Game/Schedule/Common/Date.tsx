import styled from "styled-components";

interface DateProps {
  date: string;
  $bgColor?: string;
}

const DateStyle = styled.span<{ $bgColor?: string }>`
  max-width: 120px;
  min-height: 28px;
  padding: 5px 25px;
  border-radius: 20px;
  background-color: ${(props) => props.$bgColor || "#343434"};
  color: #fff;
  font-weight: 300;
`;

const Date = ({ date, $bgColor }: DateProps) => {
  return <DateStyle $bgColor={$bgColor}>{date}</DateStyle>;
};
export default Date;
