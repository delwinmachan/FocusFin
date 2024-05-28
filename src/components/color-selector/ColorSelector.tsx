import { ThemeColors } from "@/state/theme/ThemeContext";
import ColorChoice, { IColorChoice } from "../color-choice/ColorChoice";
import "./ColorSelector.module.css";

export interface IColorSelector {
  selectedColor: ThemeColors;
  chooseColor: (id: ThemeColors) => void;
}

const redChoice: IColorChoice = {
  id: ThemeColors.RED,
  color: ThemeColors.RED,
  isSelected: false,
  chooseColor: (id: ThemeColors) => undefined,
};

const tealChoice: IColorChoice = {
  id: ThemeColors.TEAL,
  color: ThemeColors.TEAL,
  isSelected: false,
  chooseColor: (id: ThemeColors) => undefined,
};

const magentaChoice: IColorChoice = {
  id: ThemeColors.MAGENTA,
  color: ThemeColors.MAGENTA,
  isSelected: false,
  chooseColor: (id: ThemeColors) => undefined,
};

export const defaultColorChoices = [redChoice, tealChoice, magentaChoice];

const ColorSelector: React.FC<IColorSelector> = ({
  selectedColor,
  chooseColor,
}) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
      <h3 className="uppercase text-indigo2 text-h3">color</h3>
      <div className="flex gap-4 my-4">
        {defaultColorChoices.map((choice) => (
          <ColorChoice
            key={choice.id}
            id={choice.id}
            color={choice.color}
            isSelected={choice.id === selectedColor}
            chooseColor={() => chooseColor(choice.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
