import { Home } from "@/pages";
import { Login } from "@/pages/auth";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  //   children: [
  //     {
  //       // loader: teamLoader,
  //     },
  //   ],
  // },
  {
    path: "/",
    element: <Login />,
  },
]);
