import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./styles/index.css";
import News from "@pages/News.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <News />
  </StrictMode>
);
