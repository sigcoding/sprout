import * as SliderPrimitive from "@radix-ui/react-slider";

type SliderPrimitiveProps = React.ComponentProps<typeof SliderPrimitive.Root>;

export interface SliderProps extends SliderPrimitiveProps {
  defaultValue: number;
}
