import { useState } from "react";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Settings from "./components/Settings";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className={`text-base leading-base min-h-screen py-8 flex flex-col items-center ${isSettingsOpen ? "bg-blue-950 justify-center px-6" : "bg-blue-850 gap-12 px-5.75"}`}>
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
