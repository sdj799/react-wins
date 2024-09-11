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
      {
        path: "/ktwiz",
        element: "구단소개 component", // 컴포넌트 삽입
      },
      {
        path: "/ktwiz/history",
        element: "구단연혁 component", // 컴포넌트 삽입
      },
      {
        path: "/wizpark",
        element: <WizParkIntro />, // 컴포넌트 삽입
      },
      {
        path: "/wizpark/guide",
        element: <WizParkGuide />, // 컴포넌트 삽입
      },
      {
        path: "/wizpark/location",
        element: <Location />,
      },
      {
        path: "/wizpark/iksan",
        element: <Iksan />,
      },
      {
        path: "/game",
        element: "정규리그 component", // 컴포넌트 삽입
      },
      {
        path: "/game/score",
        element: "박스스코어 component", // 컴포넌트 삽입
      },
      {
        path: "/game/ranking",
        element: "순위 component", // 컴포넌트 삽입
      },
      {
        path: "/game/watchPoint",
        element: "관전포인트 component", // 컴포넌트 삽입
      },
      {
        path: "/player/coach",
        element: <Coach />,
      },
      {
        path: "/player/coach/detail",
        element: <CoachDetail />,
      },
      {
        path: "/player/pitcher",
        element: <Pitcher />,
      },
      {
        path: "/player/pitcher/detail",
        element: <PitcherDetail />,
      },
      {
        path: "/player/catcher",
        element: "타자 component", // 컴포넌트 삽입
      },
      {
        path: "/player/cheer",
        element: "응원단 component", // 컴포넌트 삽입
      },
      {
        path: "/media",
        element: <News />, // 컴포넌트 삽입
      },
      {
        path: "/media/wizpress",
        element: <Press />, // 컴포넌트 삽입
      },
    ],
  },
]);
