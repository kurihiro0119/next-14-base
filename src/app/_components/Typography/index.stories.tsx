import { Typography } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Typography,
  args: {
    children: "テキスト".repeat(3),
  }
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Bold: Story = {
  args: {
    bold: true,
  },
};

export const Xsmall: Story = {
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

export const Span: Story = {
  args: {
    tag: "span",
  },
};

export const Li: Story = {
  args: {
    tag: "li",
  },
};