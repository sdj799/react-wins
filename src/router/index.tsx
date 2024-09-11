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
      {
        path: "/ktwiz",
        children: [
          {
            path: "about",
            element: "구단소개 component",
          },
          {
            path: "history",
            element: "구단연혁 component",
          },
          {
            path: "bi",
            children: [
              {
                path: "symbol",
                element: "심볼마크 component",
              },
              {
                path: "wordmark",
                element: "워드마크 component",
              },
              {
                path: "emblem",
                element: "엠블럼 component",
              },
              {
                path: "mascot",
                element: "마스코트 component",
              },
              {
                path: "uniform",
                element: "유니폼 component",
              },
            ],
          },
          {
            path: "policy",
            children: [
              {
                path: "regular",
                element: "일반회원 component",
              },
              {
                path: "donation",
                element: "기부프로그램 component",
              },
            ],
          },
          {
            path: "sponsor",
            element: "스폰서 component",
          },
          {
            path: "wallpaper",
            element: "월페이퍼 component",
          },
        ],
      },
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
            element: "주차예약 component",
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
      {
        path: "/game",
        children: [
          {
            path: "schedule",
            element: "정규리그 component",
          },
          {
            path: "boxscore",
            element: "박스스코어 component",
          },
          {
            path: "ranking",
            element: "순위 component",
          },
          {
            path: "watchPoint",
            element: "관전포인트 component",
          },
        ],
      },
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
                element: "타자_포수 component",
              },
              {
                path: "detail",
                element: "타자_포수 디테일 component",
              },
            ],
          },
          {
            path: "infielder",
            children: [
              {
                index: true,
                element: "타자_내야수 component",
              },
              {
                path: "detail",
                element: "타자_내야수 디테일 component",
              },
            ],
          },
          {
            path: "outfielder",
            children: [
              {
                index: true,
                element: "타자_외야수 component",
              },
              {
                path: "detail",
                element: "타자_외야수 디테일 component",
              },
            ],
          },
          {
            path: "cheer",
            element: "응원단 component",
          },
        ],
      },
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
            element: "wiz스토리 component",
          },
          {
            path: "firstpitch",
            element: "시구자 정보 component",
          },
          {
            path: "wizphoto",
            element: "wiz포토 component",
          },
          {
            path: "highlight",
            element: "하이라이트 component",
          },
          {
            path: "live",
            element: "live영상모음 component",
          },
        ],
      },
      {
        path: "/ticket",
        children: [
          {
            path: "reservation",
            element: "티켓예매 component",
          },
          {
            path: "price",
            element: "입장요금 component",
          },
          {
            path: "discount",
            element: "할인혜택 component",
          },
          {
            path: "group",
            element: "단체관람안내 component",
          },
          {
            path: "seatmap",
            element: "좌석배치도 component",
          },
          {
            path: "enterance",
            element: "입장 시간 및 방법 component",
          },
          {
            path: "store",
            element: "구장 내 매장정보 component",
          },
        ],
      },
      {
        path: "/login",
        element: "로그인 component",
      },
      {
        path: "/signup",
        element: "회원가입 component",
      },
    ],
  },
]);
