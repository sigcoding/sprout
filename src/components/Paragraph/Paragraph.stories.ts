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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo quis mi semper tincidunt. Maecenas eu dignissim turpis. Quisque.",
    href: "https://sigcoding.com",
  },
  argTypes: {
    as: {
      type: "string",
      name: "As",
    },
    text: {
      type: "string",
      name: "Title",
    },
    href: {
      type: "string",
      name: "Href",
    },
  },
} satisfies Meta<ParagraphProps & LinkParagraphProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
