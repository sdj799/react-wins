import ClubDescription from "@components/About/ClubDescription";
import ClubHistory from "@components/About/ClubHistory";
import Audience from "@pages/Audience.tsx";
import BoxScore from "@pages/BoxScore";
import Catcher from "@pages/Catcher";
import CatcherDetail from "@pages/CatcherDetail";
import Cheer from "@pages/Cheer.tsx";
import Coach from "@pages/Coach";
import CoachDetail from "@pages/CoachDetail";
import Donation from "@pages/Donation";
import Entrance from "@pages/Entrance";
import Home from "@pages/Home";
import Iksan from "@pages/Iksan";
import Infielder from "@pages/Infielder";
import InfielderDetail from "@pages/InfielderDetail";
import Location from "@pages/Location";
import News from "@pages/News";
import NewsDetail from "@pages/NewsDetail";
import Outfielder from "@pages/Outfielder";
import OutfielderDetail from "@pages/OutfielderDetail";
import Pitcher from "@pages/Pitcher";
import PitcherDetail from "@pages/PitcherDetail";
import Policy from "@pages/Policy";
import Press from "@pages/Press";
import PressDetail from "@pages/PressDetail";
import Schedule from "@pages/Schedule";
import Store from "@pages/Store";
import TeamRanking from "@pages/TeamRanking";
import WatchPoint from "@pages/WatchPoint";
import WizParkGuide from "@pages/WizParkGuide";
import WizParkIntro from "@pages/WizParkIntro.tsx";
import BasicLayout from "layouts/BasicLayout";
import CommonLayout from "layouts/CommonLayout";
import { Navigate, createBrowserRouter } from "react-router-dom";

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
            element: <ClubDescription />,
          },
          {
            path: "history",
            element: <ClubHistory />,
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
                index: true,
                element: <Policy />,
              },
              {
                path: "donation",
                element: <Donation />,
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
            element: <Schedule />,
          },
          {
            path: "boxscore",
            element: <BoxScore />,
          },
          {
            path: "boxscore/:gameDate/:gmkey",
            element: <BoxScore />,
          },
          {
            path: "ranking",
            children: [
              { index: true, element: <Navigate to="team" /> },
              { path: "team", element: <TeamRanking /> },
              { path: "crowd", element: <Audience /> },
            ],
          },
          {
            path: "watchpoint",
            element: <WatchPoint />,
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
                element: <Infielder />,
              },
              {
                path: "detail",
                element: <InfielderDetail />,
              },
            ],
          },
          {
            path: "outfielder",
            children: [
              {
                index: true,
                element: <Outfielder />,
              },
              {
                path: "detail",
                element: <OutfielderDetail />,
              },
            ],
          },
          {
            path: "cheer",
            element: <Cheer />,
          },
        ],
      },
      {
        path: "/media",
        children: [
          {
            path: "wiznews",
            children: [
              { index: true, element: <News /> },
              { path: ":artcSeq", element: <NewsDetail /> },
            ],
          },
          {
            path: "wizpress",
            children: [
              { index: true, element: <Press /> },
              { path: ":artcSeq", element: <PressDetail /> },
            ],
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
            element: <WizParkGuide />,
          },
          {
            path: "enterance",
            element: <Entrance />,
          },
          {
            path: "store",
            element: <Store />,
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
