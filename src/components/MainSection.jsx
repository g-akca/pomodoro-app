import settingsIcon from "/assets/icon-settings.svg";

import TimerContainer from "./TimerContainer";

function MainSection() {
  return (
    <main>
      <TimerContainer />

      <button type="button">
        <img src={settingsIcon} alt="Settings icon" />
      </button>
    </main>
  )
}

export default MainSection;