import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./types";
import { HiHome, HiPlus, HiDownload } from "react-icons/hi";

const meta = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "Button type, it can be submit, reset or button",
    },
    styles: {
      description: "Additional styles in button style",
    },
    variant: {
      description: "Button variant, it can be a label, solid or outline",
    },
    backgroundColor: {
      description: "Button background or outline color",
    },
    device: {
      description:
        "Button has different gap in desktop and mobile, specify which device style you want for the button",
    },
    children: {
      description: "Button children, usually a text",
    },
    leftIcon: {
      description:
        "Button left icon, only applicable in solid and outline buttons",
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
    rightIcon: {
      description:
        "Button right icon, only applicable in solid and outline buttons",
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
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    type: "button",
    variant: "solid",
    backgroundColor: "#00FFC2",
    device: "desktop",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    type: "button",
    variant: "outline",
    backgroundColor: "#00FFC2",
    device: "desktop",
    children: "Button",
  },
};

export const Label: Story = {
  args: {
    type: "button",
    variant: "label",
    backgroundColor: "#00FFC2",
    device: "desktop",
    children: "Button",
  },
};

export const WithIcons: Story = {
  args: {
    type: "button",
    variant: "solid",
    backgroundColor: "#00FFC2",
    device: "desktop",
    leftIcon: <HiHome />,
    rightIcon: <HiDownload />,
    children: "Button",
  },
};
