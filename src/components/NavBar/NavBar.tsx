import { Logo } from "@/assets";
import BannerHome from "@/assets/banner-home.png";
import { dataPath } from "@/constant";
import { INavItem, NavBarProps } from "@/interfaces";
import { Color } from "@/theme";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
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
    <Box px="30px">
      <NavLink
        to={item.router}
        style={({ isActive }) => (isActive ? activeStyle : styleDefault)}
      >
        {item.label}
      </NavLink>
    </Box>
  );
};

export const NavBar = () => {
  return (
    <Box height="400px" position="relative">
      <Banner src={BannerHome} />
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px="165px"
        paddingTop="20px"
        position="absolute"
        left={0}
        right={0}
      >
        <Box _hover={{ cursor: "pointer" }}>
          <Logo />
        </Box>
        <Flex>
          {dataPath.map((item) => (
            <ItemNavBar item={item} key={item.id} />
          ))}
        </Flex>
      </Flex>
      <Text
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%)"
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

const Banner = styled.img`
  src: ${(p) => p.src};
  width: 100%;
  height: 400px;
  object-fit: cover;
  position: absolute;
`;
