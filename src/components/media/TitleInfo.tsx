import { formatDate } from "@utils/date";
import { FaCalendarAlt, FaRegCheckCircle } from "react-icons/fa";
import styled from "styled-components";

const InfoDisplayList = styled.ul`
  width: 140px;
  display: flex;
  flex-direction: column;
  & > li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
    color: #5b5a5a;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
  padding: 0;
  margin: 0;
`;

const TitleInfo = ({ date, view }: { date: number | undefined; view: number | undefined }) => {
  return (
    <>
      <InfoDisplayList>
        <li>
          <span>{date && formatDate(new Date(date))}</span>
          <FaCalendarAlt className="icon" />
        </li>
        <li>
          <span>{view}</span>
          <FaRegCheckCircle className="icon" />
        </li>
      </InfoDisplayList>
    </>
  );
};
export default TitleInfo;
