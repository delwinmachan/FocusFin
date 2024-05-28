import { NextFonts, ThemeFonts } from "@/state/theme/ThemeContext";
import "./FontChoice.module.css";

export interface IFontChoice {
  id: ThemeFonts;
  isSelected: boolean;
  chooseFont: (f: ThemeFonts) => void;
}

const FontChoice: React.FC<IFontChoice> = ({ id, isSelected, chooseFont }) => {
  const selectedClasses = "bg-indigo2 text-white";
  const unselectedClasses = "bg-grey2 text-indigo1 text-opacity-75";
  return (
    <button
      id={id}
      onClick={() => chooseFont(id)}
      aria-label={`font-option-${id}`}
      className={`rounded-full w-10 h-10 font-bold text-[15px] relative
        hover:after:absolute
        hover:after:content-['']
        hover:after:w-12
        hover:after:h-12
        hover:after:inset-1/2
        hover:after:-translate-x-1/2
        hover:after:-translate-y-1/2
        hover:after:border
        hover:after:border-solid
        hover:after:border-grey2
        hover:after:rounded-full
        ${NextFonts[id]}
        ${isSelected ? selectedClasses : unselectedClasses}`}>
      Aa
    </button>
  );
};

export default FontChoice;
