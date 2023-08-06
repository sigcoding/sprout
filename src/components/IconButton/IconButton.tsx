import React from "react";
import { IconButtonProps } from "./types";

const IconButton: React.FC = ({
  type = "button",
  backgroundColor = "bg-sig-primary",
  styles,
  icon,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type={type}
      className={`p-2.5 rounded-lg ${backgroundColor} ${styles}`}
      {...props}
    >
      {icon}
    </button>
  );
};

export default IconButton;
