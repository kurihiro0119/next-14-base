import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta = {
  component: Button,
  args: { children: "確認" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: "small" },
};

export const Medium: Story = {
  args: { size: "medium" },
};

export const Large: Story = {
  args: { size: "large" },
};

export const Secondary: Story = {
  args: { color: "secondary" },
};

export const Alert: Story = {
  args: { color: "alert" },
};
