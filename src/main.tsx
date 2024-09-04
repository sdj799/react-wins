import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.css";
import NewsDetail from "@pages/NewsDetail.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NewsDetail />
  </StrictMode>
);
