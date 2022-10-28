import React, { useState, useEffect } from 'react'
import '../styles/gamefield.scss'
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';
// import DeleteButton from './DeleteButton';




export default function GameField({ selectLevel, arr }) {

  
  //копия картинки, которую мы перетаскиваем
  const [currentDetail, setCurrentDetail] = useState(null);

  const [minutes, seconds] = useTimer(selectLevel);
  const [startGame, isStartGame] = useState(false);

  //посадочное место для картинки, которую перетаскиваем
  const [currentElement, setCurrentElement] = useState(null);

  const [currentClass, setCurrentClass] = useState(null);

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
          currentElement={currentElement}
          currentClass={currentClass}
        />
      </div>
      <div className='details'>
        <DetailsInner
        />
      </div>
    </>
  )
}
