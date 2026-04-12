function TabContainer() {
  return (
    <div className="self-stretch bg-blue-900 rounded-[31.5px] p-[7.5px] h-15.75 grid grid-cols-3 font-bold">
      <label className="flex justify-center items-center bg-red-400 rounded-[26.5px] text-blue-850">
        <input type="radio" className="hidden" defaultChecked />
        <p className="lowercase">Pomodoro</p>
      </label>

      <label className="flex justify-center items-center rounded-[26.5px] text-blue-100">
        <input type="radio" className="hidden" />
        <p className="lowercase opacity-40">Short break</p>
      </label>

      <label className="flex justify-center items-center rounded-[26.5px] text-blue-100">
        <input type="radio" className="hidden" />
        <p className="lowercase opacity-40">Long break</p>
      </label>
    </div>
  )
}

export default TabContainer;