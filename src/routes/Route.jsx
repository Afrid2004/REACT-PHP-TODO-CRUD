import { createBrowserRouter } from "react-router";
import Root from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/todos",
        element: <Todos></Todos>,
      },
    ],
  },
]);
