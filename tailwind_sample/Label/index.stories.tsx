import { Label } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Label,
  args: {
    children: "見出し",
  },
} as Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const XSmall: Story = {
  args: {
    size: "xsmall",
  },
};

export const Small: Story = {
  args: {
    size: "small",
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
