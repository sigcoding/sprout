import React from "react";
import { IconButtonProps } from "./types";

const IconButton = ({
  type = "button",
  backgroundColor,
  styles,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={`p-2.5 rounded-lg ${styles}`}
      style={{ backgroundColor }}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
