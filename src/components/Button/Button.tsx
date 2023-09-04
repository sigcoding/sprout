import { ButtonProps } from "./types";

const Button = ({
  type = "button",
  backgroundColor,
  variant,
  device,
  children,
  leftIcon,
  rightIcon,
  styles,
  ...props
}: ButtonProps) => {
  let buttonClasses = `py-2 rounded-lg text-[#232536] font-bold flex items-center justify-center ${styles}`;
  let deviceClasses = `${device === "desktop" ? "gap-x-6" : "gap-x-2"}`;

  switch (variant) {
    case "solid":
      return (
        <button
          type={type}
          className={`${buttonClasses} ${deviceClasses} px-12`}
          style={{ backgroundColor }}
          {...props}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </button>
      );
    case "outline":
      return (
        <button
          type={type}
          className={`${buttonClasses} ${deviceClasses} outline px-12`}
          style={{ outlineColor: backgroundColor }}
          {...props}
        >
          {leftIcon}
          {children}
          {rightIcon}
        </button>
      );
    case "label":
      return (
        <button
          type={type}
          className={`${buttonClasses} ${deviceClasses} px-3`}
          style={{ backgroundColor: backgroundColor }}
          {...props}
        >
          {children}
        </button>
      );
  }
};

export default Button;
