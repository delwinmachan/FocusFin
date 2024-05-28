import { TimerVariants } from "@/state/timer/TimerContext";
import "./Input.module.css";

export interface IInput {
  id: TimerVariants;
  label: string;
  value: number;
  setValue: (id: TimerVariants, v: number) => void;
}

enum Delta {
  INC = 1,
  DEC = -1,
}

const Input: React.FC<IInput> = ({ id, label, value, setValue }) => {
  const handleChange = (delta: Delta) => {
    const newVal = value + delta;
    if (newVal <= 0) {
      return;
    }

    setValue(id, newVal);
  };

  return (
    <div className="inline-flex justify-between w-full items-center sm:flex-col sm:items-start">
      <label className="my-2 text-indigo1 opacity-25">{label}</label>
      <div className="inline-flex items-center max-w-[140px] bg-grey2 px-4 py-2 rounded-lg text-body1">
        <input
          type="text"
          readOnly
          value={value}
          pattern="^(0|[1-9][0-9]*)$"
          placeholder="25"
          className="cursor-default outline-none bg-grey2 text-indigo1 font-bold w-10/12"
        />
        <span className="inline-flex flex-col">
          {/* Up button */}
          <button
            aria-label={`increase-time-${id}`}
            className="opacity-25 hover:opacity-100 transition-opacity py-1"
            onClick={() => handleChange(Delta.INC)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                strokeWidth="2"
                d="M1 6l6-4 6 4"
              />
            </svg>
          </button>

          {/* Down button */}
          <button
            aria-label={`decrease-time-${id}`}
            className="opacity-25 hover:opacity-100 transition-opacity py-1"
            onClick={() => handleChange(Delta.DEC)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7">
              <path
                fill="none"
                stroke="#1E213F"
                strokeWidth="2"
                d="M1 1l6 4 6-4"
              />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Input;
