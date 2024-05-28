import { TimerVariants } from "@/state/timer/TimerContext";
import { IInput } from "./Input";

const pomodoro: IInput = {
  id: TimerVariants.POMODORO,
  label: "pomodoro",
  value: 25,
  setValue: (id: TimerVariants, v: number) => undefined,
};

export const mockInputProps = {
  pomodoro,
};
