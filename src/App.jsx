import { useState } from "react";
import { useSettings } from "./context/SettingsContext.jsx";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Settings from "./components/Settings";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { settings } = useSettings();

  const fontClass = settings.font === "serif"
    ? "font-serif"
    : settings.font === "mono"
      ? "font-mono"
      : "font-sans";

  const tabletFontSize = settings.font === "mono" ? "tablet:text-[13px]" : "tablet:text-[14px]";
  const tabletLineHeight = settings.font === "mono" ? "tablet:leading-[145%]" : "tablet:leading-[120%]";

  return (
    <div className={`text-base ${tabletFontSize} leading-base ${tabletLineHeight} min-h-screen py-8 tablet:py-10 desktop:py-12 flex flex-col justify-center items-center ${fontClass} ${isSettingsOpen ? "bg-blue-950 justify-center px-6" : "bg-blue-850 gap-12 tablet:gap-27 desktop:gap-9 px-5.75"}`}>
      {isSettingsOpen ? ( 
        <Settings closeSettings={() => setIsSettingsOpen(false)} />
      ) : (
        <>
          <Header />
          <MainSection openSettings={() => setIsSettingsOpen(true)} />
        </>
      )}
    </div>
  )
}

export default App
