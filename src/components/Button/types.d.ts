import { HTMLProps } from "react";

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type: "submit" | "reset" | "button";
  backgroundColor?: string;
  variant: "solid" | "outline" | "label";
  device: "desktop" | "mobile";
  styles?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}
