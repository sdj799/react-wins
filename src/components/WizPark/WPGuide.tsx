import WP_Title from "@assets/images/WP_Title.png";
import WP_seat from "@assets/images/WP_seat.png";
import { TitleDiv, TitleImg, DescImg } from "../../styles/WizParkGuide.ts";

const WizParkGuide = () => {
    return (
        <>
            <TitleDiv>
                <TitleImg src={WP_Title} />
            </TitleDiv>
            <DescImg src={WP_seat} />
        </>
    );
}
export default WizParkGuide