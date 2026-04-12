import { useState } from "react";

function TabContainer() {
  const [mode, setMode] = useState("pomodoro");

  return (
    <div className="self-stretch bg-blue-900 rounded-[31.5px] p-[7.5px] h-15.75 grid grid-cols-3 font-bold text-blue-100">
      <label className="flex justify-center items-center rounded-[26.5px] has-checked:text-blue-850 has-checked:bg-red-400">
        <input type="radio" name="mode" value="pomodoro" onChange={(e) => setMode(e.target.value)} className="hidden peer" defaultChecked />
        <p className="lowercase opacity-40 peer-checked:opacity-100">Pomodoro</p>
      </label>

      <label className="flex justify-center items-center rounded-[26.5px] has-checked:text-blue-850 has-checked:bg-red-400">
        <input type="radio" name="mode" value="short" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
        <p className="lowercase opacity-40 peer-checked:opacity-100">Short break</p>
      </label>

      <label className="flex justify-center items-center rounded-[26.5px] has-checked:text-blue-850 has-checked:bg-red-400">
        <input type="radio" name="mode" value="long" onChange={(e) => setMode(e.target.value)} className="hidden peer" />
        <p className="lowercase opacity-40 peer-checked:opacity-100">Long break</p>
      </label>
    </div>
  )
}

export default TabContainer;