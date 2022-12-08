import { Logo } from "@/assets";
import { INavItem, NavBarProps } from "@/interfaces";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import BannerHome from "@/assets/banner-home.png";
import { Color } from "@/theme";
interface ItemNavBarProps {
  item: INavItem;
}

const ItemNavBar = ({ item }: ItemNavBarProps) => {
  let styleDefault = {
    fontSize: "14px",
    lineHeight: "22px",
    fontWeight: "400",
    color: Color.White,
  };
  let activeStyle = {
    // textDecoration: "underline",
    ...styleDefault,
    color: Color.CamFF7B42,
    fontWeight: "700",
  };

  return (
    <Box px="30px" bgColor="transparent">
      <NavLink
        to={item.router}
        style={({ isActive }) => (isActive ? activeStyle : styleDefault)}
      >
        {item.label}
      </NavLink>
    </Box>
  );
};

export const NavBar = ({ data, indexSelect = 0 }: NavBarProps) => {
  return (
    <Box height="400px" position="relative">
      <Banner src={BannerHome} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="165px"
        paddingTop="20px"
        backgroundColor="transparent"
        position="absolute"
        left={0}
        right={0}
      >
        <Box _hover={{ cursor: "pointer" }} backgroundColor="transparent">
          <LogoApp />
        </Box>
        <Flex backgroundColor="transparent">
          {data.map((item) => (
            <ItemNavBar item={item} key={item.id} />
          ))}
        </Flex>
      </Flex>
      <Text
        position="absolute"
        left="50%"
        top="50%"
        backgroundColor="transparent"
        color={Color.White}
        fontWeight="500"
        fontSize="60px"
        lineHeight="60px"
      >
        About Us
      </Text>
    </Box>
  );
};

const LogoApp = styled(Logo)`
  background-color: transparent;
`;

const Banner = styled.img`
  src: ${(p) => p.src};
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`;

//  <Box
// position="absolute"
// >

{
  /* <Banner src={BannerHome} /> */
}
// </Box>;
