import type { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";
import { SectionTitleProps } from "./types";

const meta = {
  title: "Typography/SectionTitle",
  component: SectionTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    size: "h4",
    text: "Sig Coding",
  },
  argTypes: {
    size: {
      type: "string",
      name: "Size",
      description: "Size of the component text",
      defaultValue: "h4",
    },
    text: {
      type: "string",
      name: "Text",
      description: "Text that will be displayed at the component.",
      defaultValue: "Sig Coding",
    },
    href: {
      type: "string",
      name: "Href",
      description: "Href of the anchor element ",
    },
  },
} satisfies Meta<SectionTitleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
