import { Meta, StoryObj } from "@storybook/react";
import ColorSelector, { IColorSelector } from "./ColorSelector";
import { mockColorSelectorProps } from "./ColorSelector.mocks";

const meta: Meta<typeof ColorSelector> = {
  title: "components/Color Selector",
  component: ColorSelector,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const SelectedColor: StoryObj<typeof ColorSelector> = {
  render: (args) => <ColorSelector {...args} />,
};

SelectedColor.args = {
  ...mockColorSelectorProps,
} as IColorSelector;
