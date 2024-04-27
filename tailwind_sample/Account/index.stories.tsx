import type { Meta, StoryObj } from "@storybook/react";
import { Account } from ".";

const meta = {
  component: Account,
  args: {}
} as Meta<typeof Account>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "John Doe",
    screenName: "johndoe",
  }
};

export const Small: Story = {
  args: {
    name: "John Doe",
    imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
    screenName: "johndoe",
    avatarSize: "small"
  }
};

export const Medium: Story = {
  args: {
    name: "John Doe",
    imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
    screenName: "johndoe",
    avatarSize: "medium"
  }
};

export const Large: Story = {
  args: {
    name: "John Doe",
    imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
    screenName: "johndoe",
    avatarSize: "large"
  }
};