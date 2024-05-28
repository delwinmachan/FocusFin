import TimerContext, { TimerVariants } from "@/state/timer/TimerContext";
import { useContext, useEffect } from "react";
import Tab, { ITab } from "../tab/Tab";
import "./TabBar.module.css";

const shortBreak: ITab = {
  text: "short break",
  id: TimerVariants.SHORT,
  isSelected: false,
  selectTab: (id: TimerVariants) => undefined,
};

interface TabBarProps {
  resumeFlag: Number;
  selectedTab: (selected: TimerVariants) => undefined;
}

const longBreak: ITab = {
  text: "long break",
  id: TimerVariants.LONG,
  isSelected: false,
  selectTab: (id: TimerVariants) => undefined,
};

const pomodoro: ITab = {
  text: "pomodoro",
  id: TimerVariants.POMODORO,
  isSelected: false,
  selectTab: (id: TimerVariants) => undefined,
};

const defaultTabList = [pomodoro, shortBreak, longBreak];

const TabBar: React.FC<TabBarProps> = ({ resumeFlag, selectedTab }) => {
  const {
    activeTimer,
    setActiveTimer,
    paused,
    setPaused,
    timerDurations,
    setTimeRemaining,
  } = useContext(TimerContext);

  const handleSelect = (v: TimerVariants) => {
    // let continueChange = true;
    // if (!paused) {
    //   continueChange = confirm(
    //     "Changing the active timer will reset the countdown. Continue?"
    //   );
    // }

    // if (!continueChange) {
    //   return;
    // }
    setActiveTimer(v);
    const timeDuration = timerDurations[v];
    setTimeRemaining(timeDuration);
    setPaused(true);
  };

  useEffect(() => {
    selectedTab(activeTimer);
  }, [activeTimer]);

  useEffect(() => {
    if(resumeFlag!==0){
      if (
        activeTimer === TimerVariants.POMODORO ||
        activeTimer === TimerVariants.LONG
      ) {
        handleSelect(TimerVariants.SHORT);
      } 
      else
       {
        handleSelect(TimerVariants.POMODORO);
      }
    }
  }, [resumeFlag]);

  return (
    <div className="inline-flex relative rounded-full gap-2 m-4 p-2 bg-indigo2">
      {defaultTabList.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          text={tab.text}
          isSelected={tab.id === activeTimer}
          selectTab={handleSelect}
          resumeFlag={resumeFlag}
        />
      ))}
    </div>
  );
};

export default TabBar;
