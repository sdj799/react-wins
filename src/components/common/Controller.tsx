import styled from "styled-components";

const StyledController = styled.div<{ $isFull: boolean }>`
  width: ${({ $isFull }) => ($isFull ? "100%" : "fit-content")};
  text-align: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const StyledButton = styled.button`
  backdrop-filter: blur(5px);
  border: 1px solid #000;
  border-radius: 8px;
  background-color: hsla(0, 0%, 100%, 0.25);
  padding: 15px;
  width: 354px;
  color: #000;
  font-weight: 700;
  font-size: 15px;
`;

const Controller = ({ $isFull, title }: { $isFull: boolean; title: string }) => {
  return (
    <StyledController $isFull={$isFull}>
      <StyledButton>{title}</StyledButton>
    </StyledController>
  );
};
export default Controller;
