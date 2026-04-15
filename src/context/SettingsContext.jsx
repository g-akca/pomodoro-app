import { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    duration: {
      pomodoro: 25,
      short: 5,
      long: 15
    },
    font: "sans",
    color: "red",
    currentMode: "pomodoro"
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  return useContext(SettingsContext);
}