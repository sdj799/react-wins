import { FaBus, FaSubway } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import styled from "styled-components";

const GuideWrapper = styled.table`
  margin-top: 50px;
  width: 100%;
  border-top: 2px solid red;
`;

const GuideTh = styled.th`
  width: 78px;
  border: 0.5px solid #cfcfcf;
  background-color: #f6f6f6;
  padding: 35px 41px 35px 42px;
  vertical-align: middle;
`;

const GuideTd = styled.td`
  border: 0.5px solid #cfcfcf;
`;

const BusType = styled.span`
  background-color: ${(props) => props.color};
  color: #fff;
  margin: 2px 2px;
  padding: 6px 18px 6px 17px;
  border-radius: 20px;
`;

const GuideLi = styled.li`
  line-height: 2;
  list-style-type: none;
`;

const LocationBtn = styled.a`
  display: inline-block;
  width: 73px;
  height: 37px;
  color: #fff;
  font-size: 14px;
  line-height: 37px;
  text-align: center;
  background-color: red;
  border-radius: 10px;
  text-decoration: none;
`;

const LocationGuide = ({ address1, address2, href, busList, subway }: TLocationGuide) => {
  return (
    <>
      <GuideWrapper>
        <tbody>
          <tr>
            <GuideTh>
              <ImLocation2 color="red" fontSize={"1.5em"} /> 주소
            </GuideTh>
            <GuideTd>
              <ul>
                <GuideLi>{address1}</GuideLi>
                <GuideLi>{address2}</GuideLi>
                <GuideLi>
                  <LocationBtn href={href}>찾아오기</LocationBtn>
                </GuideLi>
                <GuideLi>
                  <small>※ 찾아오기 버튼을 누르시면, 출발지에서 야구장으로 가는 길을 쉽게 확인하실 수 있습니다.</small>
                </GuideLi>
              </ul>
            </GuideTd>
          </tr>
          <tr>
            <GuideTh>
              <FaBus color="red" fontSize={"1.2em"} /> 버스
            </GuideTh>
            <GuideTd>
              <ul>
                {busList.map((bus, index) => (
                  <GuideLi key={index}>
                    <BusType color={bus.color}>{bus.busType}</BusType> {bus.busNumber}
                  </GuideLi>
                ))}
              </ul>
            </GuideTd>
          </tr>
          {subway && (
            <tr>
              <GuideTh>
                <FaSubway color="red" fontSize={"1.2em"} /> 지하철
              </GuideTh>
              <GuideTd>
                <ul>
                  {subway.map((text, index) => (
                    <GuideLi key={index}>{text}</GuideLi>
                  ))}
                </ul>
              </GuideTd>
            </tr>
          )}
        </tbody>
      </GuideWrapper>
    </>
  );
};
export default LocationGuide;
