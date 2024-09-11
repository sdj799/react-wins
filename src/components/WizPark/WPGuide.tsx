import WP_Title from "@assets/images/WP_Title.png";
import WP_seat from "@assets/images/WP_seat.png";
import { DescImg, TitleDiv, TitleImg } from "../../styles/WizParkGuide.style";

const WizParkGuide = () => {
  return (
    <>
      <TitleDiv>
        <TitleImg src={WP_Title} />
      </TitleDiv>
      <DescImg src={WP_seat} />
    </>
  );
};
export default WizParkGuide;
