import type { Meta, StoryObj } from "@storybook/react";
import Paragraph from "./Paragraph";
import { LinkParagraphProps, ParagraphProps } from "./types";

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    as: "h2",
    text: "Sig Coding",
    href: "https://sigcoding.com",
  },
  argTypes: {
    as: {
      type: "string",
      name: "As",
      description:
        "The HTML element that this component may be represented as.",
      defaultValue: "h2",
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
      description:
        "In case of using an anchor element, specify the href of it.",
      defaultValue: "https://sigcoding.com",
    },
  },
} satisfies Meta<ParagraphProps & LinkParagraphProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
