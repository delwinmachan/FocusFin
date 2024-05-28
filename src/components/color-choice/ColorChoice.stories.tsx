import { Meta, StoryObj } from "@storybook/react";
import ColorChoice, { IColorChoice } from "./ColorChoice";
import { mockColorChoiceProps } from "./ColorChoice.mocks";

const meta: Meta<typeof ColorChoice> = {
  title: "Components/ColorChoice",
  component: ColorChoice,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const Selected: StoryObj<typeof ColorChoice> = {
  render: (args) => <ColorChoice {...args} />,
};

export const Unselected: StoryObj<typeof ColorChoice> = {
  render: (args) => <ColorChoice {...args} />,
};

Selected.args = {
  ...mockColorChoiceProps.selected,
} as IColorChoice;

Unselected.args = {
  ...mockColorChoiceProps.unSelected,
} as IColorChoice;
