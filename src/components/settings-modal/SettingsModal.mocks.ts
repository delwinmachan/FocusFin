import { ISettingsModal } from "./SettingsModal";

const settingsModal: ISettingsModal = {
  isOpen: true,
  setIsOpen: (v: boolean) => undefined,
};

export const mockProps = {
  settingsModal,
};
