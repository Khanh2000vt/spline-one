import { IconFacebook, IconInstagram, Logo } from "@/assets";
import { dataContact, dataOption, dataPath, Path } from "@/constant";
import { ContactProps, INavItem } from "@/interfaces";
import { Color } from "@/theme";
import { Box, Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

interface ItemNavBarProps {
  item: INavItem;
}

interface IItemContactProps {
  item: ContactProps;
}

const ItemNavBar = ({ item }: ItemNavBarProps) => {
  let styleDefault = {
    fontSize: "14px",
    lineHeight: "22.4px",
    fontWeight: "400",
    color: Color.White,
  };

  return (
    <Box marginTop={item.id == 0 ? "0px" : "29px"}>
      <NavLink to={item.router} style={styleDefault}>
        {item.label}
      </NavLink>
    </Box>
  );
};

const ItemContact = ({ item }: IItemContactProps) => {
  return (
    <Flex marginBottom="24px">
      <Box>{item.icon}</Box>
      <Box marginLeft="20px">
        <Text
          color={Color.White}
          fontWeight="400"
          fontSize="14px"
          lineHeight="22.4px"
        >
          {item.title}
        </Text>
      </Box>
    </Flex>
  );
};

export const Footer = () => {
  const dataPathFooter = dataPath.slice(0, dataPath.length - 1);
  return (
    <Flex
      backgroundColor={Color.TitleText}
      justifyContent="space-between"
      paddingLeft="168px"
      paddingRight="164px"
      paddingTop="50px"
      paddingBottom="61px"
    >
      <Box>
        <Logo />
        <Flex marginTop="47px">
          <Box marginRight="33px">
            <IconFacebook />
          </Box>
          <Box marginRight="33px">
            <IconInstagram />
          </Box>
          <Box marginRight="33px">
            <IconInstagram />
          </Box>
        </Flex>
      </Box>
      <Flex>
        <Box marginRight="100px">
          {dataPathFooter.map((item) => (
            <ItemNavBar item={item} key={item.id} />
          ))}
        </Box>
        <Box marginRight="100px">
          {dataOption.map((item) => (
            <ItemNavBar item={item} key={item.id} />
          ))}
        </Box>
        <Box width="255px">
          {dataContact.map((item) => (
            <ItemContact item={item} key={item.id} />
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};
