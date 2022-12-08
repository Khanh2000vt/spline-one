import { Color } from "@/theme";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";

export const Author = () => {
  return (
    <HStack justifyContent="center" backgroundColor="#000" py="9px">
      <Text
        color={Color.White}
        fontWeight="400"
        fontSize="14px"
        lineHeight="24px"
      >
        Copyright © We.travel. All rights reserved
      </Text>
    </HStack>
  );
};
