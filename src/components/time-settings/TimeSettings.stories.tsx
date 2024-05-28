import { Meta, StoryObj } from "@storybook/react";
import TimeSettings from "./TimeSettings";

const meta: Meta<typeof TimeSettings> = {
  title: "components/Time Settings",
  component: TimeSettings,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const Base: StoryObj<typeof TimeSettings> = {
  render: (args) => <TimeSettings {...args} />,
};
