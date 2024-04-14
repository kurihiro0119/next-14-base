import { AlertLabel } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: AlertLabel,
  args: {
    children: "Error",
  }
} as Meta<typeof AlertLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};