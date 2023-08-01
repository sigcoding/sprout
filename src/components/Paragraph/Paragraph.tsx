import React from "react";
import { ParagraphProps, LinkParagraphProps } from "./types";
import { DefaultParagraph } from "./variations/default";
import { LinkParagraph } from "./variations/link";

const Paragraph: React.FC = ({
  as,
  text,
  href,
}: ParagraphProps & LinkParagraphProps) => {
  if (as !== "a") {
    return <DefaultParagraph as={as} text={text} />;
  }

  return <LinkParagraph href={href} text={text} />;
};

export default Paragraph;
