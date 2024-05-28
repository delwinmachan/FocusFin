import { TimerVariants } from "@/state/timer/TimerContext";
import { ITab } from "./Tab";

const selected: ITab = {
  text: "short break",
  id: TimerVariants.SHORT,
  isSelected: true,
  selectTab: (id: TimerVariants) => undefined,
};

const unSelected: ITab = {
  text: "short break",
  id: TimerVariants.SHORT,
  isSelected: false,
  selectTab: (id: TimerVariants) => undefined,
};

export const mockTabProps = {
  selected,
  unSelected,
};
