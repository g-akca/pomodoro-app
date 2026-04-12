import { useState } from "react";

function TabContainer() {
  const [mode, setMode] = useState("pomodoro");

  return (
    <div className="self-stretch bg-blue-900 rounded-[31.5px] p-[7.5px] h-15.75">
      <div
        className={`
          relative h-full grid grid-cols-3 font-bold text-blue-100
          before:content-[''] before:absolute before:top-0 before:left-0
          before:h-12 before:w-1/3 before:rounded-[26.5px] before:bg-red-400 before:transition-all
          ${
            mode === "pomodoro" ? "before:translate-x-0"
            : mode === "short"? "before:translate-x-full"
            : "before:translate-x-[200%]"
          }
        `}
      >
        <label className="relative z-10 flex justify-center items-center has-checked:text-blue-850">
          <input type="radio" name="mode" value="pomodoro" onChange={(e) => setMode(e.target.value)} className="hidden peer" defaultChecked />
          <p className="lowercase opacity-40 peer-checked:opacity-100">Pomodoro</p>
        </label>

        <label className="relative z-10 flex justify-center items-center has-checked:text-blue-850">
          <input type="radio" name="mode" value="short" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
          <p className="lowercase opacity-40 peer-checked:opacity-100">Short break</p>
        </label>

        <label className="relative z-10 flex justify-center items-center has-checked:text-blue-850">
          <input type="radio" name="mode" value="long" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
          <p className="lowercase opacity-40 peer-checked:opacity-100">Long break</p>
        </label>
      </div>
    </div>
  )
}

export default TabContainer;