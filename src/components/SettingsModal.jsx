import closeIcon from "/assets/icon-close.svg";

function SettingsModal({ closeModal }) {
  return (
    <div className="fixed inset-0 bg-blue-950 z-40 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-140 rounded-[15px] flex flex-col gap-4">
        <div className="flex justify-between py-4 px-6 border-b border-grey-200">
          <h1 className="text-[28px] leading-base font-bold text-blue-900">Settings</h1>

          <button type="button" onClick={closeModal}>
            <img src={closeIcon} alt="Close icon" />
          </button>
        </div>

        <div className="px-6">
          <div className="pb-6 border-b border-grey-200 flex flex-col gap-4">
            <h2 className="text-blue-900 font-bold text-[11px] leading-[100%] tracking-[4.23px] uppercase text-center">Time (Minutes)</h2>
          
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label for="pomodoro" className="opacity-40 lowercase font-bold">Pomodoro</label>
  
                <input type="number" className="w-35 h-10 px-4 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold" />
              </div>

              <div className="flex justify-between items-center">
                <label for="pomodoro" className="opacity-40 lowercase font-bold">Short break</label>
  
                <input type="number" className="w-35 h-10 px-4 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold" />
              </div>

              <div className="flex justify-between items-center">
                <label for="pomodoro" className="opacity-40 lowercase font-bold">Long break</label>
  
                <input type="number" className="w-35 h-10 px-4 bg-blue-50 rounded-[10px] text-[13px] leading-base tracking-[3px] font-bold" />
              </div>
            </div>
          </div>

          <div className="py-6 border-b border-grey-200 flex flex-col gap-4">
            <h2 className="text-blue-900 font-bold text-[11px] leading-[100%] tracking-[4.23px] uppercase text-center">Font</h2>
          
            <div className="flex gap-4 justify-center text-[16px] leading-[100%] text-blue-850/73">
              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-sans font-bold has-checked:bg-blue-900 has-checked:text-white">
                <input type="radio" name="font" value="sans" className="hidden" defaultChecked />
                <p>Aa</p>
              </label>

              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-serif has-checked:bg-blue-900 has-checked:text-white">
                <input type="radio" name="font" value="serif" className="hidden" />
                <p>Aa</p>
              </label>

              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-mono font-bold has-checked:bg-blue-900 has-checked:text-white">
                <input type="radio" name="font" value="mono" className="hidden" />
                <p>Aa</p>
              </label>
            </div>
          </div>

          <div className="pt-6 flex flex-col gap-4">
            <h2 className="text-blue-900 font-bold text-[11px] leading-[100%] tracking-[4.23px] uppercase text-center">Color</h2>
          
            <div className="flex gap-4 justify-center">
              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-red-400">
                <input type="radio" name="color" value="red" className="hidden peer" defaultChecked />
                <p className="hidden peer-checked:block text-[20px]">+</p>
              </label>

              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-cyan-300">
                <input type="radio" name="color" value="cyan" className="hidden peer" />
                <p className="hidden peer-checked:block text-[20px]">+</p>
              </label>

              <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-purple-400">
                <input type="radio" name="color" value="purple" className="hidden peer" />
                <p className="hidden peer-checked:block text-[20px]">+</p>
              </label>
            </div>
          </div>
        </div>

        <button type="button" className="bg-red-400 text-white text-[16px] leading-base font-bold w-35 h-13.25 self-center rounded-[26.5px]">Apply</button>
      </div>
    </div>
  )
}

export default SettingsModal;