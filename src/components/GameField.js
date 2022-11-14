import React, { useContext } from 'react';
import '../styles/gamefield.scss';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import { GameContext } from './Context';


export default function GameField() {
  const data = useContext(GameContext);

  return (
    <>
      <h2>Рівень складності {data.selectLevel.title}</h2>
      {data.selectLevel.title && <Timer minutes={data.minutes} seconds={data.seconds} />}
      {data.startGame && <Timer minutes={data.gameMinutes} seconds={data.setGameMinutes} />}
      <div className='field'>
        <GameFieldInner />
      </div>
      <div className='details'>
        <DetailsInner />
      </div>
    </>
  )
}
