import { useState, useEffect } from 'react'

export default function useGameTimer(startGame, result) {

  const [time, setTime] = useState(0);

  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;


  useEffect(() => {
    const interval = setInterval(() => {
      startGame &&
        setTime(time => time += 1);
    }, 1000);
    if (result) {
      console.log('stop');
      clearInterval(interval);
    }

  }, [startGame, result]);

  return [minutes, seconds];
}
