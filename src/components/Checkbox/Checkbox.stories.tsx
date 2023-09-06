import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

import { CheckboxProps } from "./types";

const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  args: {
    id: "checkbox",
    disabled: false,
  },
  argTypes: {
    id: {
      description: "Checkbox ID",
      type: "string",
    },
    checkboxLabel: {
      description: "Text to appear in the right side of the checkbox",
      type: "string",
    },
    checkboxLabelStyle: {
      description: "Checkbox label style",
      type: "string",
    },
    checked: {
      description: "Assign if checkbox is checked or not by default",
      type: "boolean",
    },
    size: {
      description: "Checkbox size",
    },
    disabled: {
      description: "Assign if checkbox is disabled or not by default",
      type: "boolean",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<CheckboxProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    size: "large",
    checkboxLabel: "Checkbox label",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    checkboxLabel: "Checkbox label",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checkboxLabel: "Checkbox label",
  },
};

export const Checked: Story = {
  args: {
    size: "medium",
    checked: true,
    checkboxLabel: "Checkbox label",
  },
};

export const Disabled: Story = {
  args: {
    size: "medium",
    disabled: true,
    checkboxLabel: "Checkbox label",
  },
};

export const DisabledChecked: Story = {
  args: {
    size: "medium",
    disabled: true,
    checked: true,
    checkboxLabel: "Checkbox label",
  },
};
