import { useState } from "react";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import SettingsModal from "./components/SettingsModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="text-base leading-base bg-blue-850 min-h-screen flex flex-col items-center gap-12 py-8 px-[22.5px]">
      <Header />
      
      <MainSection openModal={() => setIsModalOpen(true)} />

      {isModalOpen && 
        <SettingsModal />
      }
    </div>
  )
}

export default App
