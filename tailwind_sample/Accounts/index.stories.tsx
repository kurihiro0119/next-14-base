import type { Meta, StoryObj } from "@storybook/react";
import { Accounts } from ".";

type User = {
  id: string;
  name?: string | null;
  imageUrl?: string | null;
  screenName?: string | null;
}

const meta = {
  component: Accounts,
  args: {}
} as Meta<typeof Accounts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    users: [
      {
        id: "1",
        name: "John Doe",
        imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
        screenName: "johndoe"
      },
      {
        id: "2",
        name: "Alice Smith",
        imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
        screenName: "alicesmith"
      },
      {
        id: "3",
        name: "Bob Brown",
        imageUrl: "https://pbs.twimg.com/profile_images/2754162737/42d1a8f65a11f670f207c823461ed168_400x400.jpeg",
        screenName: "bobbrown"
      }
    ]
  }
};
