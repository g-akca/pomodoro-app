import DurationInput from "./DurationInput";

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
      <h2 className="text-blue-900 font-bold text-[11px] tablet:text-[13px] leading-3.5 tablet:leading-base tracking-[4.23px] tablet:tracking-[5px] uppercase text-center tablet:text-start">Time (Minutes)</h2>

      <div className="flex flex-col gap-2 tablet:grid tablet:grid-cols-3 tablet:gap-6">
        <DurationInput
          id="pomodoro"
          label="Pomodoro"
          value={localSettings.duration.pomodoro}
          onChange={(e) => setDuration("pomodoro", e.target.value)}
          onIncrement={() => changeDuration("pomodoro", 1)}
          onDecrement={() => changeDuration("pomodoro", -1)}
        />

        <DurationInput
          id="short"
          label="Short break"
          value={localSettings.duration.short}
          onChange={(e) => setDuration("short", e.target.value)}
          onIncrement={() => changeDuration("short", 1)}
          onDecrement={() => changeDuration("short", -1)}
        />

        <DurationInput
          id="long"
          label="Long break"
          value={localSettings.duration.long}
          onChange={(e) => setDuration("long", e.target.value)}
          onIncrement={() => changeDuration("long", 1)}
          onDecrement={() => changeDuration("long", -1)}
        />
      </div>
    </div>
  );
}

export default TimeSettings;