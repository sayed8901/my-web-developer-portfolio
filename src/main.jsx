import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import SummerChamp from "./pages/ProjectDetails/SummerChamp.jsx";
import HRCorp from "./pages/ProjectDetails/HRCorp.jsx";
import BDJobPortal from "./pages/ProjectDetails/BDJobPortal.jsx";
import EasyShop from "./pages/ProjectDetails/EasyShop.jsx";
import BookBug from "./pages/ProjectDetails/BookBug.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "summer_champ",
    element: <SummerChamp></SummerChamp>,
  },
  {
    path: "hr_corp",
    element: <HRCorp></HRCorp>,
  },
  {
    path: "bd_job_portal",
    element: <BDJobPortal></BDJobPortal>,
  },
  {
    path: "easy_shop",
    element: <EasyShop></EasyShop>,
  },
  {
    path: "book_bug",
    element: <BookBug></BookBug>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
