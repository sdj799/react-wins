import Coach from "@pages/Coach";
import Home from "@pages/Home";
import Location from "@pages/Location";
import BasicLayout from "layouts/BasicLayout";
import CommonLayout from "layouts/CommonLayout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <CommonLayout />,
    children: [
      // 컴포넌트 router에 맞게 순서대로 추가
      // kt wiz
      {
        path: "/ktwiz",
        children: [
          {
            path: "about",
            element: "구단소개 component", // 컴포넌트 삽입
          },
          {
            path: "history",
            element: "구단연혁 component", // 컴포넌트 삽입
          },
          {
            path: "bi",
            children: [
              {
                index: true,
                element: "심볼마크 component", // 컴포넌트 삽입
              },
              {
                path: "wordmark",
                element: "워드마크 component", // 컴포넌트 삽입
              },
              {
                path: "emblem",
                element: "엠블럼 component", // 컴포넌트 삽입
              },
              {
                path: "mascot",
                element: "마스코트 component", // 컴포넌트 삽입
              },
              {
                path: "uniform",
                element: "유니폼 component", // 컴포넌트 삽입
              },
            ],
          },
          {
            path: "policy",
            children: [
              {
                index: true,
                element: "일반회원 component", // 컴포넌트 삽입
              },
              {
                path: "donation",
                element: "기부프로그램 component", // 컴포넌트 삽입
              },
            ],
          },
          {
            path: "sponsor",
            element: "스폰서 component", // 컴포넌트 삽입
          },
          {
            path: "wallpaper",
            element: "월페이퍼 component", // 컴포넌트 삽입
          },
        ],
      },

      // wiz park
      {
        path: "/wizpark",
        children: [
          {
            path: "intro",
            element: "구장소개 component", // 컴포넌트 삽입
          },
          {
            path: "guide",
            element: "구장안내도 component", // 컴포넌트 삽입
          },
          {
            path: "parking",
            element: "주차예약 component", // 컴포넌트 삽입
          },
          {
            path: "location",
            element: <Location />,
          },
          {
            path: "iksan",
            element: "익산야구장 component", // 컴포넌트 삽입
          },
        ],
      },

      // Game
      {
        path: "/game",
        children: [
          {
            path: "schedule",
            element: "정규리그 component", // 컴포넌트 삽입
          },
          {
            path: "boxscore",
            element: "박스스코어 component", // 컴포넌트 삽입
          },
          {
            path: "ranking",
            element: "순위 component", // 컴포넌트 삽입
          },
          {
            path: "watchPoint",
            element: "관전포인트 component", // 컴포넌트 삽입
          },
        ],
      },

      // Player
      {
        path: "/player",
        children: [
          {
            path: "coach",
            element: <Coach />,
          },
          {
            path: "pitcher",
            element: "투수 component", // 컴포넌트 삽입
          },
          {
            path: "catcher",
            element: "타자_포수 component", // 컴포넌트 삽입
          },
          {
            path: "infielder",
            element: "타자_내야수 component", // 컴포넌트 삽입
          },
          {
            path: "outfielder",
            element: "타자_외야수 component", // 컴포넌트 삽입
          },
          {
            path: "cheer",
            element: "응원단 component", // 컴포넌트 삽입
          },
        ],
      },

      // Media
      {
        path: "/media",
        children: [
          {
            path: "wiznews",
            element: "wiz소식 component", // 컴포넌트 삽입
          },
          {
            path: "wizpress",
            element: "wiz보도자료 component", // 컴포넌트 삽입
          },
          {
            path: "wizstory",
            element: "wiz스토리 component", // 컴포넌트 삽입
          },
          {
            path: "firstpitch",
            element: "시구자 정보 component", // 컴포넌트 삽입
          },
          {
            path: "wizphoto",
            element: "wiz포토 component", // 컴포넌트 삽입
          },
          {
            path: "highlight",
            element: "하이라이트 component", // 컴포넌트 삽입
          },
          {
            path: "live",
            element: "live영상모음 component", // 컴포넌트 삽입
          },
        ],
      },

      // Ticket
      {
        path: "/ticket",
        children: [
          {
            path: "reservation",
            element: "티켓예매 component", // 컴포넌트 삽입
          },
          {
            path: "price",
            element: "입장요금 component", // 컴포넌트 삽입
          },
          {
            path: "discount",
            element: "할인혜택 component", // 컴포넌트 삽입
          },
          {
            path: "group",
            element: "단체관람안내 component", // 컴포넌트 삽입
          },
          {
            path: "seatmap",
            element: "좌석배치도 component", // 컴포넌트 삽입
          },
          {
            path: "enterance",
            element: "입장 시간 및 방법 component", // 컴포넌트 삽입
          },
          {
            path: "store",
            element: "구장 내 매장정보 component", // 컴포넌트 삽입
          },
        ],
      },

      // Login
      {
        path: "/login",
        element: "로그인 component", // 컴포넌트 삽입
      },

      // Signup
      {
        path: "/signup",
        element: "회원가입 component", // 컴포넌트 삽입
      },
    ],
  },
]);
