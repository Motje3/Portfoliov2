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
import Project2Page from "./pages/Project-2.tsx";
import Project3Page from "./pages/Project-3.tsx";
import Project4Page from "./pages/Project-4.tsx";
import Project5Page from "./pages/Project-5.tsx";
import Project6Page from "./pages/Project-6.tsx";

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
        path: "/project-2",
        element: <Project2Page />,
      },
      {
        path: "/project-3",
        element: <Project3Page />,
      },
      {
        path: "/project-4",
        element: <Project4Page />,
      },
      {
        path: "/project-5",
        element: <Project5Page />,
      },
      {
        path: "/project-6",
        element: <Project6Page />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
