import { useSettings } from "../context/SettingsContext";

function TabContainer() {
  const { settings, setSettings } = useSettings();

  const tabMarkerColor = settings.color === "cyan"
    ? "before:bg-cyan-300"
    : settings.color === "purple"
      ? "before:bg-purple-400"
      : "before:bg-red-400";

  return (
    <div className="w-full max-w-82.5 tablet:max-w-95 bg-blue-900 rounded-[31.5px] p-[7.5px] h-15.75 z-10">
      <fieldset
        className={`
          relative h-full grid grid-cols-3 font-bold text-blue-100/40
          before:content-[''] before:absolute before:top-0 before:left-0 before:h-12 before:w-1/3 
          before:rounded-[26.5px] ${tabMarkerColor} before:transition-all before:duration-400
          ${
            settings.currentMode === "pomodoro" ? "before:translate-x-0"
            : settings.currentMode === "short" ? "before:translate-x-full"
            : "before:translate-x-[200%]"
          }
        `}
      >
        <legend class="sr-only">Choose a mode</legend>

        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-10 cursor-pointer has-checked:text-blue-850 hover:text-blue-100">
          <input type="radio" name="mode" value="pomodoro" onChange={(e) => setSettings(prev => ({...prev, currentMode: e.target.value}))} className="sr-only" checked={settings.currentMode === "pomodoro"} />
          <span className="lowercase">Pomodoro</span>
        </label>

        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-100 cursor-pointer has-checked:text-blue-850 hover:text-blue-100">
          <input type="radio" name="mode" value="short" onChange={(e) => setSettings(prev => ({...prev, currentMode: e.target.value}))} className="sr-only" checked={settings.currentMode === "short"} />
          <span className="lowercase">Short break</span>
        </label>

        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-100 cursor-pointer has-checked:text-blue-850 hover:text-blue-100">
          <input type="radio" name="mode" value="long" onChange={(e) => setSettings(prev => ({...prev, currentMode: e.target.value}))} className="sr-only" checked={settings.currentMode === "long"} />
          <span className="lowercase">Long break</span>
        </label>
      </fieldset>
    </div>
  )
}

export default TabContainer;