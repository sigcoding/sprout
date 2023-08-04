import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { IconButtonProps } from "./types";

const meta = {
  title: "Forms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {
    icon: {
      description: "IconButton background icon",
    },
    backgroundColor: {
      type: "string",
      description: "IconButton background color",
    },
    styles: {
      type: "string",
      description:
        "This property should be used to add new styles in the icon button, like change the text color",
    },
    type: {
      type: "string",
      description:
        "IconButton type, can be submit, reset and the default: button",
      defaultValue: "button",
    },
  },
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
