import { createBrowserRouter } from "react-router";
import Root from "../layouts/RootLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
