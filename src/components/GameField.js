import React, { useState, useEffect } from 'react'
import '../styles/gamefield.scss'
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';


export default function GameField({ selectLevel, arr }) {


  const [minutes, seconds] = useTimer(selectLevel);
  const [startGame, isStartGame] = useState(false);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) { isStartGame(true) }
  }, [minutes, seconds]);


  return (
    <>
      <h2>Рівень складності {selectLevel.title}</h2>
      {
        selectLevel.title && <Timer minutes={minutes} seconds={seconds} />
      }
      <div className='field'>
        <GameFieldInner
          arr={arr}
          startGame={startGame}

        />
      </div>
      <div className='details'>
        <DetailsInner
          arr={arr}
        />
      </div>
    </>
  )
}
