import settingsIcon from "/assets/icon-settings.svg";

import TimerContainer from "./TimerContainer";

function MainSection({ openSettings }) {
  return (
    <main className="flex flex-col items-center gap-20 tablet:gap-36 desktop:gap-16">
      <TimerContainer />

      <button type="button" onClick={openSettings}>
        <img src={settingsIcon} alt="Settings icon" />
      </button>
    </main>
  )
}

export default MainSection;