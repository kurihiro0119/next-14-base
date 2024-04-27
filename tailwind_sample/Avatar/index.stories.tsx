import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";
import exp from "constants";

const meta = {
  component: Avatar,
  args: {},
} as Meta<typeof Avatar>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

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

export const OtherAbatar: Story = {
  args: {
    avatarImageUrl: 'https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg',
  },
};