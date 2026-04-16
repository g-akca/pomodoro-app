import upIcon from "/assets/icon-arrow-up.svg";
import downIcon from "/assets/icon-arrow-down.svg";

function DurationInput({ id, label, value, onChange, onIncrement, onDecrement }) {
  return (
    <div className="flex justify-between items-center">
      <label htmlFor={id} className="opacity-40 lowercase font-bold">{label}</label>

      <div className="relative w-35">
        <input
          type="number"
          id={id}
          min="0"
          value={value}
          onChange={onChange}
          className="w-full h-10 pl-4 pr-8 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold"
        />

        <div className="absolute right-4 top-[9.5px] bottom-[9.5px] flex flex-col justify-between">
          <button type="button" onClick={onIncrement}>
            <img src={upIcon} alt="Up icon" />
          </button>

          <button type="button" onClick={onDecrement}>
            <img src={downIcon} alt="Down icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DurationInput;