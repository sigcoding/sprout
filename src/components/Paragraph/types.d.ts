import { ElementType } from "react";

export interface ParagraphProps {
  as?: ElementType;
  text?: string;
}

export interface LinkParagraphProps {
  as?: ElementType;
  text?: string;
  href?: string;
}
