import settingsIcon from "/assets/icon-settings.svg";

import TimerContainer from "./TimerContainer";

function MainSection({ openModal }) {
  return (
    <main className="flex flex-col items-center gap-20">
      <TimerContainer />

      <button type="button" onClick={openModal}>
        <img src={settingsIcon} alt="Settings icon" />
      </button>
    </main>
  )
}

export default MainSection;