import { ThemeFonts } from "@/state/theme/ThemeContext";
import { IFontChoice } from "./FontChoice";

const selected: IFontChoice = {
  id: ThemeFonts.SANS,
  isSelected: true,
  chooseFont: (f: ThemeFonts) => undefined,
};

const unSelected: IFontChoice = {
  id: ThemeFonts.SANS,
  isSelected: false,
  chooseFont: (f: ThemeFonts) => undefined,
};

export const mockFontChoiceProps = {
  selected,
  unSelected,
};
