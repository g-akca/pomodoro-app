import CircularProgress from "./CircularProgress";
import { useSettings } from "../context/SettingsContext";
import useTimer from "../hooks/useTimer";

function TimerContainer() {
  const { settings } = useSettings();
  const { timeLeft, isRunning, progress, toggleTimer } = useTimer();

  const displayTime = Math.floor(timeLeft);
  const minutes = Math.floor(displayTime / 60).toString().padStart(2, '0');
  const seconds = (displayTime % 60).toString().padStart(2, '0');

  const progressColor = settings.color === "cyan"
    ? "#70F3F8"
    : settings.color === "purple"
      ? "#D881F8"
      : "#F87070";

  const h2Classes = settings.font === "serif"
    ? "text-[80px] leading-[133%] font-bold tablet:text-[100px] tablet:leading-[130%]"
    : settings.font === "mono"
      ? "text-[80px] leading-base tracking-[-10px] -translate-x-1 tablet:text-[100px] tablet:leading-[150%]"
      : "text-[80px] leading-base font-bold tracking-[-5px] tablet:text-[100px]";

  return (
    <div className="h-75 tablet:h-102.5 aspect-square p-4 tablet:p-5.5 rounded-full bg-linear-275 from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_#272C5A,50px_50px_100px_#121530]">
      <div className="relative w-full h-full p-2.5 bg-blue-900 rounded-full flex items-center justify-center">
        <CircularProgress progress={progress} color={progressColor} />

        <div className="text-blue-100 text-center flex flex-col items-center tablet:gap-2">
          <h2 className={h2Classes}>{minutes}:{seconds}</h2>
          <button
            type="button"
            onClick={toggleTimer}
            className="translate-x-[7.5px] text-[14px] tablet:text-[16px] leading-[120%] tablet:leading-base tracking-[13px] tablet:tracking-[15px] font-bold uppercase"
          >
            {isRunning ? "Pause" : (timeLeft <= 0 ? "Restart" : "Start")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimerContainer;