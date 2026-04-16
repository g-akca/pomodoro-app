import logoImg from "/assets/logo.svg";

import TabContainer from "./TabContainer";

function Header() {
  return (
    <header className="self-stretch flex flex-col items-center gap-10 tablet:gap-12 desktop:gap-14">
      <img src={logoImg} alt="Pomodoro logo" className="h-7 tablet:h-10" />

      <TabContainer />
    </header>
  )
}

export default Header;