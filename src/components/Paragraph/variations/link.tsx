import React from "react";
import { LinkParagraphProps } from "../types";

export const LinkParagraph: React.FC<LinkParagraphProps> = ({
  as: Component = "a",
  text,
  href,
  ...rest
}) => {
  return (
    <Component href={href} {...rest} className="underline">
      {text || "Default Text"}
    </Component>
  );
};
