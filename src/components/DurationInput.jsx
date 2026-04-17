import UpIcon from "./icons/UpIcon";
import DownIcon from "./icons/DownIcon";

function DurationInput({ id, label, value, onChange, onIncrement, onDecrement }) {
  return (
    <div className="flex justify-between items-center tablet:flex-col tablet:items-stretch tablet:gap-2">
      <label htmlFor={id} className="opacity-40 lowercase font-bold text-base leading-base">{label}</label>

      <div className="relative w-35">
        <input
          type="number"
          id={id}
          min="0"
          value={value}
          onChange={onChange}
          className="w-full h-10 tablet:h-12 pl-4 pr-8 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold"
        />

        <div className="absolute right-4 top-2.5 bottom-2.5 tablet:top-3.25 tablet:bottom-3.25 flex flex-col justify-between">
          <button type="button" onClick={onIncrement} aria-label="Increment">
            <UpIcon className="cursor-pointer transition-all duration-300 text-grey-400 hover:text-blue-850" />
          </button>

          <button type="button" onClick={onDecrement} aria-label="Decrement">
            <DownIcon className="cursor-pointer transition-all duration-300 text-grey-400 hover:text-blue-850" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DurationInput;