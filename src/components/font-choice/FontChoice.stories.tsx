import { Meta, StoryObj } from "@storybook/react";
import FontChoice, { IFontChoice } from "./FontChoice";
import { mockFontChoiceProps } from "./FontChoice.mocks";

const meta: Meta<typeof FontChoice> = {
  title: "Components/FontChoice",
  component: FontChoice,
  decorators: [
    (Story) => <div className="bg-white h-full w-full p-4">{Story()}</div>,
  ],
};

export default meta;

export const Selected: StoryObj<typeof FontChoice> = {
  render: (args) => <FontChoice {...args} />,
};

export const Unselected: StoryObj<typeof FontChoice> = {
  render: (args) => <FontChoice {...args} />,
};

Selected.args = {
  ...mockFontChoiceProps.selected,
} as IFontChoice;

Unselected.args = {
  ...mockFontChoiceProps.unSelected,
} as IFontChoice;
