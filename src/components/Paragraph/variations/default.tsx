import React from "react";
import { ParagraphProps } from "../types";

export const DefaultParagraph: React.FC<ParagraphProps> = ({
  as: Component = "a",
  text,
  ...rest
}) => {
  return <Component {...rest}>{text || "Default Text"}</Component>;
};
