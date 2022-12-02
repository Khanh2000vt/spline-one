export interface IChildren {
  children?: any;
}

export interface IText {
  color?: string;
  fontSize?: string;
  textAlign?: "center" | "left" | "right" | "justify";
  textIndent?: string;
  fontWeight?: string;
  lineHeight?: string;
  fontStyle?: string;
  fontFamily?: string;
}

export type TextProps = IText & IChildren;
