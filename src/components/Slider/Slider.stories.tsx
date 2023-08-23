import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./Slider";

import { SliderProps } from "./types";

const meta = {
  title: "Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    defaultValue: {
      type: "number",
    },
    max: {
      type: "number",
    },
    step: {
      type: "number",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<SliderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 50,
    max: 100,
    step: 1,
  },
};
