import { Meta, StoryObj } from "@storybook/react";
import TimerDial from "./TimerDial";

const meta: Meta<typeof TimerDial> = {
  title: "Components/TimerDial",
  component: TimerDial,
  decorators: [
    (Story) => (
      <div className="fixed top-0 left-0 h-full w-full p-4">{Story()}</div>
    ),
  ],
};

export default meta;

export const Timer: StoryObj<typeof TimerDial> = {
  render: (args) => <TimerDial {...args} />,
};

Timer.args = {
  timeDuration: 1500,
  timeRemaining: 900,
};
