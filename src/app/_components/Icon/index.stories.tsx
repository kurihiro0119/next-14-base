import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps } from ".";

const meta = {
  component: Icon,
  args: {
    type: "account",
  },
} as Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Alert: Story = {
  args: {
    type: "alert",
    color: "orange",
    size: "medium",
  },
};

export const Camera: Story = {
  args: {
    type: "camera",
    color: "gray",
    size: "large",
  },
};

export const Comments: Story = {
  args: {
    type: "comments",
    color: "black",
    size: "small",
  },
};

export const Gear: Story = {
  args: {
    type: "gear",
    color: "gray",
    size: "medium",
  },
};

export const HeartBorder: Story = {
  args: {
    type: "heart-border",
    color: "gray",
    size: "medium",
  },
};

export const Heart: Story = {
  args: {
    type: "heart",
    color: "gray",
    size: "medium",
  },
};

export const Home: Story = {
  args: {
    type: "home",
    color: "gray",
    size: "medium",
  },
};

export const PaperPlane: Story = {
  args: {
    type: "paper-plane",
    color: "gray",
    size: "medium",
  },
};

export const Photos: Story = {
  args: {
    type: "photos",
    color: "gray",
    size: "medium",
  },
};

export const TrashBox: Story = {
  args: {
    type: "trash-box",
    color: "gray",
    size: "medium",
  },
};

export const Upload: Story = {
  args: {
    type: "upload",
    color: "gray",
    size: "medium",
  },
};

export const User: Story = {
  args: {
    type: "user",
    color: "gray",
    size: "medium",
  },
};

export const Zoom: Story = {
  args: {
    type: "zoom",
    color: "gray",
    size: "medium",
  },
};
