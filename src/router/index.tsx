import { Path } from "@/constant";
import { DefaultLayout } from "@/layout";
import { About, Home, Login, SignUp } from "@/pages";
import { selectAuth } from "@/redux";
import { useSelector } from "react-redux";
import { createBrowserRouter } from "react-router-dom";

export const router = () => {
  const token = useSelector(selectAuth).token;
  return createBrowserRouter([
    {
      path: Path.HOME,
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: Path.ABOUT,
          element: <About />,
        },
      ],
    },
    {
      path: Path.SIGN_UP,
      element: <SignUp />,
    },
  ]);
};

// export const router = createBrowserRouter([
//   {
//     path: Path.HOME,
//     element: <Login />,
//   },
//   {
//     path: Path.SIGN_UP,
//     element: <SignUp />,
//   },
// ]);
