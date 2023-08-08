import React from "react";
import { DefaultParagraph } from "./variations/default";
import { LinkParagraph } from "./variations/link";
import { LinkParagraphProps, ParagraphProps } from "./types";

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
