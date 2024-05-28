import { Meta, StoryObj } from "@storybook/react";
import FontSelector, { IFontSelector } from "./FontSelector";
import { mockFontSelectorProps } from "./FontSelector.mocks";

const meta: Meta<typeof FontSelector> = {
  title: "components/Font Selector",
  component: FontSelector,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const SelectedFont: StoryObj<typeof FontSelector> = {
  render: (args) => <FontSelector {...args} />,
};

SelectedFont.args = {
  ...mockFontSelectorProps,
} as IFontSelector;
