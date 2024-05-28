import { Meta, StoryObj } from "@storybook/react";
import Input, { IInput } from "./Input";
import { mockInputProps } from "./Input.mocks";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const BaseInput: StoryObj<typeof Input> = {
  render: (args) => <Input {...args} />,
};

BaseInput.args = {
  ...mockInputProps.pomodoro,
} as IInput;
