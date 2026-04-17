import settingsIcon from "/assets/icon-settings.svg";

import TimerContainer from "./TimerContainer";
import SettingsIcon from "./icons/SettingsIcon";

function MainSection({ openSettings }) {
  return (
    <main className="flex flex-col items-center gap-20 tablet:gap-36 desktop:gap-16">
      <TimerContainer />

      <button type="button" onClick={openSettings}>
        <SettingsIcon className="cursor-pointer transition-all duration-300 text-blue-100 opacity-50 hover:opacity-100" />
      </button>
    </main>
  )
}

export default MainSection;