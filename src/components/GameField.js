import React from 'react'
import '../styles/gamefield.scss'
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';

export default function GameField({ selectLevel, arr }) {
  return (
    <>
      <h2>Рівень складності {selectLevel.title}</h2>
      <Timer />
      <div className='field'>
        <GameFieldInner
          count={selectLevel.count}
          arr={arr}
        />
      </div>
      <div className='details'>
        <DetailsInner />
      </div>

    </>
  )
}
