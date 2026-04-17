function FontSettings({ localSettings, setSetting }) {
  return (
    <div className="py-6 border-b border-grey-200 flex flex-col tablet:flex-row tablet:justify-between tablet:items-center gap-4">
      <h2 className="text-blue-900 font-bold text-[11px] tablet:text-[13px] leading-3.5 tablet:leading-base tracking-[4.23px] tablet:tracking-[5px] uppercase text-center tablet:text-start">Font</h2>

      <div className="flex gap-4 justify-center text-[16px] leading-[100%] text-blue-850/73">
        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-sans font-bold has-checked:bg-blue-900 has-checked:text-white cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-blue-50 hover:ring-offset-[5px]">
          <input
            type="radio"
            name="font"
            value="sans"
            checked={localSettings.font === "sans"}
            onChange={() => setSetting("font", "sans")}
            className="sr-only"
          />
          <span>Aa</span>
        </label>

        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-serif has-checked:bg-blue-900 has-checked:text-white cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-blue-50 hover:ring-offset-[5px]">
          <input
            type="radio"
            name="font"
            value="serif"
            checked={localSettings.font === "serif"}
            onChange={() => setSetting("font", "serif")}
            className="sr-only"
          />
          <span>Aa</span>
        </label>

        <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-mono font-bold has-checked:bg-blue-900 has-checked:text-white cursor-pointer transition-all duration-300 hover:ring-1 hover:ring-blue-50 hover:ring-offset-[5px]">
          <input
            type="radio"
            name="font"
            value="mono"
            checked={localSettings.font === "mono"}
            onChange={() => setSetting("font", "mono")}
            className="sr-only"
          />
          <span>Aa</span>
        </label>
      </div>
    </div>
  );
}

export default FontSettings;