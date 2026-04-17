import { useSettings } from "/src/context/SettingsContext.jsx";
import { useState } from 'react';

import TimeSettings from './TimeSettings';
import FontSettings from './FontSettings';
import ColorSettings from './ColorSettings';
import CloseIcon from "./icons/CloseIcon";

function Settings({ closeSettings }) {
  const {settings, setSettings} = useSettings();

  const [localSettings, setLocalSettings] = useState(settings);

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
    <div className={`bg-white w-full max-w-135 rounded-[15px] tablet:rounded-[25px] flex flex-col gap-4 tablet:gap-8 ${fontClass}`}>
      <div className="flex justify-between pt-4.5 tablet:pt-8.25 pb-4 tablet:pb-8 px-6 tablet:px-9 border-b border-grey-200">
        <h1 className="text-[28px] leading-base font-bold text-blue-900">Settings</h1>

        <button type="button" onClick={closeSettings}>
          <CloseIcon className="text-blue-850 cursor-pointer transition-all duration-300 hover:text-[#979797]" />
        </button>
      </div>

      <div className="px-6 tablet:px-9">
        <TimeSettings
          localSettings={localSettings}
          setLocalSettings={setLocalSettings}
        />

        <FontSettings
          localSettings={localSettings}
          setSetting={setSetting}
        />

        <ColorSettings
          localSettings={localSettings}
          setSetting={setSetting}
        />
      </div>

      <button 
        type="button" 
        className={`${buttonColor} text-white text-[16px] leading-base font-bold w-35 h-13.25 self-center rounded-[26.5px] translate-y-6.25 -mt-2 tablet:-mt-8`}
        onClick={applySettings}
      >
        Apply
      </button>
    </div>
  )
}

export default Settings;