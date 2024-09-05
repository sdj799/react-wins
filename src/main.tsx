import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import News from "@pages/News.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <News />
  </StrictMode>
);
