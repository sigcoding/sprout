import React from "react";
import { IconButtonProps } from "./types";

const IconButton: React.FC = ({
  type = "button",
  backgroundColor = "#00FFC2",
  styles,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={`p-2.5 rounded-lg bg-[${backgroundColor}] ${styles}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
