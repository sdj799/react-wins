import styled from "styled-components";
import MontlyPlayer from "./Etc/MontlyPlayer";
import Store from "./Etc/Store";

const EtcStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Etc = () => {
  return (
    <EtcStyle>
      <Store />
      <MontlyPlayer />
    </EtcStyle>
  );
};
export default Etc;
