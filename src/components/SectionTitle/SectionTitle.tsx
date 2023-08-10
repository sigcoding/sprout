import { Component } from "react";
import { textSize } from "./sizes";
import { SectionTitleProps } from "./types";

export default function SectionTitle({ size, href, text }: SectionTitleProps) {
  if (href?.length) {
    return (
      <div className="flex justify-between items-center">
        <span className={textSize(size ? size : "h4")}>
          {text || "Default Text"}
        </span>
        <a href={href} className={textSize("link")}>
          {text || "Default Text"}
        </a>
      </div>
    );
  }

  return (
    <span className={textSize(size ? size : "h4")}>
      {text || "Default Text"}
    </span>
  );
}
