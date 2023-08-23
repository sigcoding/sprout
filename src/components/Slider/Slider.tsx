import { Slider as SliderPrimitive } from "../../shadcn-components/Slider";
import { SliderProps } from "./types";

export const Slider = ({ className, defaultValue, ...props }: SliderProps) => {
  return (
    <SliderPrimitive
      defaultValue={[defaultValue]}
      className={`w-72 ${className}`}
      {...props}
    />
  );
};

export default Slider;
