import { TextfieldProps } from "./types";

export const Textfield = ({
  id,
  leftIcon,
  rightIcon,
  className,
  ...props
}: TextfieldProps) => {
  return (
    <div
      className={`px-6 py-4 border-2 border-[#6D6E76]/50 rounded-lg box-border flex items-center`}
    >
      {!!leftIcon && (
        <span className="text-inputContentColor mr-2">{leftIcon}</span>
      )}
      <input
        className={`bg-transparent text-inputContentColor border-0 w-full focus:outline-none ${className}`}
        {...props}
      />
      {!!rightIcon && (
        <span className="text-inputContentColor ml-2">{rightIcon}</span>
      )}
    </div>
  );
};

export default Textfield;
