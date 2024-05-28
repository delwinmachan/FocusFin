import { Meta, StoryObj } from "@storybook/react";
import Tab, { ITab } from "./Tab";
import { mockTabProps } from "./Tab.mocks";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};

export default meta;

export const Selected: StoryObj<typeof Tab> = {
  render: (args) => <Tab {...args} />,
};

export const Unselected: StoryObj<typeof Tab> = {
  render: (args) => <Tab {...args} />,
};

Selected.args = {
  ...mockTabProps.selected,
} as ITab;

Unselected.args = {
  ...mockTabProps.unSelected,
} as ITab;
