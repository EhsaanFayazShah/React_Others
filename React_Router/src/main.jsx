import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import * as React from "react";
import * as ReactDom from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contact";
import { loader as rootLoader, action as rootAction } from "./routes/root";

const router = createBrowserRouter([
  {
    //root route
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);
ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
