import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialogModal } from ".";
import { Button } from "../Button";

const meta = {
  component: AlertDialogModal,
  args: {},
} as Meta<typeof AlertDialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "削除します",
    messageNode: "本当に削除しますか？",
    actionNode: (
      <>
        <Button color="alert">キャンセル</Button>
        <Button color="primary">はい</Button>
      </>
    )
  },
};

export const WithCustomOverlay: Story = {
  args: {
    title: "削除します",
    messageNode: "本当に削除しますか？",
    actionNode: (
      <>
        <Button color="alert">キャンセル</Button>
        <Button color="primary">はい</Button>
      </>
    ),
    overlayProps: {
      className: "bg-black bg-opacity-50",
    }
  },
};