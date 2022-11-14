import { useState, useEffect } from 'react';

export default function useGameTimer(startGame, openVinWindow, isStartGame, setPlayerTime) {

  const [time, setTime] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  let interval = null;

  useEffect(() => {
    interval = setInterval(() => {
      startGame &&
        setTime(timer => timer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [startGame]);

  useEffect(() => {
    isStartGame(false);
    setPlayerTime(time);
    clearInterval(interval);
    setTime(0);
  }, [openVinWindow]);

  return [minutes, seconds];
}
