import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Favorites from "./pages/Favorites.jsx";
import Catalog from "./pages/Catalog.jsx";
import PurchaseDone from "./pages/PurchaseDone.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Favorites", 
    element: <Favorites/>
  }, 
  {
    path: "/Catalog", 
    element: <Catalog/>
  }, 
  {
    path: "/PurchaseDone", 
    element: <PurchaseDone/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
