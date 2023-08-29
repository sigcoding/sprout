import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Textfield from "./Textfield";
import { HiHome, HiPlus, HiDownload } from "react-icons/hi";
import { TextfieldProps } from "./types";

const meta = {
  title: "Forms/Textfield",
  component: Textfield,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      type: "string",
      description: "Input type, for example file, color, text, etc",
    },
    className: {
      type: "string",
      description: "Arg to customize input style",
    },
    leftIcon: {
      description: "Textfield left icon",
      options: ["None", "Home", "Plus", "Download"],
      control: {
        type: "inline-radio",
      },
      mapping: {
        None: <></>,
        Home: <HiHome />,
        Plus: <HiPlus />,
        Download: <HiDownload />,
      },
    },
    rightIcon: {
      description: "Textfield right icon",
      options: ["Home", "Plus", "Download"],
      control: {
        type: "inline-radio",
      },
      mapping: {
        None: <></>,
        Home: <HiHome />,
        Plus: <HiPlus />,
        Download: <HiDownload />,
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<TextfieldProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Label",
    leftIcon: <HiHome />,
  },
};
