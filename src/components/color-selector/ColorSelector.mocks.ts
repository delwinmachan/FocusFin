import { ThemeColors } from "@/state/theme/ThemeContext";
import { IColorSelector, defaultColorChoices } from "./ColorSelector";

export const mockColorSelectorProps: IColorSelector = {
  selectedColor: defaultColorChoices[0].id as ThemeColors,
  chooseColor: (id: ThemeColors) => undefined,
};
