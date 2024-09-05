import { formatDate } from "@utils/date";
import styled from "styled-components";
import { FaCalendarAlt, FaRegCheckCircle } from "react-icons/fa";

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

const InfoDisplayList = styled.ul`
  display: flex;
  flex-direction: column;
  & > li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 5px;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }

  padding: 0;
  margin: 0;
  list-style: none;
`;
