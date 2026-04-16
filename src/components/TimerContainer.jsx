import { useState, useEffect, useLayoutEffect, useRef } from "react";
import CircularProgress from "./CircularProgress";
import { useSettings } from "../context/SettingsContext";

function TimerContainer() {
  const { settings } = useSettings();
  const totalSeconds = settings.duration[settings.currentMode] * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useLayoutEffect(() => {
    setTimeLeft(totalSeconds);
    setIsRunning(false);
  }, [settings.currentMode, totalSeconds]);

  const animateRef = useRef();

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) {
      if (animateRef.current) cancelAnimationFrame(animateRef.current);
      return;
    }

    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      setTimeLeft(prev => {
        const newTime = prev - delta;
        if (newTime <= 0) {
          setIsRunning(false);
          return 0;
        }
        return newTime;
      });

      animateRef.current = requestAnimationFrame(animate);
    };

    animateRef.current = requestAnimationFrame(animate);

    return () => {
      if (animateRef.current) cancelAnimationFrame(animateRef.current);
    };
  }, [isRunning, timeLeft]);

  const displayTime = Math.floor(timeLeft);
  const minutes = Math.floor(displayTime / 60).toString().padStart(2, '0');
  const seconds = (displayTime % 60).toString().padStart(2, '0');
  const progress = totalSeconds > 0 ? (timeLeft <= 0 ? 1 : Math.max(0, Math.min(1, timeLeft / totalSeconds))) : 0;

  const progressColor = settings.color === "cyan"
    ? "#70F3F8"
    : settings.color === "purple"
      ? "#D881F8"
      : "#F87070";

  return (
    <div className="h-75 aspect-square p-4 rounded-full bg-linear-275 from-[#2E325A] to-[#0E112A] shadow-[-50px_-50px_100px_#272C5A,50px_50px_100px_#121530]">
      <div className="relative w-full h-full p-2.5 bg-blue-900 rounded-full flex items-center justify-center">
        <CircularProgress progress={progress} color={progressColor} />

        <div className="text-blue-100 text-center flex flex-col items-center">
          <h2 className="text-[80px] leading-base font-bold tracking-[-5px]">{minutes}:{seconds}</h2>
          <button type="button" onClick={() => {
            if (timeLeft <= 0) {
              setTimeLeft(totalSeconds);
              setIsRunning(true);
            } else {
              setIsRunning(!isRunning);
            }
          }} className="translate-x-[7.5px] text-[14px] leading-[120%] tracking-[13px] font-bold uppercase">{isRunning ? "Pause" : (timeLeft <= 0 ? "Restart" : "Start")}</button>
        </div>
      </div>
    </div>
  )
}

export default TimerContainer;