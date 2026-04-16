import upIcon from "/assets/icon-arrow-up.svg";
import downIcon from "/assets/icon-arrow-down.svg";

function TimeSettings({ localSettings, setLocalSettings }) {
  function setDuration(type, value) {
    const numericValue = value === "" ? "" : Math.max(0, Number(value));

    setLocalSettings(prev => ({
      ...prev,
      duration: {
        ...prev.duration,
        [type]: numericValue
      }
    }));
  }

  function changeDuration(type, delta) {
    setLocalSettings(prev => {
      const newValue = Math.max(0, Number(prev.duration[type]) + delta);

      return {
        ...prev,
        duration: {
          ...prev.duration,
          [type]: newValue
        }
      };
    });
  }

  return (
    <div className="pb-6 border-b border-grey-200 flex flex-col gap-4">
      <h2 className="text-blue-900 font-bold text-[11px] leading-3.5 tracking-[4.23px] uppercase text-center">Time (Minutes)</h2>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label htmlFor="pomodoro" className="opacity-40 lowercase font-bold">Pomodoro</label>

          <div className="relative w-35">
            <input
              type="number"
              id="pomodoro"
              min="0"
              value={localSettings.duration.pomodoro}
              onChange={(e) => setDuration("pomodoro", e.target.value)}
              className="w-full h-10 pl-4 pr-8 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold"
            />

            <div className="absolute right-4 top-[9.5px] bottom-[9.5px] flex flex-col justify-between">
              <button type="button" onClick={() => changeDuration("pomodoro", 1)}>
                <img src={upIcon} alt="Up icon" />
              </button>

              <button type="button" onClick={() => changeDuration("pomodoro", -1)}>
                <img src={downIcon} alt="Down icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="short" className="opacity-40 lowercase font-bold">Short break</label>

          <div className="relative w-35">
            <input
              type="number"
              id="short"
              min="0"
              value={localSettings.duration.short}
              onChange={(e) => setDuration("short", e.target.value)}
              className="w-full h-10 pl-4 pr-8 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold"
            />

            <div className="absolute right-4 top-[9.5px] bottom-[9.5px] flex flex-col justify-between">
              <button type="button" onClick={() => changeDuration("short", 1)}>
                <img src={upIcon} alt="Up icon" />
              </button>

              <button type="button" onClick={() => changeDuration("short", -1)}>
                <img src={downIcon} alt="Down icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <label htmlFor="long" className="opacity-40 lowercase font-bold">Long break</label>

          <div className="relative w-35">
            <input
              type="number"
              id="long"
              min="0"
              value={localSettings.duration.long}
              onChange={(e) => setDuration("long", e.target.value)}
              className="w-full h-10 pl-4 pr-8 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold"
            />

            <div className="absolute right-4 top-[9.5px] bottom-[9.5px] flex flex-col justify-between">
              <button type="button" onClick={() => changeDuration("long", 1)}>
                <img src={upIcon} alt="Up icon" />
              </button>

              <button type="button" onClick={() => changeDuration("long", -1)}>
                <img src={downIcon} alt="Down icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSettings;