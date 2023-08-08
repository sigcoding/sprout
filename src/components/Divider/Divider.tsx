import React from "react";
import { DividerProps } from "./types";

export default function Divider({ direction }: DividerProps) {
  switch (direction) {
    case "vertical":
      return <div className="min-h-[10px] p-px bg-black w-px" />;

    default:
      return <hr className="p-px bg-black border-0 min-w-[10px]" />;
  }
}
