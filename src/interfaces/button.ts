import { SystemStyleObject } from "@chakra-ui/react";

export interface ButtonProps {
  children?: any;
  height?: string;
  lineHeight?: string;
  transition?: string;
  border?: string;
  paddingX?: string;
  paddingY?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  background?: string;
  borderColor?: string;
  color?: string;
  _hover?: SystemStyleObject;
  _active?: SystemStyleObject;
  _focus?: SystemStyleObject;
  onClick?: () => void;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  marginX?: string;
  marginY?: string;
  marginTextX?: string;
}
