import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Catalog from "./pages/Catalog.jsx";
import PurchaseDone from "./pages/PurchaseDone.jsx";
import BookDetail from "./pages/BookDetail.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Catalog",
    element: <Catalog />,
  },
  {
    path: "/PurchaseDone",
    element: <PurchaseDone />,
  },
  {
    path: "/Book/:id",
    element: <BookDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
