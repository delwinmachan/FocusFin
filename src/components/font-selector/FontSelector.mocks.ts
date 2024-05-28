import { ThemeFonts } from "@/state/theme/ThemeContext";
import { IFontSelector } from "./FontSelector";

export const mockFontSelectorProps: IFontSelector = {
  selectedFont: ThemeFonts.SANS,
  chooseFont: (f: ThemeFonts) => undefined,
};
