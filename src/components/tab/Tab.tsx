import ThemeContext, { BackgroundColor } from "@/state/theme/ThemeContext";
import { TimerVariants } from "@/state/timer/TimerContext";
import { useContext } from "react";
import styles from "./Tab.module.css";
import { useEffect } from "react";
export interface ITab {
  text: string;
  id: TimerVariants;
  isSelected: boolean;
  resumeFlag: boolean;
  selectTab: (id: TimerVariants) => void;
}

const Tab: React.FC<ITab> = ({
  text,
  id,
  isSelected,
  resumeFlag,
  selectTab,
}) => {
  const { color } = useContext(ThemeContext);

  return (
    <button
      aria-label={`select-timer-${id}`}
      onClick={() => selectTab(id)}
      className={`
        cursor-pointer
        px-4 py-2 rounded-full
        text-body2 sm:text-body1
        ${styles.tabLabel}
        ${
          isSelected ? BackgroundColor[color] + " text-indigo1" : "text-grey1"
        }`}>
      {text}
    </button>
  );
};

export default Tab;
