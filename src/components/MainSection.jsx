import TimerContainer from "./TimerContainer";
import SettingsIcon from "./icons/SettingsIcon";

import { motion } from "framer-motion";

function MainSection({ openSettings }) {
  return (
    <motion.main 
      className="flex flex-col items-center gap-20 tablet:gap-36 desktop:gap-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <TimerContainer />

      <button type="button" onClick={openSettings}>
        <SettingsIcon className="cursor-pointer transition-all duration-300 text-blue-100 opacity-50 hover:opacity-100" />
      </button>
    </motion.main>
  )
}

export default MainSection;