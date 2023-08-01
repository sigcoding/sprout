import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';
import { ParagraphProps } from './Paragraph.types';

const meta = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  args: {
    as: "h2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at justo quis mi semper tincidunt. Maecenas eu dignissim turpis. Quisque.",
  },
  argTypes: {
    as: {
      type: "string",
      name: "As",
    },
    text: {
      type: "string",
      name: "Title",
    }
  }
} satisfies Meta<ParagraphProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
