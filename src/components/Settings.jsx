import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import closeIcon from "/assets/icon-close.svg";
import upIcon from "/assets/icon-arrow-up.svg";
import downIcon from "/assets/icon-arrow-down.svg";

import { useSettings } from "/src/context/SettingsContext.jsx";
import { useState } from 'react';

function Settings({ closeSettings }) {
  const {settings, setSettings} = useSettings();

  const [localSettings, setLocalSettings] = useState(settings);

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

  function setSetting(type, value) {
    setLocalSettings(prev => ({
      ...prev,
      [type]: value
    }));
  }

  function applySettings() {
    const sanitizedDuration = Object.fromEntries(
      Object.entries(localSettings.duration).map(([key, value]) => {
        const num = Number(value);

        return [
          key,
          isNaN(num) ? 0 : Math.max(0, num)
        ];
      })
    );

    setSettings({
      ...localSettings,
      duration: sanitizedDuration
    });
    
    closeSettings();
  }

  const buttonColor = localSettings.color === "cyan"
    ? "bg-cyan-300"
    : localSettings.color === "purple"
      ? "bg-purple-400"
      : "bg-red-400";

  const fontClass = localSettings.font === "serif"
    ? "font-serif"
    : localSettings.font === "mono"
      ? "font-mono"
      : "font-sans";

  return (
    <div className={`bg-white w-full max-w-140 rounded-[15px] flex flex-col gap-4 ${fontClass}`}>
      <div className="flex justify-between pt-4.5 pb-4 px-6 border-b border-grey-200">
        <h1 className="text-[28px] leading-base font-bold text-blue-900">Settings</h1>

        <button type="button" onClick={closeSettings}>
          <img src={closeIcon} alt="Close icon" />
        </button>
      </div>

      <div className="px-6">
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

        <div className="py-6 border-b border-grey-200 flex flex-col gap-4">
          <h2 className="text-blue-900 font-bold text-[11px] leading-3.5 tracking-[4.23px] uppercase text-center">Font</h2>
        
          <div className="flex gap-4 justify-center text-[16px] leading-[100%] text-blue-850/73">
            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-sans font-bold has-checked:bg-blue-900 has-checked:text-white">
              <input
                type="radio"
                name="font"
                value="sans"
                checked={localSettings.font === "sans"}
                onChange={() => setSetting("font", "sans")}
                className="hidden"
              />
              <p>Aa</p>
            </label>

            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-serif has-checked:bg-blue-900 has-checked:text-white">
              <input
                type="radio"
                name="font"
                value="serif"
                checked={localSettings.font === "serif"}
                onChange={() => setSetting("font", "serif")}
                className="hidden"
              />
              <p>Aa</p>
            </label>

            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-blue-50 font-mono font-bold has-checked:bg-blue-900 has-checked:text-white">
              <input
                type="radio"
                name="font"
                value="mono"
                checked={localSettings.font === "mono"}
                onChange={() => setSetting("font", "mono")}
                className="hidden"
              />
              <p>Aa</p>
            </label>
          </div>
        </div>

        <div className="pt-6 flex flex-col gap-4">
          <h2 className="text-blue-900 font-bold text-[11px] leading-3.5 tracking-[4.23px] uppercase text-center">Color</h2>
        
          <div className="flex gap-4 justify-center">
            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-red-400">
              <input
                type="radio"
                name="color"
                value="red"
                checked={localSettings.color === "red"}
                onChange={() => setSetting("color", "red")}
                className="hidden peer"
              />
              <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
            </label>

            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-cyan-300">
              <input
                type="radio"
                name="color"
                value="cyan"
                checked={localSettings.color === "cyan"}
                onChange={() => setSetting("color", "cyan")}
                className="hidden peer"
              />
              <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
            </label>

            <label className="w-10 aspect-square rounded-full flex justify-center items-center bg-purple-400">
              <input
                type="radio"
                name="color"
                value="purple"
                checked={localSettings.color === "purple"}
                onChange={() => setSetting("color", "purple")}
                className="hidden peer"
              />
              <FontAwesomeIcon icon={faCheck} className="opacity-0 peer-checked:opacity-100 text-[16px]" />
            </label>
          </div>
        </div>
      </div>

      <button 
        type="button" 
        className={`${buttonColor} text-white text-[16px] leading-base font-bold w-35 h-13.25 self-center rounded-[26.5px] translate-y-6.25 -mt-2`}
        onClick={applySettings}
      >
        Apply
      </button>
    </div>
  )
}

export default Settings;