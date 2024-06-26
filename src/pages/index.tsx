import SettingsModal from "@/components/settings-modal/SettingsModal";
import TabBar from "@/components/tab-bar/TabBar";
import TimerDial from "@/components/timer-dial/TimerDial";
import ThemeContext, { NextFonts } from "@/state/theme/ThemeContext";
import TimerContext, { TimerVariants } from "@/state/timer/TimerContext";
import { useContext, useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeFlag, setResumeFlag] = useState(0);
  const [trainMode, setTrainMode] = useState(false);
  const [selectedTabState, setselectedTabState] = useState<TimerVariants>(TimerVariants.POMODORO);
  const { font } = useContext(ThemeContext);
  const { activeTimer, timeRemaining, timerDurations } =
    useContext(TimerContext);
  const fontClasses = NextFonts[font];
  const timeDuration = timerDurations[activeTimer];
  const secTimeRemaining = timeRemaining;
  return (
    <div
      className={`flex flex-col items-center h-full sm:justify-center ${fontClasses}`}>
      <h2 className="text-[24px] sm:text-h2 text-grey my-4">FOCUS</h2>
      <div className="my-4">
        <TabBar
          selectedTab={(selected: TimerVariants) =>{setselectedTabState(selected)}}
          resumeFlag={resumeFlag}
        />
      </div>
      <div className="my-4">
        <TimerDial
          timeRemaining={secTimeRemaining}
          timeDuration={timeDuration}
          trainMode={trainMode}
          resume={() => {trainMode && setResumeFlag(Math.random()*400)}}
        />
      </div>
      <button
        aria-label="open-settings"
        className="my-8 text-grey1 opacity-50 hover:opacity-100"
        onClick={() => setIsModalOpen(true)}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0378 15.365L26.9654 17.682C27.229 17.899 27.3054 18.2771 27.1318 18.578L24.3568 23.429C24.1834 23.73 23.8226 23.849 23.5104 23.73L20.0555 22.323C19.341 22.883 18.557 23.345 17.7107 23.702L17.1903 27.412C17.1349 27.741 16.8504 28 16.5035 28H10.9535C10.6066 28 10.3221 27.741 10.2667 27.412L9.74634 23.702C8.89998 23.345 8.11606 22.8761 7.40147 22.323L3.94656 23.73C3.63437 23.856 3.27366 23.73 3.1002 23.429L0.325147 18.578C0.151686 18.27 0.228043 17.892 0.491649 17.682L3.41928 15.365C3.3638 14.917 3.32218 14.462 3.32218 14C3.32218 13.538 3.3638 13.083 3.41928 12.635L0.491649 10.318C0.228043 10.101 0.151686 9.72302 0.325147 9.42199L3.10026 4.57099C3.27366 4.26996 3.63443 4.15098 3.94662 4.26996L7.40153 5.67697C8.11606 5.11699 8.90005 4.65499 9.74641 4.29799L10.2667 0.588001C10.3222 0.259022 10.6067 0 10.9535 0H16.5036C16.8504 0 17.1349 0.259022 17.1974 0.588001L17.7177 4.29799C18.564 4.65499 19.348 5.12394 20.0626 5.67697L23.5175 4.26996C23.8297 4.14396 24.1904 4.26996 24.3638 4.57099L27.1389 9.42199C27.3123 9.72997 27.236 10.108 26.9724 10.318L24.0378 12.635C24.0933 13.083 24.1349 13.538 24.1349 14C24.1349 14.462 24.0933 14.917 24.0378 15.365ZM8.87221 14C8.87221 16.709 11.0437 18.9 13.7285 18.9C16.4134 18.9 18.5849 16.7091 18.5849 14.0001C18.5849 11.2911 16.4134 9.10004 13.7285 9.10004C11.0437 9.10004 8.87221 11.291 8.87221 14Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <SettingsModal
        trainMode={(mode) => setTrainMode(mode)}
        isOpen={isModalOpen}
        selectedTabState={selectedTabState}
        setIsOpen={setIsModalOpen}
      />
    </div>
  );
}
