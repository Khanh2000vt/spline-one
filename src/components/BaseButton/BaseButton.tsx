import { ButtonProps } from "@/interfaces";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";

export const BaseButton = (props: ButtonProps) => {
  const {
    children = "",
    height,
    lineHeight = "22.4px",
    transition = "all 0.2s cubic-bezier(.08,.52,.52,1)",
    border = "0px",
    paddingX = "0px",
    paddingY = "17px",
    borderRadius = "0px",
    fontSize = "14px",
    fontWeight = "700",
    background = "#f5f6f7",
    borderColor = "#ccd0d5",
    color = "#4b4f56",
    _active = {},
    _focus = {
      outline: "none",
    },
    _hover = {
      opacity: 0.9,
    },
    onClick = () => {},
    IconLeft,
    IconRight,
    marginX = "0px",
    marginY = "0px",
    marginTextX = "0px",
  } = props;
  return (
    <Flex
      onClick={onClick}
      as="button"
      height={height}
      lineHeight={lineHeight}
      transition={transition}
      border={border}
      px={paddingX}
      py={paddingY}
      borderRadius={borderRadius}
      fontSize={fontSize}
      fontWeight={fontWeight}
      bg={background}
      borderColor={borderColor}
      _hover={_hover}
      _active={_active}
      _focus={_focus}
      justifyContent="center"
      alignItems="center"
      marginX={marginX}
      marginY={marginY}
    >
      {!!IconLeft && IconLeft}
      <Box background={background} color={color} marginX={marginTextX}>
        {children}
      </Box>
      {!!IconRight && IconRight}
    </Flex>
  );
};
