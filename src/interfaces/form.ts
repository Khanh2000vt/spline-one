import { IChildren } from "./text";

export interface IForm {
  display?: string;
  flexDirection?: "column" | "row" | "column-reverse" | "row-reverse";
}
export type FormProps = IChildren & IForm;
