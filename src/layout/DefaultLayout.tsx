import { Author, Footer, NavBar } from "@/components";
import { Path } from "@/constant";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <Box>
      <NavBar />
      <Outlet />
      <Footer />
      <Author />
    </Box>
  );
}

export { DefaultLayout };
