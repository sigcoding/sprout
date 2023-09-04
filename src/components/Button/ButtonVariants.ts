import { cva } from "class-variance-authority";

const buttonVariants = cva("px-12 py-4 rounded-lg", {
  variants: {
    variant: {
      solid: "bg-[#432]",
      outline: "border border-2 border-[#432] bg-transparent",
    },
  },
});

export default buttonVariants;
