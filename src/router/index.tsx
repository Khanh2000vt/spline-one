import { Path } from "@/constant";
import { Login, SignUp } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <Login />,
  },
  {
    path: Path.SIGN_UP,
    element: <SignUp />,
  },
]);
