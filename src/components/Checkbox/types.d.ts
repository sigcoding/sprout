import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

type CheckboxPrimitiveProps = React.ComponentProps<
  typeof CheckboxPrimitive.Root
>;

export interface CheckboxProps extends CheckboxPrimitiveProps {
  size: "small" | "medium" | "large";
  checkboxLabel: string;
  checkboxLabelStyle?: string;
}
