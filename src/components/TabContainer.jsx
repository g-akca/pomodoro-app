import { useState } from "react";

function TabContainer() {
  const [mode, setMode] = useState("pomodoro");

  return (
    <div className="w-full max-w-82.5 bg-blue-900 rounded-[31.5px] p-[7.5px] h-15.75 z-10">
      <div
        className={`
          relative h-full grid grid-cols-3 font-bold text-blue-100/40
          before:content-[''] before:absolute before:top-0 before:left-0 before:h-12 before:w-1/3 
          before:rounded-[26.5px] before:bg-red-400 before:transition-all before:duration-400
          ${
            mode === "pomodoro" ? "before:translate-x-0"
            : mode === "short"? "before:translate-x-full"
            : "before:translate-x-[200%]"
          }
        `}
      >
        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-100 has-checked:text-blue-850">
          <input type="radio" name="mode" value="pomodoro" onChange={(e) => setMode(e.target.value)} className="hidden peer" defaultChecked />
          <p className="lowercase">Pomodoro</p>
        </label>

        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-100 has-checked:text-blue-850">
          <input type="radio" name="mode" value="short" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
          <p className="lowercase">Short break</p>
        </label>

        <label className="relative z-10 flex justify-center items-center transition-all delay-100 duration-100 has-checked:text-blue-850">
          <input type="radio" name="mode" value="long" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
          <p className="lowercase">Long break</p>
        </label>
      </div>
    </div>
  )
}

export default TabContainer;