import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";
import { IconButtonProps } from "./types";
import { HiHome, HiPlus, HiDownload } from "react-icons/hi";

const meta = {
  title: "Forms/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "IconButton icon",
      options: ["Home", "Plus", "Download"],
      control: {
        type: "inline-radio",
      },
      mapping: {
        Home: <HiHome />,
        Plus: <HiPlus />,
        Download: <HiDownload />,
      },
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

export const Primary: Story = {
  args: {
    type: "button",
    icon: <HiHome />,
  },
};
