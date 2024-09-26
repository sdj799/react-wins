import aboutImg4 from "@assets/images/aboutImg4.png";
import styled from "styled-components";

const WideImageStyle = styled.img`
  width: 100%;
`;

const WideImage = () => {
  return <WideImageStyle src={aboutImg4} alt="players Image" />;
};
export default WideImage;
