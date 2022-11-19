import React, { useContext, useEffect } from 'react';
import '../styles/gamefield.scss';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import { GameContext } from './Context';
import useTimer from '../hooks/useTimer';

export default function GameField() {
  const data = useContext(GameContext);

  const [minutes, seconds] = useTimer(data.selectLevel, data.timerRange);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) { data.isStartGame(true) }
  }, [minutes, seconds]);


  return (
    <>
      <h2>Рівень складності {data.selectLevel.title}</h2>
      {(data.selectLevel.title && !data.startGame) && <Timer minutes={minutes} seconds={seconds} />}
      {data.startGame && <Timer minutes={data.gameMinutes} seconds={data.gameSeconds} />}
      <div className='field'>
        <GameFieldInner />
      </div>
      <div className='details'>
        <DetailsInner />
      </div>
    </>
  )
}
