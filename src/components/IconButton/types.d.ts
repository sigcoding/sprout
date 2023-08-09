import { HTMLProps } from "react";

export interface IconButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "submit" | "reset" | "button";
  backgroundColor?: string;
  styles?: string;
  icon: JSX.Element;
}
