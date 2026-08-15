import { createBrowserRouter } from "react-router";
import Root from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Todos from "../pages/Todos/Todos";
import CreateTodo from "../pages/Todos/CreateTodo";
import ShowDetails from "../pages/Todos/ShowDetails";
import EditTodo from "../pages/Todos/EditTodo";

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
      {
        path: "/todos/create",
        element: <CreateTodo></CreateTodo>,
      },
      {
        path: "/todos/details/:id",
        element: <ShowDetails></ShowDetails>,
      },
      {
        path: "/todos/edit/:id",
        element: <EditTodo></EditTodo>,
      },
    ],
  },
]);
