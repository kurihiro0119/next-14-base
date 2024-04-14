import { CommentBox } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CommentBox,
  args: {
    inputProps: { placeholder: "コメントを入力してください" },
  }
} satisfies Meta<typeof CommentBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};