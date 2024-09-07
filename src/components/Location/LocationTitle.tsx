import styled from "styled-components";

export const TitleWrapper = styled.div`
  border-left: 5px solid #d23933;
  padding-left: 14px;
  height: 21px;
  margin-bottom: 20px;
`;

export const ArtiTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #222;
  display: inline-block;
  vertical-align: sub;
`;

const Title = ({ title }: { title: string }) => {
  return (
    <>
      <TitleWrapper>
        <ArtiTitle>{title}</ArtiTitle>
      </TitleWrapper>
    </>
  );
};
export default Title;
