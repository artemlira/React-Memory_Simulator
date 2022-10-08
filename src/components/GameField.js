import React, { useState, useEffect } from 'react'
import '../styles/gamefield.scss'
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';

export default function GameField({ selectLevel, arr }) {

  const [currentDetail, setCurrentDetail] = useState(null);

  const [minutes, seconds] = useTimer(selectLevel);

  const [startGame, isStartGame] = useState(false);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) { isStartGame(true) }
  }, [minutes, seconds])



  const dragOverHandler = (e) => {
    e.preventDefault()
    if (e.target.matches('img')) {
      e.target.style.backgroundColor = '#ff0000';
    }
  }

  const dragLeaveHandler = (e) => {
    if (e.target.matches('img')) {
      e.target.style.boxShadow = 'none'
    }
  }

  const dragStartHendler = (e) => {
    if (e.target.matches('img')) {
      let copyElement = e.target.cloneNode(true);
      setCurrentDetail(copyElement);
    }

  }

  const dragEndHandler = (e) => {
    if (e.target.matches('img')) {

    }
  }

  const dropHandler = (e) => {
    e.preventDefault();
    if (e.target.matches('.field__item')) {
      e.target.insertAdjacentElement('afterbegin', currentDetail);
    }
  }

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
          dragOverHandler={dragOverHandler}
          dragLeaveHandler={dragLeaveHandler}
          dragEndHandler={dragEndHandler}
          dropHandler={dropHandler}

        />
      </div>
      <div className='details'>
        <DetailsInner

          dragOverHandler={dragOverHandler}
          dragLeaveHandler={dragLeaveHandler}
          dragEndHandler={dragEndHandler}
          dragStartHendler={dragStartHendler}

        />
      </div>
    </>
  )
}
