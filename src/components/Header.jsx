import logoImg from "/assets/logo.svg";

import TabContainer from "./TabContainer";
import { motion } from "framer-motion";

function Header() {
  return (
    <motion.header 
      className="self-stretch flex flex-col items-center gap-10 tablet:gap-12 desktop:gap-14"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <h1 class="sr-only">Pomodoro App</h1>
      <img src={logoImg} alt="Pomodoro logo" className="h-7 tablet:h-10" />

      <TabContainer />
    </motion.header>
  )
}

export default Header;