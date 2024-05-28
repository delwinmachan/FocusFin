import { Meta, StoryObj } from "@storybook/react";
import SettingsModal, { ISettingsModal } from "./SettingsModal";
import { mockProps } from "./SettingsModal.mocks";

const meta: Meta<typeof SettingsModal> = {
  title: "Components/Settings Modal",
  component: SettingsModal,
};

export default meta;

export const BaseSettingsModal: StoryObj<typeof SettingsModal> = {
  render: (args) => <SettingsModal {...args} />,
};

BaseSettingsModal.args = {
  ...mockProps.settingsModal,
} as ISettingsModal;
