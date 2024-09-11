import { NavEventType } from "@customTypes/layout";
import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomMenu = ({ $isShowNav }: NavEventType) => {
  return (
    <BottomMenuStyle $isShowNav={$isShowNav}>
      <li>
        <ul>
          <li>
            <Link to="/ktwiz/about">kt wiz는?</Link>
          </li>
          <li>
            <Link to="/ktwiz/bi">구단 BI</Link>
          </li>
          <li>
            <Link to="/ktwiz/policy">회원 정책</Link>
          </li>
          <li>
            <Link to="/ktwiz/sponsor">스폰서</Link>
          </li>
          <li>
            <Link to="/ktwiz/wallpaper">월페이퍼</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/wizpark/intro">
              수원 kt wiz
              <br />
              park
            </Link>
          </li>
          <li>
            <Link to="/wizpark/parking">주차 예약</Link>
          </li>
          <li>
            <Link to="/wizpark/location">찾아오기</Link>
          </li>
          <li>
            <Link to="/wizpark/iksan">익산야구장</Link>
          </li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/game/schedule">정규리그</Link>
          </li>
          <li>퓨처스리그</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/player/coach">코칭스텝</Link>
          </li>
          <li>
            <Link to="/player/pitcher">투수</Link>
          </li>
          <li>
            <Link to="/player/catcher">타자</Link>
          </li>
          <li>
            <Link to="/player/cheer">응원단</Link>
          </li>
          <li>응원가</li>
          <li>응원가 저작권</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>
            <Link to="/media/wiznews">wiz 뉴스</Link>
          </li>
          <li>
            <Link to="/media/wizstory">wiz 스토리</Link>
          </li>
          <li>
            <Link to="/media/firstpitch">시구자 정보</Link>
          </li>
          <li>
            <Link to="media/wizphoto">wiz 포토</Link>
          </li>
          <li>
            <Link to="/media/highlight">하이라이트</Link>
          </li>
          <li>
            <Link to="/media/live">Live 영상모음</Link>
          </li>
        </ul>
      </li>
      <li></li>
      <li></li>
      <li>
        <ul>
          <li>
            <Link to="/ticket/reservation">티켓예매</Link>
          </li>
          <li>
            <Link to="/ticket/group">단체관람</Link>
          </li>
          <li>
            <Link to="/ticket/seatmap">입장 및 좌석 정보</Link>
          </li>
        </ul>
      </li>
    </BottomMenuStyle>
  );
};
export default BottomMenu;

const BottomMenuStyle = styled.ul<{ $isShowNav: boolean }>`
  display: contents;

  & > li {
    color: #000;
    cursor: pointer;
    line-height: 1.2;
    font-size: 14px;
    font-weight: 400;
    transition: font-weight 0.1s;
    padding-top: 20px;

    & > ul {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
  }

  & > li {
    & > ul {
      & > li:hover {
        font-weight: 500;
        transition: font-weight 0.1s;
      }
    }
  }
`;
