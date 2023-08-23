import { Slider as SliderPrimitive } from "../../shadcn-components/Slider";
import { SliderProps } from "./types";

export const Slider = ({ className, ...props }: SliderProps) => {
  return <SliderPrimitive className={`w-72 ${className}`} {...props} />;
};

export default Slider;
