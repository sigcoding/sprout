import React from "react";
import { ParagraphProps } from "./Paragraph.types";

const Paragraph: React.FC<ParagraphProps> = ({ as, text }) => {
  const ParagraphType = as || "p";

  return <ParagraphType className="p-2.5">{text}</ParagraphType>
}

export default Paragraph;
