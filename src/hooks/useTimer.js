import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { useSettings } from "../context/SettingsContext";

function useTimer() {
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

  const toggleTimer = () => {
    if (timeLeft <= 0) {
      setTimeLeft(totalSeconds);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const progress = totalSeconds > 0 ? (timeLeft <= 0 ? 1 : Math.max(0, Math.min(1, timeLeft / totalSeconds))) : 0;

  return {
    timeLeft,
    isRunning,
    totalSeconds,
    progress,
    toggleTimer
  };
}

export default useTimer;