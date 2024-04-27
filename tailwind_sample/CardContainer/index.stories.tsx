import type {
  Meta,
  StoryObj
} from "@storybook/react";

import
  {
    CardContainer
  } from ".";
import exp from "constants";

const meta = {
  component: CardContainer,
  args: {}
} as Meta<typeof CardContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold">Card 1</h3>
          <p className="text-sm text-gray-500">This is a card.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold">Card 2</h3>
          <p className="text-sm text-gray-500">This is a card.</p>
        </div>
        <div className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-lg font-semibold">Card 3</h3>
          <p className="text-sm text-gray-500">This is a card.</p>
        </div>
      </>
    )
  }
};