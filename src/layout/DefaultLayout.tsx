import { NavBar } from "@/components";
import { Path } from "@/constant";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
const data = [
  {
    id: 0,
    label: "Home",
    router: Path.HOME,
  },
  {
    id: 1,
    label: "About",
    router: Path.ABOUT,
  },
  {
    id: 2,
    label: "Tours",
    router: "/tours",
  },
  {
    id: 3,
    label: "Hotels",
    router: "/hotels",
  },
  {
    id: 4,
    label: "Contact",
    router: "/contact",
  },
  {
    id: 5,
    label: "Login",
    router: "/auth",
  },
];
function DefaultLayout() {
  return (
    <Box>
      <NavBar data={data} indexSelect={1} />
      <Outlet />
    </Box>
  );
}

export { DefaultLayout };
