import Catcher from "@pages/Catcher";
import CatcherDetail from "@pages/CatcherDetail";
import Coach from "@pages/Coach";
import CoachDetail from "@pages/CoachDetail";
import Home from "@pages/Home";
import Iksan from "@pages/Iksan";
import Location from "@pages/Location";
import News from "@pages/News";
import Pitcher from "@pages/Pitcher";
import PitcherDetail from "@pages/PitcherDetail";
import Press from "@pages/Press";
import WizParkGuide from "@pages/WizParkGuide.tsx";
import WizParkIntro from "@pages/WizParkIntro.tsx";
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
                path: "symbol",
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
                path: "regular",
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
            element: <WizParkIntro />,
          },
          {
            path: "guide",
            element: <WizParkGuide />,
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
            element: <Iksan />,
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
            children: [
              {
                index: true,
                element: <Coach />,
              },
              {
                path: "detail",
                element: <CoachDetail />,
              },
            ],
          },
          {
            path: "pitcher",
            children: [
              {
                index: true,
                element: <Pitcher />,
              },
              {
                path: "detail",
                element: <PitcherDetail />,
              },
            ],
          },
          {
            path: "catcher",
            children: [
              {
                index: true,
                element: <Catcher />,
              },
              {
                path: "detail",
                element: <CatcherDetail />,
              },
            ],
          },
          {
            path: "infielder",
            children: [
              {
                index: true,
                element: "타자_내야수 component", // 컴포넌트 삽입
              },
              {
                path: "detail",
                element: "타자_내야수 디테일 component", // 컴포넌트 삽입
              },
            ],
          },
          {
            path: "outfielder",
            children: [
              {
                index: true,
                element: "타자_외야수 component", // 컴포넌트 삽입
              },
              {
                path: "detail",
                element: "타자_외야수 디테일 component", // 컴포넌트 삽입
              },
            ],
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
            element: <News />,
          },
          {
            path: "wizpress",
            element: <Press />,
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
