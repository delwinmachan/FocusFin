import { ThemeFonts } from "@/state/theme/ThemeContext";
import FontChoice, { IFontChoice } from "../font-choice/FontChoice";
import "./FontSelector.module.css";

export interface IFontSelector {
  selectedFont: ThemeFonts;
  chooseFont: (f: ThemeFonts) => void;
}

const sans: IFontChoice = {
  id: ThemeFonts.SANS,
  isSelected: false,
  chooseFont: (f: ThemeFonts) => undefined,
};

const serif: IFontChoice = {
  id: ThemeFonts.SERIF,
  isSelected: false,
  chooseFont: (f: ThemeFonts) => undefined,
};

const mono: IFontChoice = {
  id: ThemeFonts.MONO,
  isSelected: false,
  chooseFont: (f: ThemeFonts) => undefined,
};

const fontChoiceList = [sans, serif, mono];

const FontSelector: React.FC<IFontSelector> = ({
  selectedFont,
  chooseFont,
}) => (
  <div className="flex flex-col items-center sm:flex-row sm:justify-between">
    <h3 className="uppercase text-indigo2 ">Font</h3>
    <div className="flex gap-4 my-4">
      {fontChoiceList.map((tab) => (
        <FontChoice
          key={tab.id}
          id={tab.id}
          isSelected={tab.id === selectedFont}
          chooseFont={chooseFont}
        />
      ))}
    </div>
  </div>
);

export default FontSelector;
