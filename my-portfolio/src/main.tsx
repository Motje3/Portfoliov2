import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Portfolio from "./Portfolio.tsx";
import Project1Page from "./pages/Project-1.tsx"; 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project-1" element={<Project1Page />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);