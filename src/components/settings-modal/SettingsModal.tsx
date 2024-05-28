import ThemeContext, { ThemeColors } from "@/state/theme/ThemeContext";
import TimerContext from "@/state/timer/TimerContext";
import { useContext, useEffect, useState } from "react";
import ColorSelector from "../color-selector/ColorSelector";
import FontSelector from "../font-selector/FontSelector";
import TimeSettings from "../time-settings/TimeSettings";
import "./SettingsModal.module.css";
import AudioUploader from "../audio-selector/AudioUploader";

export interface ISettingsModal {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  selectedTabState: string;
  trainMode: (v: boolean) => void;
}

const SettingsModal: React.FC<ISettingsModal> = ({
  isOpen,
  setIsOpen,
  selectedTabState,
  trainMode,
}) => {
  const { color, setColor, font, setFont } = useContext(ThemeContext);
  const { activeTimer, timerDurations, setTimerDuration } =
    useContext(TimerContext);

  const [tempColor, setTempColor] = useState(color);
  const [isSelected, setIsSelected] = useState(false);
  const [tempFont, setTempFont] = useState(font);
  const [tempDurations, setTempDurations] = useState(timerDurations);
  const selectedClasses = "bg-indigo2";
  const unselectedClasses = "bg-grey1 text-opacity-75";

  useEffect(() => {
    if (selectedTabState === "pomodoro") {
      setColor(ThemeColors.RED);
    } else {
      setColor(ThemeColors.TEAL);
    }
  }, [selectedTabState]);
  const handleClose = (doSave: boolean) => {
    setIsOpen(false);

    if (!doSave) {
      // reset local state to initial state
      setTempColor(color);
      setTempFont(font);
      setTempDurations(timerDurations);

      return;
    }
    trainMode(isSelected);

    setFont(tempFont);

    let continueChange = true;
    if (timerDurations[activeTimer] !== tempDurations[activeTimer]) {
      continueChange = confirm(
        "Changing the time durations will reset the countdown. Continue?"
      );
    }

    if (continueChange) {
      setTimerDuration(tempDurations);
    }
  };

  if (!isOpen) {
    return <></>;
  }

  return (
    <div
      className={`
      fixed
      top-0
      left-0
      h-full
      w-full
      items-center
      justify-center
      overflow-x-hidden
      overflow-y-scroll
      sm:flex
      }`}>
      <div
        className={`
        bg-white
        z-20
        text-indigo2
        content-['']
        mx-4
        mt-4
        mb-8
        sm:m-auto
        h-min
        border
        rounded-2xl
        relative
        `}>
        {/* Settings header */}
        <div className="px-8 py-4 items-center flex justify-between">
          <h1 className="text-indigo2 text-[20px] sm:text-h2 font-bold">
            Settings
          </h1>
          <button
            aria-label="close-settings-modal-without-saving"
            onClick={() => handleClose(false)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3639 2.05044L11.9497 0.63623L6.99995 5.58598L2.0502 0.63623L0.635986 2.05044L5.58573 7.00019L0.635986 11.9499L2.0502 13.3642L6.99995 8.4144L11.9497 13.3642L13.3639 11.9499L8.41416 7.00019L13.3639 2.05044Z"
                  fill="#1E213F"
                />
              </g>
            </svg>
          </button>
        </div>

        <hr className="opacity-10" />

        <div className="px-8 py-4">
          <TimeSettings
            durations={tempDurations}
            setDurations={setTempDurations}></TimeSettings>
        </div>

        <hr className="opacity-10 sm:mx-8" />

        <div className="px-8 py-4">
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <h3 className="uppercase text-indigo2 ">TRAIN Mode</h3>
            <div className="flex gap-4 my-4">
              <button
                // id={id}
                onClick={() => {
                  setIsSelected((prev) => {
                    return !prev;
                  });
                }}
                // aria-label={`font-option-${id}`}
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
                ${isSelected ? selectedClasses : unselectedClasses}`}></button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4">
          <FontSelector
            selectedFont={tempFont}
            chooseFont={setTempFont}></FontSelector>
        </div>
        <div className="px-8 py-4">
          <AudioUploader
         ></AudioUploader>
        </div>
        <hr className="opacity-10 sm:mx-8" />

        <div className="px-8 py-4">
          {/* <ColorSelector
            selectedColor={tempColor}
            chooseColor={setTempColor}></ColorSelector> */}
        </div>

        {/* Button */}
        <div className="w-full absolute -translate-y-1/2 flex z-30">
          <button
            aria-label="apply-and-close-settings-modal-button"
            onClick={() => handleClose(true)}
            className={`
              cursor-pointer
              mx-auto
              px-8
              py-2
              text-white
              rounded-full
              font-bold
              bg-${color}`}>
            Apply
          </button>
        </div>
      </div>
      {/* Backdrop */}
      <div
        className={`
        fixed w-full h-full
        bg-[#0A0C1C] bg-opacity-50
        top-0 left-0 z-10`}></div>
    </div>
  );
};

export default SettingsModal;
