import styled from "styled-components";

interface DescProps {
  desc: string;
  colorDesc?: string;
}

const DescStyle = styled.p`
  font-weight: 300;
  line-height: 1.7;
  word-break: keep-all;

  & > strong {
    &.red {
      color: #ec0a0b;
    }
  }
`;

const Description = ({ desc, colorDesc }: DescProps) => {
  return (
    <DescStyle>
      {desc}
      <strong className={colorDesc ? "red" : ""}>{colorDesc}</strong>
    </DescStyle>
  );
};
export default Description;
