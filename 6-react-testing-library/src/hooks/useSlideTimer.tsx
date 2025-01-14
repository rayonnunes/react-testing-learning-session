import { useState, useEffect } from 'react';

interface TimerConfig {
  duration: number;
  autoStart?: boolean;
}

export const useSlideTimer = ({ duration, autoStart = false }: TimerConfig) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(autoStart);
  
  useEffect(() => {
    let intervalId: number;
    
    if (isRunning && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isRunning, timeLeft]);
  
  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setTimeLeft(duration);
    setIsRunning(false);
  };
  
  return { timeLeft, isRunning, start, pause, reset };
};