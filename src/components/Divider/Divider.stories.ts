import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import { DividerProps } from "./types";

const meta = {
  title: "Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    direction: "horizontal",
  },
  argTypes: {
    direction: {
      options: ["horizontal", "vertical"],
      control: {
        type: "inline-radio"
      }
    }
  },
} satisfies Meta<DividerProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: "horizontal"
  }
};

export const Vertical: Story = {
  args: {
    direction: "vertical"
  }
}
