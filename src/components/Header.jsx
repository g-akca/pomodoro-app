import logoImg from "/assets/logo.svg";

import TabContainer from "./TabContainer";

function Header() {
  return (
    <header className="self-stretch flex flex-col items-center gap-10">
      <img src={logoImg} alt="Pomodoro logo" className="h-7" />

      <TabContainer />
    </header>
  )
}

export default Header;