import { BackgroundColor, ThemeColors } from "@/state/theme/ThemeContext";
import "./ColorChoice.module.css";

export interface IColorChoice {
  id: ThemeColors;
  color: ThemeColors;
  isSelected: boolean;
  chooseColor: (id: ThemeColors) => void;
}

const ColorChoice: React.FC<IColorChoice> = ({
  id,
  color,
  isSelected,
  chooseColor,
}) => {
  return (
    <button
      aria-label={`color-option-${color}`}
      id={id}
      onClick={() => chooseColor(id)}
      className={`
        ${BackgroundColor[color]}
        rounded-full w-10 h-10 font-bold text-[15px] relative
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
        hover:after:rounded-full`}>
      <svg
        className={isSelected ? "inline" : "hidden"}
        width="15"
        height="11"
        viewBox="0 0 15 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 5.5L4.95263 9.45263L13.4053 1"
          stroke="#161932"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default ColorChoice;
