import { Logo } from "@/assets";
import { NavBar } from "@/components";
import React from "react";
import BannerHome from "@/assets/banner-home.png";
import styled from "styled-components";
import { Box, Text } from "@chakra-ui/react";
export function Home() {
  return (
    <Box>
      {/* <Text position="absolute" left="50%" top="50%">
        About Us
      </Text>
      <Banner src={BannerHome} /> */}
    </Box>
  );
}

const Banner = styled.img`
  src: ${(p) => p.src};
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
