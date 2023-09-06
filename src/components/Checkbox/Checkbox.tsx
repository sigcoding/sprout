import { useState } from "react";
import { Checkbox as CheckboxPrimitive } from "../../shadcn-components/Checkbox";
import { CheckboxProps } from "./types";

export const Checkbox = ({
  id,
  checkboxLabel,
  checkboxLabelStyle,
  size,
  checked,
  className,
  disabled,
  ...props
}: CheckboxProps) => {
  const [getChecked, setChecked] = useState(checked);
  let checkboxClass =
    "border-2 border-gray-500 data-[state=checked]:border-checkboxBackground data-[state=checked]:bg-checkboxBackground " +
    "disabled:bg-checkboxDisabledBackground disabled:border-0 disabled:data-[state=checked]:bg-checkboxCheckedDisabledBackground";
  let checkboxSize = "w-4 h-4";

  switch (size) {
    case "small":
      checkboxSize = "w-3 h-3";
      break;
    case "medium":
      checkboxSize = "w-4 h-4";
      break;
    case "large":
      checkboxSize = "w-5 h-5";
      break;
  }

  switch (disabled) {
    case true:
      checkboxSize += " text-black";
      break;
    case false:
      checkboxSize += " text-current";
      break;
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <CheckboxPrimitive
        id={id}
        checked={getChecked}
        onCheckedChange={() => setChecked(!getChecked)}
        className={`${checkboxClass} ${checkboxSize} ${className}`}
        disabled={disabled}
        checkboxIndicatorStyles={checkboxSize}
        {...props}
      />
      <label htmlFor={id} className={checkboxLabelStyle}>
        {checkboxLabel}
      </label>
    </div>
  );
};

export default Checkbox;
