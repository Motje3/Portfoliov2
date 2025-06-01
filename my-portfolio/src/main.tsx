import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import "./index.css";

import Portfolio from "./Portfolio.tsx";
import Project1Page from "./pages/Project-1.tsx";
import Project4Page from "./pages/Project-4.tsx";


const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Portfolio />,
      },
      {
        path: "/project-1",
        element: <Project1Page />,
      },
      {
        path: "/project-4",
        element: <Project4Page />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);