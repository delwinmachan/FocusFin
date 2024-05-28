import { ISettingsModal } from "./SettingsModal";

const settingsModal: ISettingsModal = {
  isOpen: true,
  setIsOpen: (v: boolean) => undefined,
  trainMode: (v: boolean) => undefined,
  selectedTabState: "Pomodoro",
 
};

export const mockProps = {
  settingsModal,
};
