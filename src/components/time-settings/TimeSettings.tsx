import TimerContext, {
  TimerDurations,
  TimerVariants,
} from "@/state/timer/TimerContext";
import { useContext } from "react";
import Input from "../input/Input";
import "./TimeSettings.module.css";

interface ITimerSettings {
  durations: TimerDurations;
  setDurations: (td: TimerDurations) => void;
}

const TimeSettings: React.FC<ITimerSettings> = ({
  durations,
  setDurations,
}) => {
  const { activeTimer, setTimeRemaining } = useContext(TimerContext);
  const handleDurationChange = (id: TimerVariants, v: number) => {
    const newDurations = {
      ...durations,
      [id]: v,
    };
    setDurations(newDurations);

    if (activeTimer === id) {
      setTimeRemaining(v);
    }
  };

  return (
    <>
      <h3 className="uppercase text-indigo2 text-h3 text-center mx-auto sm:mr-auto sm:text-left">
        time (minutes)
      </h3>
      <div className="flex flex-col sm:flex-row gap-4 my-4">
        <Input
          id={TimerVariants.POMODORO}
          label="pomodoro"
          value={durations[TimerVariants.POMODORO]}
          setValue={handleDurationChange}
        />

        <Input
          id={TimerVariants.SHORT}
          label="short break"
          value={durations[TimerVariants.SHORT]}
          setValue={handleDurationChange}
        />

        <Input
          id={TimerVariants.LONG}
          label="long break"
          value={durations[TimerVariants.LONG]}
          setValue={handleDurationChange}
        />
      </div>
    </>
  );
};

export default TimeSettings;
