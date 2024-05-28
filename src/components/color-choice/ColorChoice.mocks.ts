import { ThemeColors } from "@/state/theme/ThemeContext";
import { IColorChoice } from "./ColorChoice";

const selected: IColorChoice = {
  id: ThemeColors.RED,
  color: ThemeColors.RED,
  isSelected: true,
  chooseColor: (id: ThemeColors) => undefined,
};

const unSelected: IColorChoice = {
  id: ThemeColors.RED,
  color: ThemeColors.RED,
  isSelected: false,
  chooseColor: (id: ThemeColors) => undefined,
};

export const mockColorChoiceProps = {
  selected,
  unSelected,
};
