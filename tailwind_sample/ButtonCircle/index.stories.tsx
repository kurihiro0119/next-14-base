import type { Meta, StoryObj } from "@storybook/react";
import { ButtonCircle } from ".";

const meta = {
  component: ButtonCircle,
} as Meta<typeof ButtonCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
    color: "orange",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
