import { Button } from "../Button";
import { Heading } from "../Heading";
import { HeadGroup } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: HeadGroup,
  args: {
    children: (
      <>
        <Heading level={1}>見出し</Heading>
        <Button color="primary" size="small">
          詳細へ
        </Button>
      </>
    ),
  },
} satisfies Meta<typeof HeadGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};