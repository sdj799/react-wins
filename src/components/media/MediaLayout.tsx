import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 2px solid #ec0a0b;
`;

const MediaLayout = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <section>
      <ContentContainer>{children[0]}</ContentContainer>
      {children[1]}
    </section>
  );
};
export default MediaLayout;
